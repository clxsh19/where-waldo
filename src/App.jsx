import React from 'react';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase-config';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useEffect, useState, useCallback } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './components/home';
import Game from './components/game';
import './style.css';

function App() {

  const [levels, setLevels] = useState([]);

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);

  const memoizedGetLevels = useCallback(async () => {
    const levelRef = collection(db, 'levels');
    const levelSnap = await getDocs(levelRef);

    const dummyLevels = await Promise.all(
      levelSnap.docs.map(async (level) => {
        const img_url = level.data().image_url;
        const charRef = collection(db, 'levels', level.id, 'characters');
        const charSnap = await getDocs(charRef);

        const charObj = {};
        charSnap.docs.forEach((doc) => {
          const character = doc.data();
          charObj[character.name] = {
            x: character.x,
            y: character.y,
          };
        });

        return {
          image_url: img_url,
          characters: charObj,
        };
      })
    );

    console.log(dummyLevels);
    setLevels(dummyLevels);
  }, []);

  useEffect(() => {
    // console.time('filter array');
    // getLevels();
    // console.timeEnd('filter array');
    memoizedGetLevels();
    
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home levels={levels} />} /> 
        {levels.map((level, id) => (
          <Route
            key={id}
            path={`/map/${id}`}
            element={<Game image_url={level.image_url} characters={} />}
          />
        ))}
      </Routes>
    </>
  )
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import UserCard from './components/UserCard';
import tarjet from './data/tarjet.json';

function App() {
  const images = [
    "./src/components/img/fondo1.png",
    "./src/components/img/fondo2.png",
    "./src/components/img/fondo3.png",
    "./src/components/img/fondo4.png",
    "./src/components/img/fondo5.jpg",
    "./src/components/img/fondo6.jpg",
    "./src/components/img/fondo7.jpg",
    "./src/components/img/fondo8.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const body = document.body;
    body.style.backgroundImage = `url(${images[index]})`;
  }, [index, images]);

  const changeBackground = () => {
    const newIndex = Math.floor(Math.random() * images.length);
    setIndex(newIndex);
  };

  return (
    <>
      <UserCard data={tarjet[index]} />
      <div className='trasladar'>
        <button className="caja" onClick={changeBackground}>
          <i className='bx bxs-tree'></i>Prueba Tu Suerte<i className='bx bxs-tree'></i>
        </button>
      </div>
    </>
  );
}

export default App;

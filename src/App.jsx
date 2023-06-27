
import './App.css';
import UserCard from './components/UserCard';
import tarjet from './data/tarjet.json';
import { useState, useEffect } from 'react';

function App() {
  const images = [
    "./src/components/img/fondo1.png",
    "./src/components/img/fondo2.png",
    "./src/components/img/fondo3.png",
    "./src/components/img/fondo4.png"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const body = document.body;
    body.style.backgroundImage = `url(${images[index]})`;

    const changeBackground = () => {
      setIndex((prevIndex) => (prevIndex + 10) % images.length);
    };

    body.addEventListener("click", changeBackground);

    return () => {
      body.removeEventListener("click", changeBackground);
    };
  }, [index, images]);

  return (
    <>
      <UserCard data={tarjet[index]} />
      <button onClick={() => setIndex((prevIndex) => (prevIndex + 1) + images.length)}>
        tyujtu<i className='bx bx-shuffle'></i>
      </button>
    </>
  );
}

export default App;

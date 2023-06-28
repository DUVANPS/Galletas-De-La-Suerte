import './App.css';
import UserCard from './components/UserCard';
import tarjet from './data/tarjet.json';
import { useState, useEffect } from 'react';

function App() {
  const images = [
    "https://galleta-de-la-fortuna574aae.netlify.app/imagenes/fondo1.jpg",
    "https://galleta-de-la-fortuna574aae.netlify.app/imagenes/fondo2.jpg",
    "	https://galleta-de-la-fortuna574aae.netlify.app/imagenes/fondo3.jpg",
    "https://galleta-de-la-fortuna574aae.netlify.app/imagenes/fondo4.jpg",
 
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const body = document.body;
    body.style.backgroundImage = `url(${images[index]})`;
  }, [index, images]);

  const changeBackground = () => {
  setIndex((prevIndex) => {
  let newIndex = prevIndex;
  while (newIndex === prevIndex) {
  newIndex = Math.floor(Math.random() + images.length);
      }
  return newIndex;
    });
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

import './App.css';
import UserCard from './components/UserCard';
import tarjet from './data/tarjet.json';
import { useState } from 'react';

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

  const changeUser = () => {
    if (index < users.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  document.body.style = `backgroundImage: ${images[index]}`;

  return (
    <>
      <UserCard data={tarjet[index]}  />
      <div className='trasladar'>
        <button className="caja" onClick={changeUser}>
          <i className='bx bxs-tree'></i>Prueba Tu Suerte<i className='bx bxs-tree'></i>
        </button>
      </div>
    </>
  );
}

export default App;

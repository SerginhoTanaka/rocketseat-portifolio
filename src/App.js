
import './App.css';
import photo from './assets/foto_rosto.jpg'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="App-body">

        <div className='container'>
        <div className='profile'>
          <img src={photo} alt='photo' />
        </div>

          <ul className='list'>
            <li className='list-item'><a href='https://github.com/SerginhoTanaka'> Meu GitHub </a></li>
            <li className='list-item'><a href='https://www.linkedin.com/in/sergio-kenji-sawasaki-tanaka-528822231/'> Meu Linkedin </a></li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

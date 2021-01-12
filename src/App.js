import './App.scss';
import Vertical from './components/Vertical/vertical';
import Horizontal from './components/Horizontal/horizontal';

function App() {

  return (
    <div>
      <Vertical />
      <div className="horizWrapper">
        <div className="divLine"></div>
        <Horizontal />
      </div>
    </div>
  );
}

export default App;

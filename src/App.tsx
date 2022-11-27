import { Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Route exact path={"/"} render={()=> <Home/> } />
    </div>
  );
}

export default App;

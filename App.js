import logo from './logo.svg';
import './App.css';
import SimpleInput from './components/SimpleInput';
import Votes from './components/Votes';
import {Provider} from 'react-redux';
import voteStore from './store/votes-store';
function App() {
  return (
    <div className="app">
   {/* <SimpleInput></SimpleInput> */}
   <Provider store={voteStore}>
   <Votes></Votes>
   </Provider>
   </div>
  );
}

export default App;

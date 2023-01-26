import styles from './App.module.css';
import Header from './Header';
import Navigation from './Navigation';
import Main from './Main';
import SubComponents from './SubContents';
import Advertisement from './Advertisement';
import SunComponents from './SunContents';
import SubComponent from './subcontent';

function App() {
  return (
    <div className="App">
      <div className={ styles.ap }></div>;
      <Header/>
      <Navigation/>
      <Main/>
      <SubComponents/>
      <SunComponents/>
      <SubComponent/>
      <Advertisement/> 

    </div>
  );
}

export default App;

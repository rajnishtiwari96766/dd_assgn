import './App.css'
import navLinksData from "./data.json";
import Header from './components/header';
import Drop_dn from './components/drop_dn';
import HorizontalScrollContainer from './components/scroll';
import Bottom_header from './components/bottom_header';
import Bottom from './components/bottom';

const App=()=> {
  return (
    <div className='App'>
      <Header/>
      <div className='header-parent'>
        <div className='header'>
          <Drop_dn navLinksData={navLinksData} />
        </div>
      </div>
      <HorizontalScrollContainer/>
      <Bottom_header/>
      <Bottom/>
    </div>
  );
}

export default App;
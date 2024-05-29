// import Props from '../src/components/props/Props';
import './App.css';
import Card from './components/card/Card';
import SizeProp from './components/props/SizeProp';
import Profile from './components/card/Profile';
function App() {
  // const maria = {
  //   name: "Maria Skłodowska-Curie",
  //   profession: "physicist and chemist",
  //   awards: "Nobel Prize in Physics, Nobel Prize in Chemistry, DavyMedal, Matteucci Medal",
  //   discovery: "polonium (chemical element)"
  // }
  // const katsuko = {
  //     name: "Katsuko Saruhashi",
  //     profession: "geochemist",
  //     awards: "(Miyake Prize for geochemistry, Tanaka Prize)",
  //     discovery: "a method for measuring carbon dioxide in seawater",
  // };
  return (
<>
{/* <Props maria={maria} katsuko={katsuko} /> */}

<SizeProp />
<Card />
<Profile />
</>
    
  );
}

export default App;

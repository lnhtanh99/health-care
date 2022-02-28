import Bmi from "./components/Bmi";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { useState } from 'react';
import Health from "./components/Health";

function App() {
  const [isBmi, setIsBmi] = useState(true);

  return (
    <div className="App">
      <Navbar isBmi={isBmi} setIsBmi={setIsBmi}/>
      { isBmi ? <Bmi/> : <Health/>}
      <Footer/>
    </div>
  );
}

export default App;

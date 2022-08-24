import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Mobile from "./components/mobile/Mobile";

import Navbar from "./components/Navbar";
import Learning from "./components/parentSlide/Learning";

import Potential from "./components/potential/Potential";
import Question from "./components/questions/Question";
import Support from "./components/supportChild/Support";

function App() {
  return (
    <div className="App" style={{backgroundColor:"#DBA5FF"}}>
      <Navbar/>
      <Main/>
      <Card/>
      <Potential/>
      <Learning/>
      <Support/>
     
      <Question/>
      <Mobile/>
      <Footer/>
   
    </div>
  );
}

export default App;

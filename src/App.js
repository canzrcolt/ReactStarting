import Buttons from "./components/Buttons";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App({title}) {
  return (
    <div className="main-text">
      <Header tiple='sup'/>
      <Buttons />
      <h1>{title}</h1>
     <Navbar />   
    </div>
  );
}
export default App;

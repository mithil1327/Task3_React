import Navigation from "./pages/Navigation"
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Data from "./pages/Data"
function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path ="/" element ={<Home/>}/>
        <Route path ="/Data" element ={<Data/>}/>
      </Routes>
    </div>
  );
}
export default App

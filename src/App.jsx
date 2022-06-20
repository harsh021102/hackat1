import { Routes,Route } from "react-router-dom";
import Hackerrank from "./components/Hackerrank";
import Navbar from "./components/Navbar";
import  Card from './components/Card'
import  Footer from './components/Footer'
import Codechef from "./components/Codechef";
import Hackerearth from "./components/Hackerearth";
import Kickstart from "./components/Kickstart";
import Codeforces from "./components/Codeforces";
import Leetcode from "./components/Leetcode";
function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar/>
      <Card />
      <div className="flex flex-1 flex-col bg-light-black items-center">
      <Routes>
        <Route path="/" element={<Codechef/>}/>
        <Route path="/hackat1" element={<Codechef/>}/>
        <Route path="/hackerrank" element={<Hackerrank/>}/>
        <Route path="/hackerearth" element={<Hackerearth/>}/>
        <Route path="/codeforces" element={<Codeforces/>}/>
        <Route path="/leetcode" element={<Leetcode/>}/>
        <Route path="/kickstart" element={<Kickstart/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

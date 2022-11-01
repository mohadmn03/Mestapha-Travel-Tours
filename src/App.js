import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Steps from "./components/Steps";

//
function App() {
  return (
    <div className="bg-black -z-50">
      <div className="z-10">
        <img
          className="absolute object-cover w-full h-[100vh] brightness-50"
          src="https://t3.ftcdn.net/jpg/03/65/85/52/360_F_365855253_Q0ReCMX1JpnwH059S9NsboMvcmwdS2Cj.jpg"
          alt=""
        />
      </div>
      <Navbar />
      <div className="w-full h-[100vh] flex items-center justify-center relative">
        <Home />
      </div>
      <Steps />
    </div>
  );
}

export default App;
//px = 54

import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";

function App() {
  return (
    <div className="w-screen h-screen flex-center bg-slate-50">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;

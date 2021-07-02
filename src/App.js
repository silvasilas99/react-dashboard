import Sidebard from "./components/Sidebar/Sidebard";
import Topbar from "./components/Topbar/Topbar";
import './App.css';
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebard />
        <Home />
      </div>
    </div>
  );
}

export default App;

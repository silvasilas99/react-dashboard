import Sidebard from "./components/Sidebar/Sidebard";
import Topbar from "./components/Topbar/Topbar";
import './App.css';

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebard />
        <div className="others">
          adskajds
        </div>
      </div>
    </div>
  );
}

export default App;

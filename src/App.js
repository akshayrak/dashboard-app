import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
      </div>
    </>
  );
}

export default App;

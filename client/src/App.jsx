import Nav from "./components/Nav";
import Main from "./components/Main";

function App() {
  return (
    <div className="app">
      <div className="header ">
        {/* <Navbar /> */}
        <Nav />
      </div>
      <div className="content">
        <Main />
      </div>
    </div>
  );
}

export default App;

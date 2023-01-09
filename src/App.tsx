import Info from "./component/Info";
import About from "./component/About";
import Interests from "./component/Interests";
import SocialLinks from "./component/SocialLinks";

function App() {
  return (
    <div className="App">
      <Info />
      <div className="App-content">
        <About />
        <Interests />
      </div>
      <SocialLinks />
    </div>
  );
}

export default App;
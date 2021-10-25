import "./App.css";
import Header from "./Header";
import JWMCards from "./JWMCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    // BEM class convention used
    <div className="app">
      <Header />
      <JWMCards />
      <SwipeButtons />
    </div>
  );
}

export default App;

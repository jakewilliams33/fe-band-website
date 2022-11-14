import "./Styles/App.css";
import { NavBar } from "./Components/NavBar";
import { useState } from "react";
import { TopBanner } from "./Components/TopBanner";
import { MobileDropdownBg } from "./Components/MobileDropdownBg";
import { AnimatedRoutes } from "./Components/AnimatedRoutes";

function App() {
  const [showBackground, setShowBackground] = useState(false);

  return (
    <>
      <div className="App">
        <TopBanner showBackground={showBackground} />
        <MobileDropdownBg showBackground={showBackground} />
        <NavBar
          setShowBackground={setShowBackground}
          showBackground={showBackground}
        />
        <AnimatedRoutes showBackground={showBackground}></AnimatedRoutes>
      </div>
    </>
  );
}

export default App;

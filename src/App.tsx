import Navbar from "./components/Navbar";
import { useState } from "react";

const navItems: string[] = [
  "Home",
  "About",
  "Classes",
  "Trainers",
  "Gallery",
  "Contact us",
];
function App() {
  const [isOpenmenu, setisOpenmenu] = useState<boolean>(false);
  return (
    <div className="App">
      <Navbar {...{ isOpenmenu, setisOpenmenu,navItems }} />
    </div>
  );
}

export default App;

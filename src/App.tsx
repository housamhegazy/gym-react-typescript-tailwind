import Navbar from "./components/Navbar";
import { useState } from "react";
function App() {
  const [isOpenmenu, setisOpenmenu] = useState<boolean>(false);
  return (
    <div className="App">
      <Navbar {...{ isOpenmenu, setisOpenmenu }} />
    </div>
  );
}

export default App;

import "./App.css";
import Icon from "./components/atoms/Icon.jsx";
import Map from "./components/organisms/Map.jsx";
import { useState, useEffect } from "react";

function App() {  
  const [users, setUsers] = useState([]);

  return (
    <div className="App w-full h-full max-h-full">
      <div className="bg-gradient-to-r from-teal-400 to-green-400 w-full px-6 py-6 flex justify-between">
        <Icon name="menu" />
        <p className="text-black capitalize font-semibold">startup</p>
      </div>

      {/* location info */}
      <div className="h-1/5 bg-white py-6 px-6 text-left">
        <p className=" font-bold capitalize">Nyabugogo - Kimironko</p>
        <p>Next stop: {}</p>
        <div className="flex justify-between capitalize">
          <span>distance:</span>
          <span>time:</span>
        </div>
      </div>

      {/* map */}
      <div className="w-full h-3/5 bg-slate-300">
        <Map />
        {}
      </div>

      {/*bottom bar  */}
      <div className="bg-gradient-to-r from-teal-400 to-green-400 w-full px-6 py-6 flex justify-between fixed bottom-0">
        <Icon name="like" />
        <Icon name="clock" />
        <Icon name="bell" />
      </div>
      <Icon name="like" />
    </div>
  );
}

export default App;

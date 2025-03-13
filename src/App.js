import React from "react";
import ListWrapper from "./components/listWrapper.js"; // Notice the uppercase

import "./App.css";

function App() {
  return (
    <div className="w-100 h-screen bg-slate-800 flex justify-center items-center">
      <div className="bg-slate-900 w-1/6 p-8 rounded-xl shadow-md">
        <ListWrapper /> {/* Corrected usage */}
      </div>
    </div>
  );
}

export default App;

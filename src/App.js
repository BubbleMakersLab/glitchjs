import React from 'react';
import './App.css';
import ModuleProgress from "./components/ModuleProgress";
import SelectionPopover from "./components/SelectionPopover";

function App() {
    return (
        <div className="App">
            <ModuleProgress/>
            <SelectionPopover/>
        </div>
    );
}

export default App;

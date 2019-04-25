import React from 'react';
import './App.css';
import ModuleProgress from "./components/ModuleProgress";
import SelectionPopover from "./components/SelectionPopover";
import ChatDialog from "./components/RaiseYoHand"

function App() {
    return (
        <div className="App">
            <ModuleProgress/>
            <SelectionPopover/>
            <ChatDialog />
        </div>
    );
}

export default App;

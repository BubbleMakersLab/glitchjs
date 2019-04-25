import React from 'react'
import './App.css'
import ModuleProgress from "./components/ModuleProgress"
import SelectionPopover from "./components/SelectionPopover"
import unique from "unique-selector"
import AppContext from "./AppContext"
import ChatDialog from "./components/ChatDialog"
import Snackbar from './components/Snackbar'


class App extends React.Component {
    mouseDownSelector = null

    state = {
        currentSelector: null,
        currentSelectedString: null,
        currentSelectedStringIndex: 0,
        fireSnackBar: (newValue) => {
            this.setState({ isSnackOpen: newValue })
        },
        isSnackOpen: false,
        isDialogOpen: false,
        setIsDialogOpen: (newValue) => {
            this.setState({ isDialogOpen: newValue })
        }

    }

    componentDidMount() {
        document.addEventListener('mousedown', (event) => {
            this.mouseDownSelector = unique(event.target)
        }, false)

        document.addEventListener('mouseup', (event) => {
            const mouseUpSelector = unique(event.target)
            const currentSelectedString = window.getSelection().toString()

            if (!currentSelectedString) {
                this.setState({
                    currentSelector: null,
                    currentSelectedString: null,
                    currentSelectedStringIndex: 0
                })
            } else if (this.mouseDownSelector === mouseUpSelector && currentSelectedString) {
                const currentSelectedStringIndex = document.querySelector(mouseUpSelector).innerHTML.indexOf(currentSelectedString)

                this.setState({
                    currentSelector: mouseUpSelector,
                    currentSelectedString,
                    currentSelectedStringIndex
                })
            }
            this.mouseDownSelector = null
        }, false)
    }

    render() {
        return <div className="App">
            <AppContext.Provider value={this.state}>
                <ModuleProgress />
                <SelectionPopover />
                <ChatDialog />
                <Snackbar />
            </AppContext.Provider>
        </div>
    }

}

export default App

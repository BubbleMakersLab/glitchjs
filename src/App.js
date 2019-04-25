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
    selectedInnerHTML = null

    state = {
        currentSelector: null,
        currentSelectedString: null,
        currentSelectedStringIndex: 0,
        fireSnackBar: (newValue) => {
            this.setState({ isSnackOpen: newValue })
        },
        isSnackOpen: false,
        isDialogOpen: false,
        isCommentInputOpen: false,
        isPopoverOpen: false,
        setIsPopoverOpen: (newValue) => {
            this.setState({isPopoverOpen: newValue})
        },
        setIsCommentInputOpen: (newValue) => {
            this.setState({isCommentInputOpen: newValue})
        },
        setIsDialogOpen: (newValue) => {
            this.setState({isDialogOpen: newValue})
        },
        closePopover: () => {
            if (this.state.currentSelector) {
                document.querySelector(this.state.currentSelector).innerHTML = this.selectedInnerHTML
                this.setState({isPopoverOpen: false})
            }
        }

    }

    componentDidMount() {
        document.addEventListener('mousedown', (event) => {
            this.mouseDownSelector = unique(event.target)
        }, false)

        document.addEventListener('mouseup', (event) => {
            const mouseUpSelector = unique(event.target)
            const currentSelectedString = window.getSelection().toString().replace(/\n/g, "").replace(/\s+/g, ' ')
            const selectorTextContent = document.querySelector(mouseUpSelector).innerHTML.replace(/\n/g, "").replace(/\s+/g, ' ')
            const currentSelectedStringIndex = selectorTextContent.indexOf(currentSelectedString)

            if (!currentSelectedString && !this.state.isPopoverOpen) {
                this.setState({
                    currentSelector: null,
                    currentSelectedString: null,
                    currentSelectedStringIndex: 0
                })
            } else if (this.mouseDownSelector === mouseUpSelector && currentSelectedString && currentSelectedStringIndex !== -1) {
                this.selectedInnerHTML = document.querySelector(mouseUpSelector).innerHTML

                this.setState({
                    currentSelector: mouseUpSelector,
                    currentSelectedString,
                    currentSelectedStringIndex
                })

                const selectorContentBeforeSelection = selectorTextContent.substring(0, currentSelectedStringIndex)
                const selectorContentAfterSelection = selectorTextContent.substring(currentSelectedStringIndex + currentSelectedString.length, selectorTextContent.length)

                document.querySelector(mouseUpSelector).innerHTML = selectorContentBeforeSelection + `<span class="selected" onclick="alert('coucou')">${currentSelectedString}</span>` + selectorContentAfterSelection
            }
            this.mouseDownSelector = null
        }, false)
    }

    render() {
        return <div className="App">
            <AppContext.Provider value={this.state}>
                <ModuleProgress />
                <SelectionPopover />
                <ChatDialog/>
                <Snackbar />
            </AppContext.Provider>
        </div>
    }

}

export default App

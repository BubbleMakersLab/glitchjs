import React from 'react'
import './App.css'
import ModuleProgress from "./components/ModuleProgress"
import SelectionPopover from "./components/SelectionPopover"
import unique from "unique-selector"
import AppContext from "./AppContext"
import ChatDialog from "./components/ChatDialog"
import Snackbar from './components/Snackbar'
import uniqid from 'uniqid'
import Comment from "./components/Comment";

function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

class App extends React.Component {
    mouseDownSelector = null
    selectedInnerHTML = null

    initialCurrentSelected = {
        currentSelector: null,
        currentSelectedString: null,
        currentSelectedStringId: null,
        currentSelectedStringIndex: 0,
    }

    state = {
        ...this.initialCurrentSelected,
        fireSnackBar: (newValue) => {
            this.setState({isSnackOpen: newValue})
        },
        commentPosition: {},
        isCommentOpen: false,
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
                this.setState({isPopoverOpen: false, ...this.initialCurrentSelected})
            }
        }

    }

    componentDidMount() {
        document.addEventListener('click', (event) => {
            if (event.target.matches('.glitch-js-selected-text') || event.target.classList.contains('glitch-js-selected-text')) {
                this.setState({isCommentOpen: true, currentSelectedStringId: event.target.id, commentPosition: offset(event.target)})
            } else {
                this.setState({isCommentOpen: false})
            }
        }, false);

        document.addEventListener('mousedown', (event) => {
            this.mouseDownSelector = unique(event.target)
        }, false)

        document.addEventListener('mouseup', (event) => {
            const mouseUpSelector = unique(event.target)
            const currentSelectedString = window.getSelection().toString().replace(/\n/g, "").replace(/\s+/g, ' ')
            const selectorTextContent = document.querySelector(mouseUpSelector).innerHTML.replace(/\n/g, "").replace(/\s+/g, ' ')
            const currentSelectedStringIndex = selectorTextContent.indexOf(currentSelectedString)

            if (!currentSelectedString && !this.state.isPopoverOpen && !this.state.isDialogOpen) {
                console.log("delete")
                this.setState({
                    ...this.initialCurrentSelected
                })
            } else if (this.mouseDownSelector === mouseUpSelector && currentSelectedString && currentSelectedStringIndex !== -1) {
                this.selectedInnerHTML = document.querySelector(mouseUpSelector).innerHTML

                const selectorContentBeforeSelection = selectorTextContent.substring(0, currentSelectedStringIndex)
                const selectorContentAfterSelection = selectorTextContent.substring(currentSelectedStringIndex + currentSelectedString.length, selectorTextContent.length)
                const id = uniqid()
                document.querySelector(mouseUpSelector).innerHTML = selectorContentBeforeSelection + `<span class="glitch-js-selected-text" id="${id}">${currentSelectedString}</span>` + selectorContentAfterSelection

                this.setState({
                    currentSelector: mouseUpSelector,
                    currentSelectedString,
                    currentSelectedStringIndex,
                    currentSelectedStringId: id
                })

            }
            this.mouseDownSelector = null
        }, false)
    }

    render() {
        const {isCommentOpen, currentSelectedStringId, commentPosition, isDialogOpen} = this.state

        return <div className="App">
            <AppContext.Provider value={this.state}>
                <ModuleProgress/>
                <SelectionPopover/>
                <ChatDialog isOpen={isDialogOpen}/>
                <Snackbar/>
                {isCommentOpen && <Comment commentId={currentSelectedStringId} position={commentPosition}/>}
            </AppContext.Provider>
        </div>
    }

}

export default App

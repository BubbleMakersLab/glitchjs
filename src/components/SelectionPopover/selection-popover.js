import QwantShare from "../QwantShare";
import RaiseYoHand from "../RaiseYoHand";
import TakeNote from "../TakeNote";
import AskSlack from "../AskSlack";
import Popover from "react-text-selection-popover";
import React from "react";


export default class SelectionPopover extends React.Component{
    state = {
        isOpen: false
    }

    handleTextSelect = () => {
        this.setState({isOpen: true})
    }

    handleTextUnSelect = () => {
        console.log('coucou')
        this.setState({isOpen: false})
    }

    render() {
        const {classes} = this.props
        const {isOpen} = this.state

        return  <Popover className={classes.popover} isOpen={isOpen} onTextSelect={this.handleTextSelect} onTextUnSelect={this.handleTextUnSelect}>
            <div className={classes.popoverButton}>
                <QwantShare/>
                <RaiseYoHand/>
                <TakeNote/>
                <AskSlack/>
            </div>
            <textarea> </textarea>
        </Popover>
    }
}

import React from "react"
import {FaHandsHelping} from "react-icons/fa"
import AppContext from "../../AppContext";

export default class RaiseYoHand extends React.Component {
    static contextType = AppContext;

    handleClick = () => {
        this.context.setIsDialogOpen(true)
    }

    render() {
        return <span onClick={this.handleClick}><FaHandsHelping/></span>
    }
}

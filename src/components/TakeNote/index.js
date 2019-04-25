import React from "react"
import {FaStickyNote} from "react-icons/fa"
import AppContext from "../../AppContext";

export default class TakeNote extends React.Component {
    static contextType = AppContext;

    render() {
        const {onClick} = this.props
        return <span onClick={onClick}><FaStickyNote/></span>
    }
}

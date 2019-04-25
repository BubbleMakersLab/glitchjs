import React from "react"
import {FaStickyNote} from "react-icons/fa"
import AppContext from "../../AppContext";

export default class TakeNote extends React.Component {
    static contextType = AppContext;

    componentDidMount() {

    }

    handleClick() {

    }

    render() {
        console.log(this.context)
        return <span><FaStickyNote/></span>
    }
}

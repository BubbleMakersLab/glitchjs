import React from "react"
import { GoGlobe } from "react-icons/go"
import AppContext from "../../AppContext";

export default class TakeNote extends React.Component {
    static contextType = AppContext;

    render() {
        return <span><a href={`https://www.qwant.com/?q=${this.context.currentSelectedString}&t=web`} target="blank"><GoGlobe /></a></span>
    }
}

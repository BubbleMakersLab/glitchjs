import React from "react"
import { FaSlack } from "react-icons/fa"

export default () => <span onClick={() => {
    window.open("slack://channel?team=TGKG907GE&id=CGJ28PMM2", "_blank")
}}><FaSlack /></span>

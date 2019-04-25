import React from "react"
import { FaSlack } from "react-icons/fa"

export default () => <span onClick={() => {
    window.open("slack://channel?team=TCH0UKXBQ&id=GH84LUPV5", "_blank")
}}><FaSlack /></span>

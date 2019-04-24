import React from "react"
import { GoGlobe } from "react-icons/go"

export default () => <span><a href={`https://www.qwant.com/?q=${window.getSelection().toString()}&t=web`} target="blank"><GoGlobe /></a></span>

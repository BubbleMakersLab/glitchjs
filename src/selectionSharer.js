import React from "react"
import ReactDOMServer from "react-dom/server"
import shareThis from "share-this"
import { FaSlack, FaHandsHelping, FaStickyNote } from "react-icons/fa"
import { GoGlobe } from "react-icons/go"

const slackSharer = {
    render() {
        return ReactDOMServer.renderToStaticMarkup(<FaSlack />)
    }
}

const handsHelpingSharer = {
    render() {
        return ReactDOMServer.renderToStaticMarkup(<FaHandsHelping />)
    }
}

const searchSharer = {
    render() {
        return ReactDOMServer.renderToStaticMarkup(<GoGlobe />)
    }
}

const noteSharer = {
    render() {
        return ReactDOMServer.renderToStaticMarkup(<FaStickyNote />)
    }
}

export default shareThis({
    selector: 'body',
    sharers: [searchSharer, slackSharer, handsHelpingSharer, noteSharer]
});
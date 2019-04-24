import React from "react"
import ReactDOMServer from "react-dom/server"
import shareThis from "share-this"
import QwantShare from "./components/QwantShare";
import RaiseYoHand from "./components/RaiseYoHand";
import TakeNote from "./components/TakeNote";
import AskSlack from "./components/AskSlack";

const slackSharer = {
    render() {
        return ReactDOMServer.renderToStaticMarkup(<AskSlack />)
    }
}

const handsHelpingSharer = {
    render() {
        return ReactDOMServer.renderToStaticMarkup(<RaiseYoHand />)
    }
}

const searchSharer = {
    render() {
        return ReactDOMServer.renderToStaticMarkup(<QwantShare />)
    }
}

const noteSharer = {
    render() {
        return ReactDOMServer.renderToStaticMarkup(<TakeNote />)
    }
}

export default shareThis({
    selector: 'body',
    sharers: [searchSharer, slackSharer, handsHelpingSharer, noteSharer]
});
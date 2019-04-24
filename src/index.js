import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import shareThis from "share-this";
import 'share-this/dist/share-this.css'

const customSharer = {
    render() {
        return "coucou"
    }
}

const customSharer2 = {
    render() {
        return "JMM"
    }
}

const selectionShare = shareThis({
    selector: '#root',
    sharers: [customSharer ,customSharer2]
});

selectionShare.init();


ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import selectionSharer from './selectionSharer'

// CSS
import './index.css';
import 'share-this/dist/share-this.css'

const container  = document.createElement('span')
container.id = "root"
document.getElementsByTagName('body')[0].appendChild(container)

selectionSharer.init();

ReactDOM.render(<App />, document.getElementById('root'));

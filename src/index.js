import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// CSS
import './index.css';

const container  = document.createElement('div')
container.id = "root"
document.getElementsByTagName('body')[0].appendChild(container)

ReactDOM.render(<App />, document.getElementById('root'));

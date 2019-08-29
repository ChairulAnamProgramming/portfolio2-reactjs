import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import * as serviceWorker from './serviceWorker';

// style
import 'bootstrap/dist/css/bootstrap.min.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const globalState = {
    globalHtml: 60,
    globalCss: 85,
    globalJs: 80,
    globalPhp: 90,
    globalFlutter: 70,
    globalReact: 60,
    globalJava: 50
}


// Reducer
const rootReducer = (state = globalState, action) => {
    return state;
}


const storeRedux = createStore(rootReducer)


ReactDOM.render(<Provider store={storeRedux}><ParallaxProvider><App /></ParallaxProvider></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

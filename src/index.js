import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactGA from 'react-ga';

ReactGA.initialize(`UA-116676814-5`);
ReactGA.pageview(window.location.pathname + window.location.search);


ReactDOM.render(<App />, document.getElementById('root'));

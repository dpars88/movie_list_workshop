import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';



var movieString = ['Mean Girls', 'Hackers', 'The Grey', 'Sunshine', 'Ex Machina']




ReactDOM.render(<App message= 'Hello World' data= {movies} />, document.getElementById('app'));

// this.props =
// message: 'hello world'
// data: movies,
// testData: movieString
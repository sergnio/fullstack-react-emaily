// This file is capitalize because it's returning a react component.

// Using import statements because on the front end we're using Babel and Webpack
// which gives us use of ES6 modules
import React from 'react';
// contains a set of helpers to be able to navigate around the DOM
// BW - brains of the react router - chances sets of components based off URL
// Route - set up a rule between certain route and set of components that will be actually visible on the screen
import { BrowserRouter, Route } from 'react-router-dom';

//Dummy components
const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

//NOTE: BrowserRouter can only have at most ONE child
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" component={Landing} />
          <Route path="/surveys" component={Dashboard} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

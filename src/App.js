import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar';
import CreateIssue from './components/createIssue';
import EditIssue from './components/editIssue';
import IssuesList from './components/issuesList';


function App() {
  return (
    <Router>
     <div className="">
      <Navbar />
      <br />
      <Route path="/" exact component={IssuesList} />
      <Route path="/edit/:id" component={EditIssue} />
      <Route path="/create" component={CreateIssue} />
     </div>
    </Router>
  );
}

export default App;

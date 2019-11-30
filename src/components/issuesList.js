import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

const Issue = props => (
    <tr>
        <td>{props.issue.title}</td>
        <td>{props.issue.description}</td>
        <td>{props.issue.createdby}</td>
        <td>{props.issue.assigned}</td>
        <td>{props.issue.status}</td>
        <td>{props.issue.updatedAt}</td>
            <Link to={'/edit/' + props.issue._id}>edit</Link> | <a href="#" onClick={() => {props.deleteIssue(props.issue._id)}}>delete</a>
    </tr>
)

export default class IssuesList extends Component {
    constructor(props){
        super(props);

        this.state = {
            issues: []
        }

        this.deleteIssue = this.deleteIssue.bind(this);

    }

    componentDidMount(){
        axios.get('http://localhost:3001/issues/')
         .then(response => {
             this.setState({
                 issues: response.data
                })
         })
         .catch(error => console.log(error))
    }

    deleteIssue(id){
        axios.delete('http://localhost:3001/issues/'+id)
            .then(res => console.log(res.data));
            
            this.setState({
                issues: this.state.issues.filter(el => el._id !== id)
            })
    }

    issuesList() {
        return this.state.issues.map(currentissue => {
            return <Issue issue={currentissue} deleteIssue={this.deleteIssue} key={currentissue._id}/>
        })
    }

    render(){
        return(
            <div>
                <h3>Logged Issues</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Created By</th>
                            <th>Assigned to</th>
                            <th>Status</th>
                            <th>Last updated on</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {this.issuesList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
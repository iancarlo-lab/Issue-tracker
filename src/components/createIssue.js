import React, { Component } from 'react';
import axios from 'axios';

export default class CreateIssue extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            description: '',
            createdby: '',
            assigned: '',
            status: '',
            issues: [],
            updated_on: ''
        }

        this.onChangetitle = this.onChangetitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeCreatedby = this.onChangeCreatedby.bind(this);
        this.onChangeAssigned = this.onChangeAssigned.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

   

    onChangetitle(e) {
        this.setState({
            title: e.target.value,
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value,
        })
    }

    onChangeCreatedby(e) {
        this.setState({
            createdby: e.target.value,
        })
    }

    onChangeAssigned(e) {
        this.setState({
            assigned: e.target.value,
        });
    }

    onChangeStatus(e){
        this.setState({
            status: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const issue = {
            title: this.state.title,
            description: this.state.description,
            createdby: this.state.createdby,
            assigned: this.state.assigned,
            status: this.state.status
        }

        console.log(issue);

        axios.post('http://localhost:3001/issues/add', issue)
            .then(res => console.log(res.data));
        
        alert("Issue created succesfully!  " + this.state.title)

       window.location = '/';
    }

    render(){
        return(
            <div className="container">
             <h3>Create New Exercise Log</h3>
              <form onSubmit={this.onSubmit}>
              <div className="form-group">
                    <label>Title:</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.title}
                        onChange={this.onChangetitle}
                    />
                  </div>
                  <div className="form-group">
                    <label>Description:</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                    />
                  </div>
                  <div className="form-group">
                    <label>Created by:</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.createdby}
                        onChange={this.onChangeCreatedby}/>
                  </div>
                  <div className="form-group">
                    <label>Assigned to:</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.assigned}
                        onChange={this.onChangeAssigned}/>
                  </div>
                  <div className="form-group">
                    <label>Status:</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.status}
                        onChange={this.onChangeStatus}/>
                  </div>
                  
                  <div className="form-group">
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary "/>
                  </div>
              </form>
            </div>
        )
    }
}
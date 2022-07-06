import React, { Component } from 'react';

class JSForm extends Component {
  state = {
    name:''
  };

  render() {
    return (
      
      <div>
        <form 
          onChange={event => {
            this.setState({
              input: event.target.value,
            });
          }}
          onSubmit={async event => {
            event.preventDefault()
            this.setState({
              software_title: event.target.software_title.value,
              software_version: event.target.software_version.value,
            });

            const data = {
              software_title: event.target.software_title.value,
              software_version: event.target.software_version.value,
            }

            const JSONdata = JSON.stringify(data)
            const endpoint = '/api/form'

            const options = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSONdata,
            }

            const response = await fetch(endpoint, options) //api call 
            const result = await response.json()
            this.setState({req_result: result.data})


          }}>
          <label htmlFor="software_title">Software Title</label>
          <input type="text" id="software_title" name="software_title" value={this.state.software_title} required />
    
          <label htmlFor="software_version">Last Name</label>
          <input type="text" id="software_version" name="software_version" value={this.state.software_version} required />
    
          <button type="submit">Submit</button>
        </form>
          <p> Requested Product Lookup: {this.state.software_title} + {this.state.software_version} </p>
          <p> {this.state.input} </p>
          <p> {this.state.req_result} </p>
        
      </div>
    );
  }
}

export default JSForm;

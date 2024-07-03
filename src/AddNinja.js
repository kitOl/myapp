import React, { Component } from "react";

class AddNinja extends Component {
  render() {
    const state = {
      name: null,
      age: null,
      belt: null,
    };

    const handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value,
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      this.props.addNinja(this.state);
    };
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={handleChange} />
          <label htmlFor="age">Age:</label>
          <input type="text" id="age" onChange={handleChange} />
          <label htmlFor="belt">Belt:</label>
          <input type="text" id="belt" onChange={handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddNinja;

import React from 'react';

class ClassBasedNameField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: 'new user'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({ user: e.target.value });
    }

    handleSubmit = (e) => {
        console.log(`New user name is ${this.state.user}`);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <p>Good {this.props.timeOfDay}, {this.state.user}</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.user} onChange={this.handleChange} />
                    <button type="submit">Update user name</button>
                </form>
            </div>
        );
    }
}

export default ClassBasedNameField;
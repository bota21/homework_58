import { Component } from 'react';
import './Form.css';

class Form extends Component {
    render() {
        return <form onSubmit={this.props.submit}>
        <div className="form_wrapper">
        <input type="text" onChange={this.props.change} value={this.props.value}/>
        <button type='submit' onClick={this.props.click}>Add</button>
        </div>
        </form>
    }
}

export default Form;
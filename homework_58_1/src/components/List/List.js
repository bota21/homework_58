import "./List.css";
import { Component } from 'react';

class List extends Component {
    render() {       
        return <div className='list_wrapper'>
        <input type="text" className='list_input' 
        onChange={this.props.change} 
        defaultValue={this.props.value}
        />
        <span className="delete" onClick={this.props.click}>X</span>
        </div>
    }
}
export default List;
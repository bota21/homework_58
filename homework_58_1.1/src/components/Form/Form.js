import React from 'react';
import './Form.css';

const Form = props => {
        return <form>
        <div className="form_wrapper">
        <input type="text" onChange={props.change} value={props.value}/>
        <button type='submit' onClick={props.click}>Add</button>
        </div>
        </form>
    }

export default Form;
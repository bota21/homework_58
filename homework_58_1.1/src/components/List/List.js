import "./List.css";
import React from 'react';

const List = props => {
        return <div className='list_wrapper'>
        <input type="text" className='list_input' 
        onBlur={props.focus}
        defaultValue={props.value}
        />
        <span className="delete" onClick={props.click}>X</span>
        </div>
    }

export default React.memo(List);
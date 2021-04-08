import './Button.css';

const Button = props => {
return <button 
onClick={props.click} 
className='joke_btn'>
    New joke
    </button> 
};

export default Button;
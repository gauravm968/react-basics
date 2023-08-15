import './Card.css'

function Card(props){
    return (       
                              //App.js <- <Card className="testing-props-className">..
        <div className={props.className}>  
        {props.children} 
        </div>
        // //{props.className} -> passing classnames as props 
    )
}

export default Card;
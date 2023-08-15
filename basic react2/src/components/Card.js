import './Card.css'

export default function Card(props){
    // const classes = 'card' + props.className;
    // console.log(classes)  //cardproduct-item , cardproducts
    return (
        // <div className={classes}>{props.children}</div>
        <div className={props.className}>{props.children}</div>
    );
}
import { useState } from 'react'
import ProductDate from './ProductDate'
import Card from './Card'
import './ProductItem.css'

export default function ProductsItem(props){
    // let title = props.title;
    const [title, setTitle] = useState(props.title)     //useState hook -> return two element array 

    function clickHandler(){
        // title = "Changed"
        setTitle("Changed");
        console.log("button clicked")
    }
    return (
        <Card className='product-item'>
            <ProductDate date={props.date} />

            <div className='product-item__description'>
                {/* <h2>{props.title}</h2> */}
                <h2>{title}</h2>
            </div>

            {/* event handling props start from on.... */}
            <button onClick={clickHandler}>Add to Card</button>
        </Card>
    );
}
import './Item.css'

function Item (props){   //parent(App.js) -> child (Item.js) 
    const itemName = props.name;
    return (
        //fragment <> </>
        <>   
            <p className='t1'>item - {itemName}</p>
            {props.children}
        </>
        
    )
}

export default Item;
import './ItemData.css'

function ItemData(props) {   //parent -> child 
    const day = props.day;        //<ItemData day="3" ...></ItemData>
    const month = props.month;
    const year = props.year;

    return (
        <div className='data'>
            <span>{day} </span>
            <span>{month} </span>
            <span>{year} </span>
        </div>
    )
}

export default ItemData;
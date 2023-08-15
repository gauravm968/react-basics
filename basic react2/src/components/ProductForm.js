import { useState } from 'react'
import './ProductForm.css'

export default function ProductForm(props){

    const [newTitle, setNewTitle] = useState('')
    const [newDate, setNewDate] = useState('')

    function titleChangeHandler(event){    //event->default object
        // console.log(event.target.value)
        setNewTitle(event.target.value)
    }
    function dateChangeHandler(event){
        // console.log(event.target.value)
        setNewDate(event.target.value)
    }
    function submitHandler(event){
        event.preventDefault();  

        const productData = {
            title: newTitle,
            date: newDate
        };

        // console.log(productData)

        //call parent function (NewProduct.js)
        props.onSaveProduct(productData)

        //clear title, date input field after submit -> for link -> <input ... value={newTitle} onChange={titleChangeHandler}></..>
        setNewTitle("")
        setNewDate("")
    }
    
    return (
        <form  onSubmit={submitHandler}>
            <div className='new-product__title'>
                <label>Title</label>
                <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className='new-product__date'> 
                <label>Date</label>
                <input type='date' value={newDate} onChange={dateChangeHandler}min='2023-01-01' max='2023-12-12'></input>
            </div>
            <div className='new-product__btn'>
                <button type='submit'>Add Product</button>
            </div>
        </form>
    )
}
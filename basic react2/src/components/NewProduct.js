import './NewProduct.css'
import ProductForm from './ProductForm'

export default function NewProduct(props){

    function saveProduct(product){
        console.log("im inside new product saveProduct called")
        console.log(product)

        //calling parent function (App.js)
        props.pranay(product)
    }

    return (
        <div className='new-product'> 
            <ProductForm onSaveProduct={saveProduct}/>
        </div>
    )
}
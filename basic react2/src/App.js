import './App.css';
import NewProduct from './components/NewProduct';
import Products from './components/Products'

const App = () =>{

  const products = [
    {
      id: 'p1',
      title: 'Samsung',
      amount: 5000,
      date: new Date(2021, 8, 10)
    },
    {
      id: 'p2',
      title: 'Panasonic',
      amount: 4000,
      date: new Date(2020, 3, 1)
    },
    {
      id: 'p3',
      title: 'Xiomi',
      amount: 5800,
      date: new Date(2019, 8, 20)
    },
    {
      id: 'p4',
      title: 'Realme',
      amount: 9000,
      date: new Date(2022, 1, 1)
    },
  ];

  //child -> parent 
  function printProductData(data){   //prop function // pass through prop
    console.log("i'm inside App.js")
    console.log(data)
  }

  return (
    <div>
      {/* child -> parent */}
      <NewProduct pranay={printProductData}/>
      <Products items={products} />
    </div>
  );
}

export default App;

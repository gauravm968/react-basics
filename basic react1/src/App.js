import './App.css'
import Item from './components/Item'
import ItemData from './components/ItemData'
import Card from './components/Card'

function App() {
  // const temp = "Samsung"

  const response = [
    {
      itemName: "Mouse",
      itemDate: "30",
      itemMonth: "June",
      itemYear: "1998"
    },
    {
      itemName: "Keyboard",
      itemDate: "10",
      itemMonth: "July",
      itemYear: "1993"
    }
  ];

  return (
    <div>
      <div className='App'>Hello</div>

      {/* <Item name={temp} ></Item> */}

      {/* <Item name={response[0].itemName} >
         Hi this text is visible through props.children
      </Item>
      <ItemData day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemData>

      <Item name={response[1].itemName} ></Item>
      <ItemData day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemData> */}
      
      {/* here testing pass className as props (on component class works when {props.className}) */}
      <Card className='testing-props-className'> 
      <Item name={response[0].itemName}>
         Hi this text is visible through props.children
      </Item>
      <ItemData day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemData>

      <Item name={response[1].itemName} ></Item>
      <ItemData day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemData>

        
      </Card>
    </div>
  );
}

export default App;

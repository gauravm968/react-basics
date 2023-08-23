import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import { apiUrl, filterData } from './data';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function App() {

  const [courses, setCourses] = useState(null)   //''
  const [loading, setLoading] = useState(true)
  const [category, setCategory ] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let jsonApiData = await response.json();
      setCourses(jsonApiData.data);     //data in api
    }
    catch (error) {
      toast.error("Something Went Wrong! ")
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])     //first time only     

  return (
    <div className='min-h-screen flex flex-col bg-gray-600'>
      <div> <Navbar /></div>

      <div className=''>
        <div> <Filter filterData={filterData} category={category} setCategory={setCategory}/></div>

        <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
          {
            loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)
          }
        </div>
      </div>

    </div>
  );
}

export default App;

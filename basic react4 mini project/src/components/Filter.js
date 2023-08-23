
export default function Filter(props){
    
    function filterHandler(title) {
        props.setCategory(title);
    }

    return (
        <div className="w-11/122 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {/* key={data.id} -> learn about keys and lists */}
            { props.filterData.map( (data) => {
                return <button className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-gray-800 hover:bg-opacity-50 border-2 transition-all duration-300 ${ props.category === data.title ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"}`} key={data.id} onClick={() => filterHandler(data.title)}> 
                    {data.title}
                </button>
            }) }

        </div>
    )
}

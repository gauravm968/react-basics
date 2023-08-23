import './Spinner.css';

export default function Spinner(){

    return (
        <div className='flex flex-col items-center space-y-3'>
            <div className="spinner"></div>
            <p className='text-white text-lg font-semibold '>Loading</p>
        </div>
    )
}
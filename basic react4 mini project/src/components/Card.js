import {FcLike, FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';

export default function Card(props){  //({course, likedCourses, setLikedCourses})
    
    function clickHandler() {    //like button
        if(props.likedCourses.includes(props.course.id)){
            props.setLikedCourses((prev) => prev.filter( (cid) => (cid !== props.course.id)) )     //{} <- not work (.filter(..))
            toast.warning("Like Removed");
        }
        else{
            //insert course into likedCourses that not liked
            if(props.likedCourses.length === 0){
                props.setLikedCourses([props.course.id]);
            }
            else{
                props.setLikedCourses( (prev) => [...prev, props.course.id]);
            }
            toast.success("Liked Successfully");
        } 
    }

    return (
    <div className='w-[300px] bg-gray-800 rounded-md overflow-hidden'>

        <div className='relative'>
            <img src={props.course.image.url} alt={props.course.image.alt}></img>

            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'> 
                <button onClick={clickHandler}> 
                    {
                        props.likedCourses.includes(props.course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)
                    } 
                </button> 
            </div>
        </div>

        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{props.course.title}</p>
            <p className='mt-2 text-white'>
                {
                    props.course.description.length > 100 ? 
                    (props.course.description.substr(0,100)) + "..." : (props.description)
                }
            </p>
        </div>

    </div>
    );
}

//-> npm i react-icons
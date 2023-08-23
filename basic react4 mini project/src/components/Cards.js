import Card from './Card'
import { useState } from 'react';

export default function Cards(props) {

    const [likedCourses, setLikedCourses] = useState([]);

    //returns a list of all courses received from the api response
    function getCourses() {
        if (props.category === "All") {
            let allCourses = [];
            Object.values(props.courses).forEach((courseCategory) => {
                courseCategory.forEach((courseData) => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else {
            return props.courses[props.category]
        }

    }

    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                getCourses().map((course) => {
                    return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
                })
            }

        </div>
    )
}
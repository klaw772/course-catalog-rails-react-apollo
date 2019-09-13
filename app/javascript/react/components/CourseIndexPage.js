import React from 'react'
import { gql } from "apollo-boost";
import { Link } from "react-router-dom";
import  { useQuery } from "@apollo/react-hooks";

const GET_COURSES = gql`
        query {
            allCourses {
                id
                name
                averageRating
            }
        }
     `
export const CourseIndexPage = (props) => {

    const { loading, error, data } = useQuery(GET_COURSES);
  
    if (loading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        return <h2>{error.message}</h2>;
    }

    const courses = data.allCourses.map(course => {
        return (
            <tr key = {course.id} >
                <td><Link to={`/courses/${course.id}`}>{course.name}</Link></td>
                <td>{course.averageRating}</td>
            </tr>
        )
    })

    return (
    <div>
        <h1>My First Apollo App</h1>
        <h2>Courses</h2>

        <table>
            <thead>
            <tr>
                <th>Courses</th>
                <th>Average Rating</th>
            </tr>
            </thead>
            <tbody>
            {courses}
            </tbody>
        </table>
    </div>
  )
}

export default CourseIndexPage
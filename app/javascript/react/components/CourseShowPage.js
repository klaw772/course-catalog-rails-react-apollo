import React from 'react'
import { gql } from "apollo-boost";
import { Link } from 'react-router-dom';
import  { useQuery } from "@apollo/react-hooks";

const GET_COURSE = gql`query($courseId: ID!) {
  getCourse(courseId: $courseId) {
    id
    name
    professor {
      name
      email
      office
    }
		reviews {
      rating
      body
    }
  }
}`


export const CourseShowPage = (props) => {
  const { loading, error, data } = useQuery(GET_COURSE,
    { variables : { courseId : props.match.params.id }});
  
    if (loading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        return <h2>{error.message}</h2>;
    }

  return (
    <div>
      <h1>Hello from Show</h1>
      <Link to={"/courses"}>Course Index</Link>

      <h3>{data.getCourse.name}</h3>
    </div>
  )
}

export default CourseShowPage
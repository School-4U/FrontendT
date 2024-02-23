import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CourseListContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 50px;
`;

const CourseItem = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const CourseTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 5px;
`;

const Content = styled.p`
  font-size: 16px;
  color: #666;
`;

const Courses = () => {
  const [courses, setCourses] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://backend-production-b20a.up.railway.app/courses"
      );
      setCourses(response?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(courses?.data, "coourses here");

  return (
    <CourseListContainer>
      <h1>Course List</h1>
      {courses?.data.map((course) => (
        <CourseItem key={course.id}>
          <CourseTitle><Link to={`/courses/${course.id}`}>{course.description}</Link></CourseTitle>
          <Content>Course code: {course.course_content}</Content>
        </CourseItem>
      ))}
    </CourseListContainer>
  );
};

export default Courses;

// ## List of changes

// ### What has changed
// - added a route to courses page from the dashboard page
// - added courses page UI
// - integrated API for courses page

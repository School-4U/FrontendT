import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`https://backend-production-b20a.up.railway.app/courses/${id}`)
      .then((response) => response.json())
      .then((data) => setCourse(data))
      .catch((error) => console.error("Error fetching course:", error));
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Course details here</h2>
      <h4>{course?.data.course_content}</h4>
      <h4>{course?.data.description}</h4>
    </div>
  );
};

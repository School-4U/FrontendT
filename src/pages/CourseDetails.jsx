
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`https://backend-production-b20a.up.railway.app/courses/${id}`)
      .then(response => response.json())
      .then(data => setCourse(data))
      .catch(error => console.error('Error fetching course:', error));
  }, [id]);
 
  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      {/* Add more course details as needed */}
    </div>
  );
};


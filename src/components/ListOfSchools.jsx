
import PropTypes from 'prop-types';

export const ListOfSchools = ({ data }) => {
  return (
    <div>
      {data.map((school, index) => (
        <div key={index}>
          <img src={school.image} alt={`School ${index}`} />
          <h2>{school.title}</h2>
          <p>{school.content}</p>
          <p>Location: {school.location}</p>
          <p>Price: {school.price}</p>
          <img src={school.ratings} alt="Ratings" />
          <button>{school.button}</button>
        </div>
      ))}
    </div>
  );
};

ListOfSchools.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        ratings: PropTypes.string.isRequired,
        button: PropTypes.string.isRequired,
      })
    ).isRequired,
  };


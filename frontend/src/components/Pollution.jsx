/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

const Pollution = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.Description}</p>
      <img src={props.Img} alt={props.title}></img>
    </div>
  );
};

Pollution.PropTypes = {
  title: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  Img: PropTypes.string.isRequired,
};
export default Pollution;

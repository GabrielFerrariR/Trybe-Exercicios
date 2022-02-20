import React from "react";
import PropTypes from 'prop-types' ;
class Pokemon extends React.Component {
  render() {
    const { pokemon: { id, name, type, averageWeight, image} } = this.props;
    console.log(this.props) 
    return (
      <section>
        <p>{name}</p>
        <p>{type}</p>
        <p>Average weight : {averageWeight.value} {averageWeight.measurementUnit}</p>
        <img src={image} alt ={name}></img>
      </section>
    )
  }
}
export default Pokemon
Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      averageWeight: PropTypes.string
    })
  })
}
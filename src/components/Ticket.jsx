import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  return (
      <div>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.post}</em></p>
        <hr/>
      </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  post: PropTypes.string
};

export default Ticket;

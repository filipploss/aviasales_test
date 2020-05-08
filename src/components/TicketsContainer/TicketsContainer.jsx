import React from "react";
import { connect } from "react-redux";

import TicketCard from "../TicketCard";
import Spinner from '../Spinner'

function TicketsContainer(props) {

    if (!props.filteredData.tickets) {
        return <Spinner/>
      }

  return (
    <>
      <TicketCard number={0} />
      <TicketCard number={1} />
      <TicketCard number={2} />
      <TicketCard number={3} />
      <TicketCard number={4} />
    </>
  );
}

const mapStateToProps = ({ filteredData }) => {
    return {
      filteredData,
    };
  };
  
  export default connect(mapStateToProps)(TicketsContainer);

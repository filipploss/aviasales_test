import React from "react";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import TicketCard from "../TicketCard";
import Spinner from "../Spinner";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: "120px",
  },
}));

function TicketsContainer(props) {
  const classes = useStyles();

  if (!props.filteredData.tickets) {
    return <Spinner />;
  }

  return (
    <Box className={classes.container}>
      <TicketCard number={0} />
      <TicketCard number={1} />
      <TicketCard number={2} />
      <TicketCard number={3} />
      <TicketCard number={4} />
    </Box>
  );
}

const mapStateToProps = ({ filteredData }) => {
  return {
    filteredData,
  };
};

export default connect(mapStateToProps)(TicketsContainer);

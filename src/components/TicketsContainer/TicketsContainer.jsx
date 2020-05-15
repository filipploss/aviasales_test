import React from "react";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import TicketCard from "../TicketCard";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: "120px",
  },
}));

function TicketsContainer({ error, loading }) {
  const classes = useStyles();

  if (error) {
    return <ErrorIndicator />;
  }

  console.log("TicketContainer loaded");
  if (loading) {
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

const mapStateToProps = ({ error, loading }) => {
  return {
    error,
    loading,
  };
};

export default connect(mapStateToProps)(TicketsContainer);

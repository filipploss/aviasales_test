import React from "react";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
// import { ReactComponent as Logo } from "http://pics.avs.io/110/36/S7.png";


const useStyles = makeStyles((theme) => ({
  card: {
    background: "#FFFFFF",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    fontFamily: "Open Sans",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    color: "#2196F3",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "24px",
  },
  destination: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function Ticket() {
  const classes = useStyles();
  let price = "13400";
  return (
    <Box className={classes.card}>
      <Box className={classes.header}>
        <Box>{price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")} Р</Box>
        <Box><img src="http://pics.avs.io/110/36/S7.png" alt=''/></Box>
      </Box>
      <Box className={classes.destination}>
        <Box>13400 Р</Box>
        <Box>S7 Airlines</Box>
      </Box>
      <Box className={classes.destination}>
        <Box>13400 Р</Box>
        <Box>S7 Airlines</Box>
      </Box>
    </Box>
  );
}

import React from "react";
import Box from "@material-ui/core/Box";
// import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
// import { ReactComponent as Logo } from "http://pics.avs.io/110/36/S7.png";

// TODO: по алфавиту свойства
const useStyles = makeStyles((theme) => ({
  card: {
    background: "#FFFFFF",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: 600,
  },
  header: {
    color: "#2196F3",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "24px",
    lineHeight: "24px",
  },
  destination: {
    display: "flex",
    justifyContent: "space-between",
  },
  destinationHeading: {
    fontSize: "12px",
    lineHeight: "18px",
    // display: flex;
    // align-items: center;
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    color: "#A0B0B9",
  },
  destinationText: {
    fontSize: "14px",
    lineHeight: "21px",
    color: "#4A4A4A",
    // /* identical to box height, or 150% */
    // display: flex;
    // align-items: center;
  },
}));

export default function Ticket() {
  const classes = useStyles();
  let price = "13400";
  return (
    <Box className={classes.card}>
      <Box className={classes.header}>
        <Box>{price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")} Р</Box>
        <Box>
          <img src="http://pics.avs.io/110/36/S7.png" alt="" />
        </Box>
      </Box>
      <Box className={classes.destination}>
        <Box>
          <Box className={classes.destinationHeading}>MOW – HKT</Box>
          <Box className={classes.destinationText}>10:45 – 08:00</Box>
        </Box>
        <Box>
          <Box className={classes.destinationHeading}>В пути</Box>
          <Box className={classes.destinationText}>21ч 15м</Box>
        </Box>
        <Box>
          <Box className={classes.destinationHeading}>2 пересадки</Box>
          <Box className={classes.destinationText}>HKG, JNB</Box>
        </Box>
      </Box>
      <Box className={classes.destination}>
        <Box>
          <Box className={classes.destinationHeading}>MOW – HKT</Box>
          <Box className={classes.destinationText}>10:45 – 08:00</Box>
        </Box>
        <Box>
          <Box className={classes.destinationHeading}>В пути</Box>
          <Box className={classes.destinationText}>21ч 15м</Box>
        </Box>
        <Box>
          <Box className={classes.destinationHeading}>2 пересадки</Box>
          <Box className={classes.destinationText}>HKG, JNB</Box>
        </Box>
      </Box>
    </Box>
  );
}

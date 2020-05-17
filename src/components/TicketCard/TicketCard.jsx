import React from "react";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    background: "#FFFFFF",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: 600,
    height: "144px",
    padding: "20px",
    marginBottom: "20px",
    "&:last-child": {
      marginBottom: "0px",
    },
  },
  header: {
    color: "#2196F3",
    display: "flex",
    fontSize: "24px",
    justifyContent: "space-between",
    lineHeight: "24px",
    marginBottom: "20px",
    marginRight: "30px",
  },
  price: {
    alignItems: "center",
    display: "flex",
  },
  destinationFirst: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  destinationSecond: {
    display: "flex",
    justifyContent: "space-between",
  },
  destinationHeading: {
    color: "#A0B0B9",
    fontSize: "12px",
    letterSpacing: "0.5px",
    lineHeight: "18px",
    textTransform: "uppercase",
  },
  destinationText: {
    color: "#4A4A4A",
    fontSize: "14px",
    lineHeight: "21px",
  },
  column: {
    marginRight: "20px",
    width: "141px",
  },
  thirdColumn: {
    width: "140px",
  },
}));

function TicketCard({ number, filteredData }) {
  const classes = useStyles();

  let price;
  let carrierImageUrl;
  let firstSegmentOrigin;
  let firstSegmentDestination;
  let firstSegmentDepartureDateAndTime;
  let firstSegmentdepartureTime;
  let firstSegmentDepartureHours;
  let firstSegmentdepartureMinutes;
  let firstSegmentdepartureTimestamp;
  let firstSegmentArrivalHours;
  let firstSegmentArrivalMinutes;
  let firstSegmentTravelHours;
  let firstSegmentTravelMinutes;
  let firstSegmentStops;
  let firstSegmentStopsNames;

  let secondSegmentStops;
  let secondSegmentOrigin;
  let secondSegmentDestination;
  let secondSegmentdepartureTime;
  let secondSegmentDepartureHours;
  let secondSegmentDepartureMinutes;
  let secondSegmentDepartureDateAndTime;
  let secondSegmentdepartureTimestamp;
  let secondSegmentArrivalHours;
  let secondSegmentArrivalMinutes;
  let secondSegmentTravelHours;
  let secondSegmentTravelMinutes;
  let secondSegmentStopsNames;

  if (filteredData.tickets && filteredData.tickets.length > 0) {
    price = filteredData.tickets[number].price
      .toString()
      .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
    carrierImageUrl = `http://pics.avs.io/110/36/${filteredData.tickets[number].carrier}.png`;

    firstSegmentOrigin = filteredData.tickets[number].segments[0].origin;
    firstSegmentDestination =
      filteredData.tickets[number].segments[0].destination;

    secondSegmentOrigin = filteredData.tickets[number].segments[1].origin;
    secondSegmentDestination =
      filteredData.tickets[number].segments[1].destination;
    firstSegmentDepartureDateAndTime = new Date(
      filteredData.tickets[number].segments[0].date
    );

    firstSegmentDepartureHours = String(
      firstSegmentDepartureDateAndTime.getHours()
    ).padStart(2, "0");
    firstSegmentdepartureMinutes = String(
      firstSegmentDepartureDateAndTime.getMinutes()
    ).padStart(2, "0");

    firstSegmentdepartureTime = firstSegmentDepartureDateAndTime.getTime();

    firstSegmentdepartureTimestamp = new Date(
      firstSegmentdepartureTime +
        filteredData.tickets[number].segments[0].duration * 60000
    );

    // Phuket time is +4hours to Moscow
    firstSegmentArrivalHours = String(
      firstSegmentdepartureTimestamp.getHours() + 4
    ).padStart(2, "0");

    firstSegmentArrivalMinutes = String(
      firstSegmentdepartureTimestamp.getMinutes()
    ).padStart(2, "0");

    firstSegmentTravelHours = String(
      Math.floor(filteredData.tickets[0].segments[0].duration / 60)
    ).padStart(2, "0");

    firstSegmentTravelMinutes = String(
      filteredData.tickets[number].segments[0].duration -
        Math.floor(filteredData.tickets[number].segments[0].duration / 60) * 60
    ).padStart(2, "0");

    firstSegmentStops =
      filteredData.tickets[number].segments[0].stops.length === 0
        ? "БЕЗ ПЕРЕСАДОК"
        : filteredData.tickets[number].segments[0].stops.length === 1
        ? "1 ПЕРЕСАДКА"
        : filteredData.tickets[number].segments[0].stops.length > 1
        ? `${filteredData.tickets[number].segments[0].stops.length} ПЕРЕСАДКИ`
        : "5 ПЕРЕСАДОК";

    firstSegmentStopsNames =
      filteredData.tickets[number].segments[0].stops.length > 1
        ? filteredData.tickets[number].segments[0].stops.join(", ")
        : filteredData.tickets[number].segments[0].stops.join("");

    secondSegmentDepartureDateAndTime = new Date(
      filteredData.tickets[number].segments[1].date
    );

    secondSegmentDepartureHours = String(
      secondSegmentDepartureDateAndTime.getHours()
    ).padStart(2, "0");

    secondSegmentDepartureMinutes = String(
      secondSegmentDepartureDateAndTime.getMinutes()
    ).padStart(2, "0");
    secondSegmentdepartureTime = secondSegmentDepartureDateAndTime.getTime();

    secondSegmentdepartureTimestamp = new Date(
      secondSegmentdepartureTime +
        filteredData.tickets[number].segments[1].duration * 60000
    );

    // Phuket time is +4hours to Moscow
    secondSegmentArrivalHours = String(
      secondSegmentdepartureTimestamp.getHours() + 4
    ).padStart(2, "0");
    secondSegmentArrivalMinutes = String(
      secondSegmentdepartureTimestamp.getMinutes()
    ).padStart(2, "0");

    secondSegmentTravelHours = String(
      Math.floor(filteredData.tickets[number].segments[1].duration / 60)
    ).padStart(2, "0");

    secondSegmentTravelMinutes = String(
      filteredData.tickets[number].segments[1].duration -
        Math.floor(filteredData.tickets[number].segments[1].duration / 60) * 60
    ).padStart(2, "0");

    secondSegmentStops =
      filteredData.tickets[number].segments[1].stops.length === 0
        ? "БЕЗ ПЕРЕСАДОК"
        : filteredData.tickets[number].segments[1].stops.length === 1
        ? "1 ПЕРЕСАДКА"
        : filteredData.tickets[number].segments[1].stops.length > 1
        ? `${filteredData.tickets[number].segments[1].stops.length} ПЕРЕСАДКИ`
        : "5 ПЕРЕСАДОК";

    secondSegmentStopsNames =
      filteredData.tickets[number].segments[1].stops.length > 1
        ? filteredData.tickets[number].segments[1].stops.join(", ")
        : filteredData.tickets[number].segments[1].stops.join("");
  }

  return (
    <>
      <Box className={classes.card}>
        <Box className={classes.header}>
          <Box className={classes.price}>{price} Р</Box>
          <Box>
            <img src={carrierImageUrl} alt="" />
          </Box>
        </Box>
        <Box className={classes.destinationFirst}>
          <Box className={classes.column}>
            <Box className={classes.destinationHeading}>
              {firstSegmentOrigin} – {firstSegmentDestination}
            </Box>
            <Box className={classes.destinationText}>
              {firstSegmentDepartureHours}:{firstSegmentdepartureMinutes} –{" "}
              {firstSegmentArrivalHours}:{firstSegmentArrivalMinutes}
            </Box>
          </Box>
          <Box className={classes.column}>
            <Box className={classes.destinationHeading}>В пути</Box>
            <Box className={classes.destinationText}>
              {firstSegmentTravelHours}ч {firstSegmentTravelMinutes}м
            </Box>
          </Box>
          <Box className={classes.thirdColumn}>
            <Box className={classes.destinationHeading}>
              {firstSegmentStops}
            </Box>
            <Box className={classes.destinationText}>
              {firstSegmentStopsNames}
            </Box>
          </Box>
        </Box>
        <Box className={classes.destinationSecond}>
          <Box className={classes.column}>
            <Box className={classes.destinationHeading}>
              {secondSegmentOrigin} – {secondSegmentDestination}
            </Box>
            <Box className={classes.destinationText}>
              {secondSegmentDepartureHours}:{secondSegmentDepartureMinutes} –{" "}
              {secondSegmentArrivalHours}:{secondSegmentArrivalMinutes}
            </Box>
          </Box>
          <Box className={classes.column}>
            <Box className={classes.destinationHeading}>В пути</Box>
            <Box className={classes.destinationText}>
              {secondSegmentTravelHours}ч {secondSegmentTravelMinutes}м
            </Box>
          </Box>
          <Box className={classes.thirdColumn}>
            <Box className={classes.destinationHeading}>
              {secondSegmentStops}
            </Box>
            <Box className={classes.destinationText}>
              {secondSegmentStopsNames}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

const mapStateToProps = ({ filteredData }) => {
  return {
    filteredData,
  };
};

export default connect(mapStateToProps)(TicketCard);

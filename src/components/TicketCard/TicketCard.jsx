import React, { useEffect } from "react";
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
    height: '144px',
    padding: "20px",
    marginBottom: '20px',
    '&:last-child': {
      marginBottom: '0px'
    }
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
    marginRight: '20px',
    width: "141px",
  },
  thirdColumn: {
    width: "140px",
  },
}));

function TicketCard(props) {
  const classes = useStyles();

  useEffect(() => {
    console.log("TicketCard loaded");
  });

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

  if (props.filteredData.tickets && props.filteredData.tickets.length > 0) {
    //  TODO!!!! Departute and arrival time is made for Moscow
    price = props.filteredData.tickets[props.number].price
      .toString()
      .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
    carrierImageUrl = `http://pics.avs.io/110/36/${
      props.filteredData.tickets[props.number].carrier
    }.png`;
    // console.log("date filteredData: ", props.filteredData.tickets[0].segments[0].date);

    firstSegmentOrigin =
      props.filteredData.tickets[props.number].segments[0].origin;
    firstSegmentDestination =
      props.filteredData.tickets[props.number].segments[0].destination;

    secondSegmentOrigin =
      props.filteredData.tickets[props.number].segments[1].origin;
    secondSegmentDestination =
      props.filteredData.tickets[props.number].segments[1].destination;
    firstSegmentDepartureDateAndTime = new Date(
      props.filteredData.tickets[props.number].segments[0].date
    );
    // console.log("departureDateAndTime: ", firstSegmentDepartureDateAndTime);
    firstSegmentDepartureHours = String(
      firstSegmentDepartureDateAndTime.getHours()
    ).padStart(2, "0");
    firstSegmentdepartureMinutes = String(
      firstSegmentDepartureDateAndTime.getMinutes()
    ).padStart(2, "0");

    firstSegmentdepartureTime = firstSegmentDepartureDateAndTime.getTime();
    // console.log("departureTime: ", firstSegmentdepartureTime);
    // console.log("duration: ", props.filteredData.tickets[0].segments[0].duration);
    firstSegmentdepartureTimestamp = new Date(
      firstSegmentdepartureTime +
        props.filteredData.tickets[props.number].segments[0].duration * 60000
    );
    // console.log("timestamp + duration: ", firstSegmentdepartureTimestamp);
    // console.log(firstSegmentdepartureTimestamp.getHours());
    // console.log(firstSegmentdepartureTimestamp.getMinutes());

    firstSegmentArrivalHours = String(
      firstSegmentdepartureTimestamp.getHours()
    ).padStart(2, "0");

    firstSegmentArrivalMinutes = String(
      firstSegmentdepartureTimestamp.getMinutes()
    ).padStart(2, "0");

    firstSegmentTravelHours = String(
      Math.floor(props.filteredData.tickets[0].segments[0].duration / 60)
    ).padStart(2, "0");

    firstSegmentTravelMinutes = String(
      props.filteredData.tickets[props.number].segments[0].duration -
        Math.floor(
          props.filteredData.tickets[props.number].segments[0].duration / 60
        ) *
          60
    ).padStart(2, "0");

    firstSegmentStops =
      props.filteredData.tickets[props.number].segments[0].stops.length === 0
        ? "БЕЗ ПЕРЕСАДОК"
        : props.filteredData.tickets[props.number].segments[0].stops.length ===
          1
        ? "1 ПЕРЕСАДКА"
        : props.filteredData.tickets[props.number].segments[0].stops.length > 1
        ? `${
            props.filteredData.tickets[props.number].segments[0].stops.length
          } ПЕРЕСАДКИ`
        : "5 ПЕРЕСАДОК";

    firstSegmentStopsNames =
      props.filteredData.tickets[props.number].segments[0].stops.length > 1
        ? props.filteredData.tickets[props.number].segments[0].stops.join(", ")
        : props.filteredData.tickets[props.number].segments[0].stops.join("");

    secondSegmentDepartureDateAndTime = new Date(
      props.filteredData.tickets[props.number].segments[1].date
    );

    secondSegmentDepartureHours = String(
      secondSegmentDepartureDateAndTime.getHours()
    ).padStart(2, "0");

    secondSegmentDepartureMinutes = String(
      secondSegmentDepartureDateAndTime.getMinutes()
    ).padStart(2, "0");
    secondSegmentdepartureTime = secondSegmentDepartureDateAndTime.getTime();
    // console.log("departureTime: ", secondSegmentdepartureTime);
    // console.log("duration: ", props.filteredData.tickets[0].segments[1].duration);
    secondSegmentdepartureTimestamp = new Date(
      secondSegmentdepartureTime +
        props.filteredData.tickets[props.number].segments[1].duration * 60000
    );
    // console.log("timestamp + duration: ", secondSegmentdepartureTimestamp);
    // console.log(secondSegmentdepartureTimestamp.getHours());
    // console.log(secondSegmentdepartureTimestamp.getMinutes());
    secondSegmentArrivalHours = String(
      secondSegmentdepartureTimestamp.getHours()
    ).padStart(2, "0");
    secondSegmentArrivalMinutes = String(
      secondSegmentdepartureTimestamp.getMinutes()
    ).padStart(2, "0");

    secondSegmentTravelHours = String(
      Math.floor(
        props.filteredData.tickets[props.number].segments[1].duration / 60
      )
    ).padStart(2, "0");

    secondSegmentTravelMinutes = String(
      props.filteredData.tickets[props.number].segments[1].duration -
        Math.floor(
          props.filteredData.tickets[props.number].segments[1].duration / 60
        ) *
          60
    ).padStart(2, "0");

    secondSegmentStops =
      props.filteredData.tickets[props.number].segments[1].stops.length === 0
        ? "БЕЗ ПЕРЕСАДОК"
        : props.filteredData.tickets[props.number].segments[1].stops.length ===
          1
        ? "1 ПЕРЕСАДКА"
        : props.filteredData.tickets[props.number].segments[1].stops.length > 1
        ? `${
            props.filteredData.tickets[props.number].segments[1].stops.length
          } ПЕРЕСАДКИ`
        : "5 ПЕРЕСАДОК";

    secondSegmentStopsNames =
      props.filteredData.tickets[props.number].segments[1].stops.length > 1
        ? props.filteredData.tickets[props.number].segments[1].stops.join(", ")
        : props.filteredData.tickets[props.number].segments[1].stops.join("");
  }

  return (
    <>
      {props.filteredData.tickets && props.filteredData.tickets.length > 0 ? (
        <Box className={classes.card}>
          {console.log("data: ", props.data)}
          {console.log("filteredData: ", props.filteredData)}
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
      ) : (
        ""
      )}
    </>
  );
}

const mapStateToProps = ({ data, filteredData }) => {
  return {
    data,
    filteredData,
  };
};

export default connect(mapStateToProps)(TicketCard);

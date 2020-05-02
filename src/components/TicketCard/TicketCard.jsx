import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
// import clsx from "clsx";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

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

function TicketCard(props) {
  const classes = useStyles();

  useEffect(() => {
    console.log("TicketCard loaded");
  });

  let price;
  let carrierImageUrl;
  let firstSegmentDepartureDateAndTime;
  let secondSegmentDepartureDateAndTime;
  let firstSegmentdepartureTime;
  let firstSegmentDepartureHours;
  let firstSegmentdepartureMinutes;
  let firstSegmentdepartureTimestamp;
  let firstSegmentArrivalHours;
  let firstSegmentArrivalMinutes;
  
  let secondSegmentdepartureTime;
  let secondSegmentDepartureHours;
  let secondSegmentDepartureMinutes;
  let secondSegmentdepartureTimestamp;
  let secondSegmentArrivalHours;
  let secondSegmentArrivalMinutes;


  
  if (props.data.tickets) {
//  TODO!!!! Departute and arrival time is made for Moscow
    price = props.data.tickets[0].price.toString();
    carrierImageUrl= `http://pics.avs.io/110/36/${props.data.tickets[0].carrier}.png`
    console.log("date data: ", props.data.tickets[0].segments[0].date);
    firstSegmentDepartureDateAndTime = new Date(props.data.tickets[0].segments[0].date);
    console.log("departureDateAndTime: ", firstSegmentDepartureDateAndTime);
    firstSegmentDepartureHours = firstSegmentDepartureDateAndTime.getHours();
    firstSegmentdepartureMinutes = firstSegmentDepartureDateAndTime.getMinutes();
    firstSegmentdepartureTime = firstSegmentDepartureDateAndTime.getTime();
    console.log("departureTime: ", firstSegmentdepartureTime);
    console.log("duration: ", props.data.tickets[0].segments[0].duration);
    firstSegmentdepartureTimestamp = new Date(
      firstSegmentdepartureTime + props.data.tickets[0].segments[0].duration * 60000
    );
    console.log("timestamp + duration: ", firstSegmentdepartureTimestamp);
    console.log(firstSegmentdepartureTimestamp.getHours());
    console.log(firstSegmentdepartureTimestamp.getMinutes());
    firstSegmentArrivalHours = firstSegmentdepartureTimestamp.getHours() + 7;
    firstSegmentArrivalMinutes = firstSegmentdepartureTimestamp.getMinutes();

    secondSegmentDepartureDateAndTime = new Date(props.data.tickets[0].segments[1].date); 
    secondSegmentDepartureHours = secondSegmentDepartureDateAndTime.getHours();
    secondSegmentDepartureMinutes = secondSegmentDepartureDateAndTime.getMinutes();
    secondSegmentdepartureTime = secondSegmentDepartureDateAndTime.getTime();
    console.log("departureTime: ", secondSegmentdepartureTime);
    console.log("duration: ", props.data.tickets[0].segments[1].duration);
    secondSegmentdepartureTimestamp = new Date(
      secondSegmentdepartureTime + props.data.tickets[0].segments[1].duration * 60000
    );
    console.log("timestamp + duration: ", secondSegmentdepartureTimestamp);
    console.log(secondSegmentdepartureTimestamp.getHours());
    console.log(secondSegmentdepartureTimestamp.getMinutes());
    secondSegmentArrivalHours = secondSegmentdepartureTimestamp.getHours();
    secondSegmentArrivalMinutes = secondSegmentdepartureTimestamp.getMinutes();

  }
  return (

    <>
      {props.data.tickets ? (
        <Box className={classes.card}>
          {console.log(props.data)}
          <Box className={classes.header}>
            <Box>{price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")} Р</Box>
            <Box>
              <img src={carrierImageUrl} alt="" />
            </Box>
          </Box>
          <Box className={classes.destination}>
            <Box>
              <Box className={classes.destinationHeading}>
                {props.data.tickets[0].segments[0].origin} –
                {props.data.tickets[0].segments[0].destination}
              </Box>
              <Box className={classes.destinationText}>
                {firstSegmentDepartureHours}:{firstSegmentdepartureMinutes} – {firstSegmentArrivalHours}:
                {firstSegmentArrivalMinutes}
              </Box>
            </Box>
            <Box>
              <Box className={classes.destinationHeading}>В пути</Box>
              <Box className={classes.destinationText}>
                {Math.floor(props.data.tickets[0].segments[0].duration / 60)}ч{" "}
                {props.data.tickets[0].segments[0].duration -
                  Math.floor(props.data.tickets[0].segments[0].duration / 60) *
                    60}
                м
              </Box>
            </Box>
            <Box>
              <Box className={classes.destinationHeading}>
                {props.data.tickets[0].segments[0].stops.length === 0
                  ? "БЕЗ ПЕРЕСАДОК"
                  : props.data.tickets[0].segments[0].stops.length === 1
                  ? "1 ПЕРЕСАДКА"
                  : props.data.tickets[0].segments[0].stops.length > 1
                  ? `${props.data.tickets[0].segments[0].stops.length} ПЕРЕСАДКИ`
                  : "5 ПЕРЕСАДОК"}
              </Box>
              <Box className={classes.destinationText}>
                {props.data.tickets[0].segments[0].stops.length > 1
                  ? props.data.tickets[0].segments[0].stops.join(", ")
                  : props.data.tickets[0].segments[0].stops.join("")}
              </Box>
            </Box>
          </Box>
          <Box className={classes.destination}>
            <Box>
              <Box className={classes.destinationHeading}>
                {props.data.tickets[0].segments[1].origin} –
                {props.data.tickets[0].segments[1].destination}
              </Box>
              <Box className={classes.destinationText}>
                {secondSegmentDepartureHours}:{secondSegmentDepartureMinutes} – {secondSegmentArrivalHours}:
                {secondSegmentArrivalMinutes}
              </Box>
            </Box>
            <Box>
              <Box className={classes.destinationHeading}>В пути</Box>
              <Box className={classes.destinationText}>
                {Math.floor(props.data.tickets[0].segments[1].duration / 60)}ч{" "}
                {props.data.tickets[0].segments[1].duration -
                  Math.floor(props.data.tickets[0].segments[1].duration / 60) *
                    60}
                м
              </Box>
            </Box>
            <Box>
              <Box className={classes.destinationHeading}>
                {props.data.tickets[0].segments[1].stops.length === 0
                  ? "БЕЗ ПЕРЕСАДОК"
                  : props.data.tickets[0].segments[1].stops.length === 1
                  ? "1 ПЕРЕСАДКА"
                  : props.data.tickets[0].segments[1].stops.length > 1
                  ? `${props.data.tickets[0].segments[1].stops.length} ПЕРЕСАДКИ`
                  : "5 ПЕРЕСАДОК"}
              </Box>
              <Box className={classes.destinationText}>
                {props.data.tickets[0].segments[1].stops.length > 1
                  ? props.data.tickets[0].segments[1].stops.join(", ")
                  : props.data.tickets[0].segments[1].stops.join("")}
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        "LOADING"
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

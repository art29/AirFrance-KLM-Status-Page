import React from "react";
import FlightResult from "./FlightResult";

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      airline: "AF",
      flight_number: "",
      errorMessage: "",
    }; // Result and Flight Number states
    this.handleAirlineUpdate = this.handleAirlineUpdate.bind(this);
    this.handleFlightNumberUpdate = this.handleFlightNumberUpdate.bind(this);
  }

  handleAirlineUpdate(event) {
    this.setState({ airline: event.target.value }); // Set airline updating input
  }

  handleFlightNumberUpdate(event) {
    this.setState({ flight_number: event.target.value }); // Set flight number when updating input
  }

  fetchFlights = (airline, flight_number, start_date, end_date) => {
    fetch(
      "https://api.airfranceklm.com/opendata/flightstatus/?carrierCode=" +
        airline +
        "&flightNumber=" +
        flight_number +
        "&startRange=" +
        start_date +
        "&endRange=" +
        end_date,
      {
        headers: new Headers({
          "accept-language": "en-GB",
          "Api-Key": process.env.REACT_APP_AIRFRANCE_KLM_API_KEY,
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        if (result["operationalFlights"]) {
          this.setState({ results: result["operationalFlights"] });
        } else {
          this.setState({ errorMessage: result["errors"][0]["description"] });
          console.error("There was an error!", this.state.errorMessage);
        }
      })
      .catch((error) => {
        this.setState({ errorMessage: error.toString });
        console.error("There was an error!", error);
      });
  };

  toggleButtonState = () => {
    let airline = this.state.airline; // Airline
    let flight_number = this.state.flight_number; // Flight_number
    let start_date = new Date();
    start_date.setDate(start_date.getDate() - 1); // Set date 24h before
    let end_date = new Date();
    end_date.setDate(end_date.getDate() + 3); // Set end date to 3 days from now
    this.fetchFlights(
      airline,
      flight_number,
      start_date.toISOString().split(".")[0] + "Z",
      end_date.toISOString().split(".")[0] + "Z"
    );
  };

  render() {
    return (
      <div>
        <div className="px-4 text-center">
          <div className="clearfix">
            <img
              src="./air-france-logo.svg"
              height="25"
              alt={"Air France Logo"}
            />
            <img src="./klm-logo.svg" height="50" alt={"KLM Logo"} />
          </div>
          <br />
          <h1 className="display-5 fw-bold">Air France/KLM Status Page*</h1>
          <p className="text-muted">
            * This website is not affiliated in any way with Air France/KLM or
            any other entities
          </p>
          <div className="col-lg-6 mx-auto">
            <div className="input-group mb-3">
              <select
                value={this.state.airline}
                onChange={this.handleAirlineUpdate}
                className="form-select"
                id="airline"
                style={{ textAlign: "right" }}
                dir={"rtl"}
              >
                <option value="AF">AF/AFR</option>
                <option value="KL">KL/KLM</option>
              </select>
              <input
                type="text"
                className="form-control"
                id="flight-number"
                placeholder="349"
                onChange={this.handleFlightNumberUpdate}
                value={this.state.flight_number}
              />
            </div>
            <div className="d-grid gap-2 mt-1 d-sm-flex justify-content-sm-center">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 gap-3"
                onClick={this.toggleButtonState}
              >
                Check Status
              </button>
            </div>
            <br />
            <div>
              {this.state.results.map((flight) => (
                <>
                  <FlightResult flight={flight} />
                  <br />
                </>
              ))}
            </div>
            {this.state.errorMessage !== "" && (
              <div className={"alert alert-danger mt-3"}>
                {this.state.errorMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Status;

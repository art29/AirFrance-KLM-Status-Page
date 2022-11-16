import React from "react";
import FlightLeg from "./FlightLeg";
import ReactJson from "react-json-view";
import { CodeSlash } from "react-bootstrap-icons";

const FlightResult = (flight) => {
  return (
    <div>
      <div className="modal-dialog-xl" role="document">
        <div className="modal-content rounded-6 shadow">
          <div className="modal-body p-3">
            <details>
              <summary className="h3 fw-bold mb-0">
                {flight.flight["airline"]["code"]}
                {flight.flight["flightNumber"]}
                <button
                  type="button"
                  className="btn btn-primary float-end"
                  data-bs-toggle="modal"
                  data-bs-target={"#json_" + flight.flight.id.split("+")[0]}
                >
                  <CodeSlash />
                </button>

                <div
                  className="modal fade"
                  id={"json_" + flight.flight.id.split("+")[0]}
                  tabIndex="-1"
                  aria-labelledby={"json_" + flight.flight.id.split("+")[0]}
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                      <div className="modal-body">
                        <p className="fs-6 text-start">
                          <ReactJson
                            src={flight}
                            onEdit={false}
                            onAdd={false}
                            onDelete={false}
                          />
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </summary>
              <ul className="list-group list-group-flush">
                {flight.flight["codeShareRelations"] ?
                  (flight.flight["codeShareRelations"].map((codeShare) => (
                    <li className="list-group-item">
                      {codeShare["airline"]["code"]}
                      {codeShare["marketingFlightNumber"]} (
                      {codeShare["airline"]["name"]})
                    </li>
                  ))) : (
                    <li className="list-group-item">
                    There is no codeshare on this flight
                    </li>
                  )}
                <br />
              </ul>
            </details>
            <div>
              {flight.flight["flightLegs"].map((flightLeg, i) => (
                <FlightLeg
                  flightLeg={flightLeg}
                  id={i + "_" + flight.flight.id.split("+")[0]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightResult;

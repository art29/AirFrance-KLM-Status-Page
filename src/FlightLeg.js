import React from "react";
import Places from "./Places";

let format_date = (date) => {
  return new Date(date.split("+")[0]).toLocaleTimeString([], {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const FlightLeg = ({ flightLeg, id }) => {
  return (
    <div>
      {flightLeg["status"] !== "C" && flightLeg["status"] !== "X" && (
        <div>
          ({flightLeg["legStatusPublicLangTransl"]})
          {flightLeg["timeToArrival"] &&
            flightLeg["legStatusPublicLangTransl"] !== "Arrived" && (
              <span>
                {" "}
                (Arriving in {flightLeg["timeToArrival"].replace(
                  "PT",
                  ""
                )}){" "}
              </span>
            )}
          {flightLeg["completionPercentage"] &&
            flightLeg["legStatusPublicLangTransl"] !== "Arrived" &&
            flightLeg["completionPercentage"] !== "0" && (
              <span>({flightLeg["completionPercentage"]}%)</span>
            )}
          {flightLeg["otherFlightLegStatuses"] &&
            flightLeg["legStatusPublicLangTransl"] !== "Arrived" &&
            flightLeg["otherFlightLegStatuses"]["boardingStatus"] && (
              <p>
                Boarding Status:{" "}
                {flightLeg["otherFlightLegStatuses"]["boardingStatus"]}
              </p>
            )}
        </div>
      )}
      {(flightLeg["status"] === "C" || flightLeg["status"] === "X") && (
        <>
          <br />
          <div className="alert alert-danger" role="alert">
            Flight has been cancelled. Please contact your airline for details.
          </div>
        </>
      )}
      {flightLeg["irregularity"]["delayReasonPublicLangTransl"] &&
        flightLeg["irregularity"]["delayReasonPublicLangTransl"].map(
          (delay) => (
            <>
              <br />
              <div className="alert alert-danger" role="alert">
                {delay}
              </div>
            </>
          )
        )}
      <br />
      <div className="container">
        <div className="row g-4">
          <div className="feature col-md-5">
            <h2 className="fw-bold">
              {flightLeg["departureInformation"]["airport"]["code"]}
            </h2>
            <p>
              {flightLeg["departureInformation"]["airport"]["nameLangTranl"]}
              <br />
              {
                flightLeg["departureInformation"]["airport"]["city"][
                  "nameLangTranl"
                ]
              }
              ,{" "}
              {
                flightLeg["departureInformation"]["airport"]["city"]["country"][
                  "code"
                ]
              }
            </p>
            <p className="fs-5">
              Scheduled Departure Time:{" "}
              {format_date(
                flightLeg["departureInformation"]["times"]["scheduled"]
              )}
            </p>
            {flightLeg["departureInformation"]["times"]["actualTakeOffTime"] ===
            undefined ? (
              <p className="fs-5">
                Latest Available Departure Time:{" "}
                {format_date(
                  flightLeg["departureInformation"]["times"]["latestPublished"]
                )}
              </p>
            ) : (
              <p className="fs-5">
                Departed At:{" "}
                {format_date(
                  flightLeg["departureInformation"]["times"][
                    "actualTakeOffTime"
                  ]
                )}
              </p>
            )}
            { flightLeg["departureInformation"]["airport"] && (
              <Places
                places={flightLeg["departureInformation"]["airport"]["places"]}
                type={"D"}
              />
            )}
          </div>
          <div className="feature col-md-2">
            <img
              width="50"
              src="https://upload.wikimedia.org/wikipedia/commons/e/ee/1a2.svg"
              alt="Aircraft Illustration"
            />
            <p>{flightLeg["aircraft"]["typeName"]}</p>
            {flightLeg["aircraft"]["registration"] && (
              <p>
                (Reg.{" "}
                {flightLeg["aircraft"]["registration"][0] === "F"
                  ? flightLeg["aircraft"]["registration"][0] +
                    "-" +
                    flightLeg["aircraft"]["registration"].substr(1)
                  : flightLeg["aircraft"]["registration"]}
                )
              </p>
            )}
          </div>
          <div className="feature col-md-5">
            <h2 className="fw-bold">
              {flightLeg["arrivalInformation"]["airport"]["code"]}
            </h2>
            <p>
              {flightLeg["arrivalInformation"]["airport"]["nameLangTranl"]}
              <br />
              {
                flightLeg["arrivalInformation"]["airport"]["city"][
                  "nameLangTranl"
                ]
              }
              ,{" "}
              {
                flightLeg["arrivalInformation"]["airport"]["city"]["country"][
                  "code"
                ]
              }
            </p>
            <p className="fs-5">
              Scheduled Arrival Time:{" "}
              {format_date(
                flightLeg["arrivalInformation"]["times"]["latestPublished"]
              )}
            </p>
            {flightLeg["arrivalInformation"]["times"]["actual"] ===
            undefined ? (
              <p className="fs-5">
                Latest Available Arrival Time:{" "}
                {format_date(
                  flightLeg["arrivalInformation"]["times"]["latestPublished"]
                )}
              </p>
            ) : (
              <p className="fs-5">
                Arrived at:{" "}
                {format_date(
                  flightLeg["arrivalInformation"]["times"]["actual"]
                )}
              </p>
            )}
            { flightLeg["arrivalInformation"]["airport"]["places"] && (
              <Places
                places={flightLeg["arrivalInformation"]["airport"]["places"]}
                type="A"
              />
            )
            }
          </div>
        </div>
      </div>
      <p>
        <button
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#collapseMoreInfo" + id}
          aria-expanded="false"
          aria-controls={"collapseMoreInfo" + id}
          className="btn btn-lg btn-primary mt-1 w-100"
        >
          More info
        </button>
      </p>
      <div className="collapse" id={"collapseMoreInfo" + id}>
        <div className="card card-body">
          <ul className="list-group">
            <li className="list-group-item">
              PAX Config: {flightLeg["aircraft"]["physicalPaxConfiguration"]}
            </li>
            <li className="list-group-item">
              Freight Config:{" "}
              {flightLeg["aircraft"]["physicalFreightConfiguration"]}
            </li>
            <li className="list-group-item">
              Operational Config:{" "}
              {flightLeg["aircraft"]["operationalConfiguration"]}
            </li>
            <li className="list-group-item">
              Wifi Enabled: {flightLeg["aircraft"]["wifiEnabled"]}
            </li>
            <li className="list-group-item">
              Satellite Connectivity:{" "}
              {flightLeg["aircraft"]["satelliteConnectivityOnBoard"]}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FlightLeg;

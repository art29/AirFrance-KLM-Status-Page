import React from "react";
import Places from "./Places";

let format_date = (date) => {
    return new Date(date.split("+")[0]).toLocaleTimeString([], {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
}

const FlightLeg = ({flightLeg, id}) => {
    return (
        <div>
            {(flightLeg['status'] !== "C" && flightLeg['status'] !== "X") &&
            <div>
                ({flightLeg['legStatusPublicLangTransl']})
                {flightLeg['timeToArrival'] !== undefined && flightLeg['legStatusPublicLangTransl'] !== "Arrived" &&
                <span> (Arriving in {flightLeg['timeToArrival'].replace("PT", "")}) </span>}
                {flightLeg['completionPercentage'] !== undefined && flightLeg['legStatusPublicLangTransl'] !== "Arrived" && flightLeg['completionPercentage'] !== 0 &&
                <span>({flightLeg['completionPercentage']}%)</span>}
                {(flightLeg['otherFlightLegStatuses'] !== undefined) && flightLeg['legStatusPublicLangTransl'] !== "Arrived" && (flightLeg['otherFlightLegStatuses']['boardingStatus'] !== undefined) &&
                <p>Boarding Status: {flightLeg['otherFlightLegStatuses']['boardingStatus']}</p>
                }
            </div>
            }
            {(flightLeg['status'] === "C" || flightLeg['status'] === "X") &&
            <div className="alert alert-danger" role="alert">
                Flight has been cancelled. Please contact your airline for details.
            </div>
            }
            {flightLeg['irregularity']['delayReasonPublicLangTransl'] !== undefined &&
            flightLeg['irregularity']['delayReasonPublicLangTransl'].map((delay) => (
                <div className="alert alert-danger" role="alert">
                    {delay}
                </div>
            ))
            }
            <br/>
            <div className="container">
                <div className="row g-4">
                    <div className="feature col-md-5">
                        <h2 className="fw-bold">{flightLeg['departureInformation']['airport']['code']}</h2>
                        <p>{flightLeg['departureInformation']['airport']['nameLangTranl']}
                            <br/>
                            {flightLeg['departureInformation']['airport']['city']['nameLangTranl']}, {flightLeg['departureInformation']['airport']['city']['country']['code']}
                        </p>
                        <h4>Scheduled Departure
                            Time: {format_date(flightLeg['departureInformation']['times']['scheduled'])}</h4>
                        {(flightLeg['departureInformation']['times']['actualTakeOffTime'] === undefined) ? (
                            <h4>Latest Available Departure
                                Time: {format_date(flightLeg['departureInformation']['times']['latestPublished'])}</h4>
                        ) : (
                            <h4>Departed
                                At: {format_date(flightLeg['departureInformation']['times']['actualTakeOffTime'])}</h4>
                        )}
                        <Places places={flightLeg['departureInformation']['airport']['places']} type={"D"}/>
                    </div>
                    <div className="feature col-md-2">
                        <img width="50" src="https://upload.wikimedia.org/wikipedia/commons/e/ee/1a2.svg"
                             alt="Aircraft Illustration"/>
                        <p>{flightLeg['aircraft']['typeName']}</p>
                        {(flightLeg['aircraft']['registration'] !== undefined) &&
                        <p>(Reg. {flightLeg['aircraft']['registration']})</p>
                        }
                    </div>
                    <div className="feature col-md-5">
                        <h2 className="fw-bold">{flightLeg['arrivalInformation']['airport']['code']}</h2>
                        <p>{flightLeg['arrivalInformation']['airport']['nameLangTranl']}
                            <br/>
                            {flightLeg['arrivalInformation']['airport']['city']['nameLangTranl']}, {flightLeg['arrivalInformation']['airport']['city']['country']['code']}
                        </p>
                        <h4>Scheduled Arrival
                            Time: {format_date(flightLeg['arrivalInformation']['times']['latestPublished'])}</h4>
                        {(flightLeg['arrivalInformation']['times']['actual'] === undefined) ? (
                            <h4>Latest Available Arrival
                                Time: {format_date(flightLeg['arrivalInformation']['times']['latestPublished'])}</h4>
                        ) : (
                            <h4>Arrived at: {format_date(flightLeg['arrivalInformation']['times']['actual'])}</h4>
                        )}
                        <Places places={flightLeg['arrivalInformation']['airport']['places']} type="A"/>
                    </div>
                </div>
            </div>
            <p>
                <button type="button" data-bs-toggle="collapse"
                        data-bs-target={"#collapseMoreInfo" + id} aria-expanded="false"
                        aria-controls={"collapseMoreInfo" + id}
                        className="btn btn-lg btn-primary mt-5 w-100">More info
                </button>
            </p>
            <div className="collapse" id={"collapseMoreInfo" + id}>
                <div className="card card-body">
                    <ul className="list-group">
                        <li className="list-group-item">PAX
                            Config: {flightLeg['aircraft']['physicalPaxConfiguration']}</li>
                        <li className="list-group-item">Freight
                            Config: {flightLeg['aircraft']['physicalFreightConfiguration']}</li>
                        <li className="list-group-item">Operational
                            Config: {flightLeg['aircraft']['operationalConfiguration']}</li>
                        <li className="list-group-item">Wifi Enabled: {flightLeg['aircraft']['wifiEnabled']}</li>
                        <li className="list-group-item">Satellite
                            Connectivity: {flightLeg['aircraft']['satelliteConnectivityOnBoard']}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FlightLeg
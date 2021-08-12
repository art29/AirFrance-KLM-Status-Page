import React from "react";
import FlightLeg from "./FlightLeg";

const FlightResult = (flight) => {

    return (
        <div>
            <div className="modal-dialog-xl" role="document">
                <div className="modal-content rounded-6 shadow">
                    <div className="modal-body p-3">
                        <details>
                            <summary
                                className="h3 fw-bold mb-0">{flight.flight['airline']['code']}{flight.flight['flightNumber']}</summary>
                            <ul className="list-group list-group-flush">
                                {flight.flight['codeShareRelations'].map((codeShare) => (
                                    <li className="list-group-item">{codeShare['airline']['code']}{codeShare['marketingFlightNumber']} ({codeShare['airline']['name']})</li>
                                ))}
                                {flight.flight['codeShareRelations'] === undefined &&
                                <li className="list-group-item">There is not codeshare on this flight</li>
                                }
                                <br/>
                            </ul>
                        </details>
                        <div>
                            {flight.flight['flightLegs'].map((flightLeg, i) => (
                                <>
                                    <FlightLeg flightLeg={flightLeg} id={i + "_" + flight.flight.id.split("+")[0]}/>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightResult;
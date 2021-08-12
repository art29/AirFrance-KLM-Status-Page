import React from "react";

const Places = ({places, type}) => {

    return (
        <div>
            {(type === "D") ? (
                <div>
                    {places['terminalCode'] !== undefined && <p>Terminal: {places['terminalCode']}</p>}
                    {places['gateNumber'] !== undefined && <p>Check-In Zone: {places['checkInZone'].join(", ")}</p>}
                    {places['terminalCode'] !== undefined && <p>Boarding Terminal: {places['boardingTerminal']}</p>}
                    {places['gateNumber'] !== undefined && <p>Gate Number: {places['gateNumber'].join(", ")}</p>}
                    {places['boardingContactType'] !== undefined &&
                    (places['boardingContactType'] === "C") ?
                        <p>Contact Type: JetBridge </p>
                        : (places['boardingContactType'] === "F") ?
                            <p>Contact Type: Gate but by foot/bus {places['boardingContactType'] !== undefined &&
                            <span>({places['boardingBusQuantity']} bus(es) incoming)</span>}</p>
                            : (places['boardingContactType'] === "L") ?
                                <p>Contact Type: Remote, by bus {places['boardingContactType'] !== undefined &&
                                <span>({places['boardingBusQuantity']} bus(es) incoming)</span>}</p>
                                : ""}
                </div>
            ) : (
                <div>
                    {places['terminalCode'] !== undefined && <p>Terminal: {places['terminalCode']}</p>}
                    {places['parkingPosition'] !== undefined && <p>Parking Position: {places['parkingPosition']}</p>}
                    {places['boardingContactType'] !== undefined &&
                    (places['disembarkingContactType'] === "C") ?
                        <p>Contact Type: JetBridge </p>
                        : (places['disembarkingContactType'] === "F") ?
                            <p>Contact Type: Gate but by foot/bus {places['disembarkingContactType'] !== undefined &&
                            <span>({places['disembarkingBusQuantity']} bus(es) incoming)</span>}</p>
                            : (places['disembarkingContactType'] === "L") ?
                                <p>Contact Type: Remote, by bus {places['disembarkingContactType'] !== undefined &&
                                <span>({places['disembarkingBusQuantity']} bus(es) incoming)</span>}</p>
                                : ""}
                    {places['baggageBelt'] !== undefined && places['baggageBelt'] > 1 &&
                    <p>Bagage Belt(s): {places['baggageBelt'].join(", ")}</p>}
                </div>
            )}
        </div>
    );
};

export default Places;
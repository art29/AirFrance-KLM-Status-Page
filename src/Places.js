import React from "react";

const Places = ({places, type}) => {

    return (
        <div>
            {(type === "D") ? (
                <p>
                    {places['terminalCode'] !== undefined && <span>Terminal: {places['terminalCode']}<br/></span>}
                    {places['gateNumber'] !== undefined && <span>Check-In Zone: {places['checkInZone'].join(", ")}<br/></span>}
                    {places['terminalCode'] !== undefined && <span>Boarding Terminal: {places['boardingTerminal']}<br/></span>}
                    {places['gateNumber'] !== undefined && <span>Gate Number: {places['gateNumber'].join(", ")}<br/></span>}
                    {places['boardingContactType'] !== undefined &&
                    (places['boardingContactType'] === "C") ?
                        <span>Contact Type: JetBridge <br/></span>
                        : (places['boardingContactType'] === "F") ?
                            <span>Contact Type: Gate but by foot/bus {places['boardingContactType'] !== undefined &&
                            <span>({places['boardingBusQuantity']} bus(es) incoming)</span>}<br/></span>
                            : (places['boardingContactType'] === "L") ?
                                <span>Contact Type: Remote, by bus {places['boardingContactType'] !== undefined &&
                                <span>({places['boardingBusQuantity']} bus(es) incoming)</span>}<br/></span>
                                : ""}
                </p>
            ) : (
                <p>
                    {places['terminalCode'] !== undefined && <span>Terminal: {places['terminalCode']}<br/></span> }
                    {places['parkingPosition'] !== undefined && <span>Parking Position: {places['parkingPosition']}<br/></span>}
                    {places['boardingContactType'] !== undefined &&
                    (places['disembarkingContactType'] === "C") ?
                        <span>Contact Type: JetBridge <br/></span>
                        : (places['disembarkingContactType'] === "F") ?
                            <span>Contact Type: Gate but by foot/bus {places['disembarkingContactType'] !== undefined &&
                            <span>({places['disembarkingBusQuantity']} bus(es) incoming)</span>}<br/></span>
                            : (places['disembarkingContactType'] === "L") ?
                                <span>Contact Type: Remote, by bus {places['disembarkingContactType'] !== undefined &&
                                <span>({places['disembarkingBusQuantity']} bus(es) incoming)</span>}<br/></span>
                                : ""}
                    {places['baggageBelt'] !== undefined && places['baggageBelt'] > 1 &&
                    <span>Bagage Belt(s): {places['baggageBelt'].join(", ")}<br/></span>}
                </p>
            )}
        </div>
    );
};

export default Places;
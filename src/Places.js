import React from "react";

const Places = ({ places, type }) => {
  return (
    <div>
      {type === "D" ? (
        <p>
          {places["terminalCode"] && (
            <span>
              Terminal: {places["terminalCode"]}
              <br />
            </span>
          )}
          {places["gateNumber"] && (
            <span>
              Check-In Zone: {places["checkInZone"].join(", ")}
              <br />
            </span>
          )}
          {places["terminalCode"] && (
            <span>
              Boarding Terminal: {places["boardingTerminal"]}
              <br />
            </span>
          )}
          {places["gateNumber"] && (
            <span>
              Gate Number: {places["gateNumber"].join(", ")}
              <br />
            </span>
          )}
          {places["boardingContactType"] &&
          places["boardingContactType"] === "C" ? (
            <span>
              Contact Type: JetBridge <br />
            </span>
          ) : places["boardingContactType"] === "F" ? (
            <span>
              Contact Type: Gate but by foot/bus{" "}
              {places["boardingContactType"] && (
                <span>({places["boardingBusQuantity"]} bus(es) incoming)</span>
              )}
              <br />
            </span>
          ) : places["boardingContactType"] === "L" ? (
            <span>
              Contact Type: Remote, by bus{" "}
              {places["boardingContactType"] && (
                <span>({places["boardingBusQuantity"]} bus(es) incoming)</span>
              )}
              <br />
            </span>
          ) : (
            ""
          )}
        </p>
      ) : (
        <p>
          {places["terminalCode"] && (
            <span>
              Terminal: {places["terminalCode"]}
              <br />
            </span>
          )}
          {places["parkingPosition"] && (
            <span>
              Parking Position: {places["parkingPosition"]}
              <br />
            </span>
          )}
          {places["boardingContactType"] &&
          places["disembarkingContactType"] === "C" ? (
            <span>
              Contact Type: JetBridge <br />
            </span>
          ) : places["disembarkingContactType"] === "F" ? (
            <span>
              Contact Type: Gate but by foot/bus{" "}
              {places["disembarkingContactType"] && (
                <span>
                  ({places["disembarkingBusQuantity"]} bus(es) incoming)
                </span>
              )}
              <br />
            </span>
          ) : places["disembarkingContactType"] === "L" ? (
            <span>
              Contact Type: Remote, by bus{" "}
              {places["disembarkingContactType"] && (
                <span>
                  ({places["disembarkingBusQuantity"]} bus(es) incoming)
                </span>
              )}
              <br />
            </span>
          ) : (
            ""
          )}
          {places["baggageBelt"] && places["baggageBelt"] > 1 && (
            <span>
              Bagage Belt(s): {places["baggageBelt"].join(", ")}
              <br />
            </span>
          )}
        </p>
      )}
    </div>
  );
};

export default Places;

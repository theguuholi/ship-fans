import { useState } from "react";

interface ShipProps {
  id: string;
  name: string;
  roles: string[];
}

export default function Ship({ ship }: ShipProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  function onExpandShip() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="ship-info">
      <div className="ship">
        <div>
          <strong className="role">{ship.roles}</strong>
          <span>li</span>
        </div>

        <span>{ship.name}</span>
        <button onClick={onExpandShip} type="button" className="shipbutton">
          ^
        </button>
      </div>

      {isExpanded && <div>pumpkin</div>}
    </div>
  );
}

// {
//   "ships": [
//       {
//           "id": "5ea6ed2d080df4000697c903",
//           "image": null,
//           "name": "American Spirit",
//           "roles": [
//               "Support Ship"
//           ],
//           "type": "Cargo",
//           "home_port": "Port of Los Angeles",
//           "year_built": null
//       }
//   ]
// }

import { useState } from "react";

interface ShipProps {
  ship: {
    id: string;
    name: string;
    roles: string[];
  };
  addToFavourite: () => {}
}

export default function Ship({ ship, addToFavourite }: ShipProps) {
  const [isFavourite, setIsFavourite] = useState(false)

  function onAddFavourite() {
    addToFavourite(ship)
    setIsFavourite(true)
  }

  return (
    <div className="ship-info">
      <div className="ship">
        <div>
          <strong className="role">{ship.roles}</strong>
          <button onClick={onAddFavourite} >
            {isFavourite ? "liked" : "like"}
            </button>
        </div>

        <span>{ship.name}</span>
      </div>
    </div>
  );
}
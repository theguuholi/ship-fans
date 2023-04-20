import "@testing-library/jest-dom";

import { render, screen, fireEvent } from "@testing-library/react";
import Ship from "../../../ShipFans/Ship";

describe("Ship", () => {
  const ship = {
    id: "5ea6ed2d080df4000697c903",
    name: "American Spirit",
    roles: ["Support Ship"],
    type: "Cargo",
    home_port: "Port of Los Angeles",
  };

  it("given a ship object, when load the component, then render a ship correctly", () => {
    render(<Ship ship={ship} />);

    expect(screen.getByText("Support Ship")).toBeInTheDocument();
    expect(screen.getByText("like")).toBeInTheDocument();
    expect(screen.getByText("American Spirit")).toBeInTheDocument();
  });
});

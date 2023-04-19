import '@testing-library/jest-dom';

import { cleanup, render, screen } from "@testing-library/react";
import { ShipFans } from '../../ShipFans';
import { createMockEnvironment } from 'relay-test-utils';
import { Suspense  } from 'react';


describe("ShipFans", () => {
  let environment = createMockEnvironment();


  function renderWithEnvironment(node: React.Node): React.Node {
    return (
      <RelayEnvironmentProvider environment={environment}>
        <Suspense fallback={null}>{node}</Suspense>
      </RelayEnvironmentProvider>,
    );
 }

  beforeEach(() => {
    cleanup();
   });
  
   
  it("given a list of ships, when load the page show the elements on the screen", () => {
    render(<ShipFans />);

    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});

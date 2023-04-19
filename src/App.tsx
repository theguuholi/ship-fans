import "./App.css";
import { RelayEnvironmentProvider, Environment } from "react-relay/hooks";
import relayEnvironment from "./relay/relayEnvironment";
import { ShipFans } from "./ShipFans";

function App() {
  return (
    <RelayEnvironmentProvider
      environment={relayEnvironment as unknown as Environment}
    >
      <header className="menu">
        <h1>ShipFans</h1>
        <div className="menu-pages">
          <h2>Ship count:</h2>
          <div>
            <span className="page">5</span>
            <span className="page">20</span>
            <span className="page">50</span>
          </div>
        </div>
      </header>
      <ShipFans />
    </RelayEnvironmentProvider>
  );
}

export default App;

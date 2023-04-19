import "./App.css";
import { RelayEnvironmentProvider, Environment } from "react-relay/hooks";
import relayEnvironment from "./relay/relayEnvironment";
import { ShipFans } from "./ShipFans";

function App() {
  return (
    <RelayEnvironmentProvider
      environment={relayEnvironment as unknown as Environment}
    >
      <ShipFans />
    </RelayEnvironmentProvider>
  );
}

export default App;

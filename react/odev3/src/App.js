import "./App.css";
import { LocationProvider } from "./context/LocationContext";
import Form from "./components/Form";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <LocationProvider>
        <Form />
        <Weather />
      </LocationProvider>
    </div>
  );
}

export default App;

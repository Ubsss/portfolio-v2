import { useState, Fragment } from "react";
import { Navigation, NavigationOptions } from "./components/navigation";
import "./app.css";

function App() {
  const [currentView, setCurrentView] = useState("home");

  return (
    <Fragment>
      <div className="container app">
        <div className="row h-100">
          <div className="col-4 d-none d-lg-block">
            <NavigationOptions />
          </div>
          <div className="col-12 col-lg-8">2 of 3 (wider)</div>
        </div>
      </div>
      <Navigation />
    </Fragment>
  );
}

export default App;

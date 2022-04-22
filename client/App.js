import React from "react";

import Navbar from "./components/Navbar";
import Routes from "./Routes";
import { Container } from "@material-ui/core";

const App = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Routes />
      </Container>
    </div>
  );
};

export default App;

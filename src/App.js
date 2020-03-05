import React from "react";
import "./App.css";
import FRM_APP from "./components/FRM_APP";
import { theme } from "./style/theme";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import "typeface-roboto";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div className="App">
        <FRM_APP />
      </div>
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NavLinks from "./Components/NavLinks";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<Footer />, document.getElementById("footer"));
ReactDOM.render(<NavLinks />, document.getElementById("navlinks"));



import React from "react";
import ReactDOM from "react-dom";

const Sandbox = () => <div>Hello</div>;

console.log(document.getElementById("app_root"), ReactDOM);
ReactDOM.render(<Sandbox />, document.getElementById("app_root"));

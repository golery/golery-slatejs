import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

console.log(document.getElementById("app_root"), ReactDOM);

function render() {
    ReactDOM.render(<App/>, document.getElementById("app_root"));
}

render();


/**
 * Re-render for hot module replacement in development.
 */

if (module.hot) {
    console.log("Accept App");
    // module.hot.accept('./App', () => console.log('Reload'))
    module.hot.accept();
}
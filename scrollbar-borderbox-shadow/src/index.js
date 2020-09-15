import React from "react"
import ReactDOM from "react-dom"

function renderApp() {
    const Applicatin = require("./js/Application").default
    ReactDOM.render(<Applicatin />, document.getElementById("app"))
}

renderApp()

if(module.hot) {
    module.hot.accept(renderApp)
}
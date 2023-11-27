import React from "react";

export default class TrafficLight extends React.Component {
    constructor(props) {
        super(props);
        // Initialize the state to keep track of the clicked light
        this.state = {
            clickedlight: null,
        };
    }

    render() {
        return (
            <div>
                {/* Traffic light structure */}
                <div id="trafficTop"></div>
                <div id="container">
                    {/* Yellow light */}
                    <div
                        className={`yellow light ${this.state.clickedlight === "yellow" ? "selected" : ""
                            }`}
                        onClick={() => this.setState({ clickedlight: "yellow" })}
                    ></div>

                    {/* Green light */}
                    <div
                        className={`green light ${this.state.clickedlight === "green" ? "selected" : ""
                            }`}
                        onClick={() => this.setState({ clickedlight: "green" })}
                    ></div>

                    {/* Red light */}
                    <div
                        className={`red light ${this.state.clickedlight === "red" ? "selected" : ""
                            }`}
                        onClick={() => this.setState({ clickedlight: "red" })}
                    ></div>
                </div>
            </div>
        );
    }
}

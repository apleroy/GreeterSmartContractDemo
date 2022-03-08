import React from "react";

class Environment extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div id="container">
          <p>Environment: {process.env.REACT_APP_API_END_POINT}.</p>
          <p>Connected to Ethereum Network: {process.env.REACT_APP_ETHEREUM_NETWORK}.</p>
        </div>
      );
    }
};

export default Environment;
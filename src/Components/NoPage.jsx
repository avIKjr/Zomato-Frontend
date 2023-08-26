import React from "react";
import { withRouter } from "react-router-dom";
class NoPage extends React.Component {
  render() {
    return (
      <div>
        <h1>404</h1>
      </div>
    );
  }
}
export default withRouter(NoPage);

import React from "react";
import { withAlert } from "react-alert";

const Alert = ({ alert }) => (
  <button
    onClick={() => {
      alert.show("Oh look, an alert!");
    }}
  >
    Show Alert
  </button>
);

export default withAlert()(Alert);

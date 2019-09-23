import React, { useState } from "react";
import { Text, Alert } from "@kiwicom/orbit-components";

const SuccessAlert = () => {
  const [shown, setShown] = useState(true);
  return (
    shown && (
      <Alert
        type="success"
        icon
        title="Congratualitions, you made it!"
        closable
        onClose={() => {
          setShown(false);
        }}
      >
        <Text>
          Now you can play with{" "}
          <Text element="span" weight="bold">
            orbit-components
          </Text>
          .
        </Text>
      </Alert>
    )
  );
};

export default SuccessAlert;

import React from "react";
import { Form } from "react-bootstrap";
import ReactInputMask from "react-input-mask";

export default function MaskedFormControl({ mask, ...props }) {
  return <Form.Control {...props} as={ReactInputMask} mask={mask} />;
}

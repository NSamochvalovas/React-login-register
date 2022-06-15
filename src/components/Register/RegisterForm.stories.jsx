import React from "react";
import RegisterForm from "./RegisterForm";

export default {
  title: "Wiew/RegisterForm",
  component: RegisterForm,
};

export const Primary = () => <RegisterForm handleSubmit={(values) => console.log(values)}/>;
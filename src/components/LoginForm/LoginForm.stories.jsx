import React from "react";
import LoginForm from "./LoginForm";

export default {
  title: "Wiew/LoginForm",
  component: LoginForm,
};

export const Primary = () => <LoginForm handleSubmit={(values) => console.log(values)}/>;
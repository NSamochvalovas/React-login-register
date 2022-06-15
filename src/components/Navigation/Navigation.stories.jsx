import React from "react";
import Navigation from "./Navigation";
import { withRouter } from 'storybook-addon-react-router-v6'

export default {
  title: "Components/Navigation",
  component: Navigation,
  decorators: [withRouter],
};

const links = [{url: "/", title: "Login"}, {url: "/", title: "Register"}]

export const Primary = () => <Navigation links={links}/>;

import React from "react";
import Profile from "./Profile";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="about">
        <Profile />
      </div>
    );
  }
}

export default About;

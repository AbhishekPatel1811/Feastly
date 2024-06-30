import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/AbhishekPatel1811");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    return (
      <>
      <div>
        <h1>Profile class component</h1>
        <img className="info-img" src={this.state.userInfo.avatar_url} />
        <h1>Name: {this.state.userInfo.name}</h1>
        <h3>Location: {this.state.userInfo.location}</h3>
        </div>
      </>
    );
  }
}

export default Profile;

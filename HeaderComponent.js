import React from "react";
import { icon } from "./App";

/* const heading1 = React.createElement(
  "h1",
  { id: "heading1", key: "h1" },
  "Heading1 from parcel"
);

//React.createElement gives us an object => converted into HTML and puts it up on (DOM)
// console.log(heading1);

const heading2 = React.createElement(
  "h2",
  { id: "heading2", key: "h2" },
  "Heading2"
);

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]); */
//JSX
/* const HeaderComponent = () => {
  return (
    <div>
      {heading}
      <Title />
      Other way is {Title()}
      <h2>Namaste React functional component</h2>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

const heading = (
  <h1 id="title" key="h1">
    Namaste React!
  </h1>
);

const Title = () => (
  <h1 id="title" key="h1">
    Namaste React 1
  </h1>
); */
// const header = React.createElement(
//   "div",
//   { className: "title", key: "title" },
//   [
//     React.createElement("h1", { key: "h1" }, "Heading1"),
//     React.createElement("h2", { key: "h2" }, "Heading2"),
//     React.createElement("h3", { key: "h3" }, "Heading3"),
//   ]
// );
export const HeaderComponent = () => (
  <div className="title" key="title">
    <h1 style={{ backgroundColor: "blue" }} key="h1">
      Heading1
    </h1>
    {icon()}
    <h2 style={{ backgroundColor: "green" }} key="h2">
      Heading2
    </h2>
    <h3 style={{ backgroundColor: "red" }} key="h3">
      Heading3
    </h3>
  </div>
);

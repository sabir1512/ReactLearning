import React from "react";
import { createRoot } from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, "This is an h1 tag"),
    React.createElement("h2", {}, "This is an h2 tag element"),
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", {}, "This is an h1 tag"),
    React.createElement("h2", {}, "This is an h2 tag"),
  ),
);

const root = createRoot(document.getElementById("root"));
root.render(parent);

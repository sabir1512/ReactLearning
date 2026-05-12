// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello from React Js!",
// );
// console.log(heading); //Object

//nested div
{
  /* <div id="parent">
  <div id="child">
    <h1>This is a h1 tag</h1>
  </div>
</div>; */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, "This is an h1 tag"),
    React.createElement("h2", {}, "This is an h2 tag"),
  ),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is an h1 tag"),
    React.createElement("h2", {}, "This is an h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  parent,
); /*render function converts  JS Object(heading) to js code that can browser understand and show it into div root
or  render() displays React elements inside the root element by converting virtual DOM into real DOM.`
*/

const heading = React.createElement("h1", {}, "Saravanan niew Project");
const parent = React.createElement(
    "div",
    { id: "parent" },
    [    React.createElement(
        "div",
        { id: "children" },
        [React.createElement("h1", { className: "title" }, "H1 Tags use div structure..."),
        React.createElement("h2", { className: "title" }, "H2 Tags use div structure...")]
    ),
    React.createElement(
        "div",
        { id: "children1" },
        [React.createElement("h1", { className: "title" }, "Child 2 H1 Tags use div structure..."),
        React.createElement("h2", { className: "title" }, "Child 2  H2 Tags use div structure...")]
    )]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)
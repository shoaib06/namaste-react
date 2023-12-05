// const heading = React.createElement(
//     "h1", 
//     {id:"heading", title:'This is heading'}, 
//     "Hello world created by React"
//     );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

const heading = React.createElement(
    "div", {
        id: "parent", key: "parent"
    },
    React.createElement(
        "div", {
            id: "child", key: "child"
        },
        [
            React.createElement("h1", {},"I am a h1 tag"),
            React.createElement("h2", {},"I am a h2 tag"),
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
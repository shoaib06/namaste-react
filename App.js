import React from "react";
import ReactDOM  from "react-dom/client";

// const heading = React.createElement(
//     "div", {
//         id: "parent", key: "parent"
//     },
//     React.createElement(
//         "div", {
//             id: "child", key: "child"
//         },
//         [
//             React.createElement("h1", {},"I am a h1 tag"),
//             React.createElement("h2", {},"I am a h2 tag"),
//         ]
//     )
// );


const Title = () => <h1 className="head" tabIndex="5">Namaste React with JSX</h1>;

const HeadingComponent =()=>(
    <>
        <Title />
        <h1 className="heading"> This is header</h1>
    </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);
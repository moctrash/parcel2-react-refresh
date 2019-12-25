import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ChildComponent } from "./ChildComponent";

const App = () => {
    const [ count, setCount ] = useState(0);

    return (
        <div>
            <h1>Hello Fast Refresh!</h1>
            <p>Count {count}. It preserves state!</p>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
            <ChildComponent />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));

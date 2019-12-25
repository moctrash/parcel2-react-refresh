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


// interface IAppState {
//     content: string
// }

// class App extends React.Component<{}, IAppState> {
//     state = {
//         content: "asdf"
//     }

//     updateContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//         this.setState({content: e.target.value})
//     }
//     render() {
//         return <div><div>Hello from React!</div><MyComponent /><div><textarea value={this.state.content} onChange={this.updateContent} /></div></div>
//     }
// }

ReactDOM.render(<App />, document.getElementById("root"));

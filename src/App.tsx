import React from "react"
import "./styles/main.scss"

const Welcome = () => {
    return <h1>Hello world!</h1>
}

type Counter = {
    count: number
}

class App extends React.Component {
    state: Counter = {
        count: 1,
    }
    render(): React.ReactElement {
        return (
            <main>
                <Welcome />
                <h2>Count: {this.state.count} </h2>
                <button
                    onClick={() =>
                        this.setState((state: Counter) => ({
                            count: state.count + 1,
                        }))
                    }
                />
                <button
                    onClick={() =>
                        this.setState((state: Counter) => ({
                            count: state.count - 1,
                        }))
                    }
                />
            </main>
        )
    }
}

export default App

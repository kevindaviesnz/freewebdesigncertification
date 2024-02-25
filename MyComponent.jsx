class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "My component",
            visibility: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.toggleVisibility = this.toggleVisibility.bind(this)
    }
    
    handleClick() {
        // Change code below this line
        this.setState({
        name: "my component"
        })
        // Change code above this line
    }
    toggleVisibility() {
    this.setState((state, props) => ({
      visibility: false === state.visibility
    }));
  }
    render() {
        const name = this.state.name
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <h1>My First React Component {this.state.name} {name}</h1>
            </div>
        )

    }
}

ReactDOM.render(<MyComponent/>, document.getElementById("challenge-node"))
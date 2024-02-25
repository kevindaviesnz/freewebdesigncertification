class MyComponent extends React.Component {
  constructor(props) {
      super(props);
          this.state = {
      message: ''
    };
          this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
     document.addEventListener("keyPress", this.handleKeyPress)
    }, 2500);
  }
  componentWillMount() {
      // Change code below this line
    <h1>Active Users: {this.state.activeUsers}</h1>
    console.log("Yes, the component will mount!")
    // Change code above this line
  }
      handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
    render() {
      
    return (<h1>{this.state.message}</h1>
)
  }
};
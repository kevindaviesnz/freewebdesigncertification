const styles={
  color: "purple",
  fontSize: 40,
  border: "2px solid purple"
}
class Colorful extends React.Component {
  render() {
    return (
      <div>
      <div style={{ color: "red", fontSize: 72 }}>Big Red</div>
        <div style={styles}>Style Me!</div>
        </div>
    );
  }
};
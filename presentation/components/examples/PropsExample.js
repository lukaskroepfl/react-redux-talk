class HelloWorld extends React.Component {
  render() {
    return <div>Hello {this.props.name}!</div>;
  }
}

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired
};

render(<HelloWorld name="Mark" />);

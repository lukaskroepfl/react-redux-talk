class ParentComponent extends Component {
  render() {
    // 1) Extract values from props and state
    const {someBoolean, someList} = this.props;
    const {a, b} = this.state;

    // 2) Render any dependent items into temporary variables,
    //    such as conditional components or lists
    const conditionalComponent = someBoolean ? <SomeComponent /> : null;
    const listItems = someList.map(item => <ListItem item={item} />);

    return (
      <div>
        <div>
          A: {a}, B: {b}
        </div>
        {conditionalComponent}
        {listItems}
      </div>
    );
  }
}

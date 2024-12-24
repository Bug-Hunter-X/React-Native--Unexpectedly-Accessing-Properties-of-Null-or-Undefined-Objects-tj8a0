```javascript
// Solution Code
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
  }

  componentDidMount() {
    fetch('https://api.example.com/user')
      .then(response => response.json())
      .then(data => this.setState({ userData: data }));
  }

  render() {
    return (
      <View>
        {/* Optional chaining and nullish coalescing */}
        <Text>{this.state.userData?.name ?? 'User Name Not Available'}</Text>
      </View>
    );
  }
}
```
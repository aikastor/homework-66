import React, {Component} from 'react';
import errorHandler from "./hoc/errorHandler/errorHandler";
import axiosRequest from "./axiosApi";

class App extends Component {
  state = {
    data : null,
  };
  async componentDidMount() {
    const response = await axiosRequest.get('/random');
    console.log(response.data);
    this.setState({data: response.data.value})
  }

  render() {
    return (
        <div>
          {this.state.data}
        </div>
    );
  }
}

export default errorHandler(App,axiosRequest);
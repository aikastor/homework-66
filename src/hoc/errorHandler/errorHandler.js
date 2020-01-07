import React, {Component, Fragment} from 'react';
import Spinner from "../../components/Spinner/Spinner";
import axios from 'axios';


const  errorHandler = (WrappedComponent, axios) => {
  return  class  extends Component{
    constructor(props) {
      super(props);

      this.state = {
        error: null,
        interceptorId: null,
        loading: false,
      };

      axios.interceptors.request.use(req=> {
        this.setState({loading: true});
        return req;
      });

      axios.interceptors.response.use(res => {
        this.setState({loading: false});
        return res;
      }, error => {
        this.setState({error:error})
      })
    }

    componentWillUnmount() {
      axios.interceptors.eject(this.state.interceptorId)
    }

    render () {
      return (
          <Fragment>
            {
              this.state.loading &&  <Spinner/>
            }
            <WrappedComponent {...this.props}/>
          </Fragment>
      )
    }
  }

};

export default errorHandler;
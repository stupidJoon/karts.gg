import Router from 'next/router';
import { TextField, Button } from '@material-ui/core';
import Base from '../components/Base.js';


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: null
    };
  }

  render() {
    return (
      <Base>
        <TextField variant='outlined' label='label' onChange={(e) => { this.setState({nickname: e.target.value}) }} />
        <Button variant='contained' onClick={() => { location.href=`/user?nickname=${this.state.nickname}` }}>Button</Button>
      </Base>
    )
  }
}

export default Index

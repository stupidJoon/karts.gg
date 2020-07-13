import { TextField, Button } from '@material-ui/core';
import Swiper from 'swiper';
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
        <div className='container' style={{ flex: '15 1 0', display: 'flex', flexDirection: 'column' }}>
          <div className='swiper-container' style={{ flex: '1 1 0' }}>asdf</div>
          <div style={{ flex: '1 1 0' }}>
            <TextField variant='outlined' label='label' onChange={(e) => { this.setState({nickname: e.target.value}) }} />
            <Button variant='contained' onClick={() => { location.href=`/user?nickname=${this.state.nickname}` }}>Button</Button>
          </div>
        </div>
      </Base>
    )
  }
}

export default Index

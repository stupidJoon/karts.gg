import { TextField, Button } from '@material-ui/core';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import Base from '../components/Base.js';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: null
    };
  }

  componentDidMount() {
    SwiperCore.use([Navigation, Pagination]);
  }

  render() {
    return (
      <Base>
        <div className='container' style={{ flex: '15 1 0', display: 'flex', flexDirection: 'column' }}>
          <Swiper style={{ flex: '5 1 0', width: '100vw' }} pagination={{ clickable: true }} navigation loop>
            <SwiperSlide><img src='../1.png' style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: '50% 50%' }} /></SwiperSlide>
            <SwiperSlide><img src='../2.jpg' style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: '50% 50%' }} /></SwiperSlide>
            <SwiperSlide><img src='../3.png' style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: '50% 50%' }} /></SwiperSlide>
          </Swiper>
          <div style={{ flex: '1 1 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <TextField variant='outlined' label='label' onChange={(e) => { this.setState({ nickname: e.target.value }) }} />
            <Button variant='contained' onClick={() => { location.href = `/user?nickname=${this.state.nickname}` }}>Button</Button>
          </div>
          <div style={{ flex: '3 1 0' }}></div>
        </div>
      </Base>
    )
  }
}

export default Index

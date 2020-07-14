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
          <Swiper style={{ flex: '10 1 0', width: '100vw' }} pagination={{ clickable: true }} navigation loop>
            <SwiperSlide><img src='../1.png' style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: '50% 0%' }} /></SwiperSlide>
            <SwiperSlide><img src='../2.jpg' style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: '50% 70%' }} /></SwiperSlide>
            <SwiperSlide><img src='../4.jpg' style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: '50% 0%' }} /></SwiperSlide>
          </Swiper>
          <div style={{ flex: '2 1 0' }} />
          <div style={{ flex: '1 1 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <TextField variant='outlined' label='닉네임' onChange={(e) => { this.setState({ nickname: e.target.value }) }} style={{ marginRight: '2%' }} />
            <Button variant='contained' onClick={() => { location.href = `/user?nickname=${this.state.nickname}` }} style={{ marginLeft: '2%' }}>전적 검색</Button>
          </div>
          <div style={{ flex: '3 1 0' }}></div>
        </div>
      </Base>
    )
  }
}

export default Index

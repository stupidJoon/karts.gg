import { TextField, Button } from '@material-ui/core';
import Swiper, { Navigation, Pagination } from 'swiper';
import Base from '../components/Base.js';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: null
    };
  }

  componentDidMount() {
    Swiper.use([Navigation, Pagination]);
    var myswiper = new Swiper('.swiper-container', {
      navigation: { prevEl: 'swiper-button-next', nextEl: 'swiper-button-prev' },
      pagination: { el: '.swiper-pagination', type: 'bullets' }
    });
  }

  render() {
    return (
      <Base>
        <div className='container' style={{ flex: '15 1 0', display: 'flex', flexDirection: 'column' }}>
          <div className='swiper-container' style={{ flex: '5 1 0', width: '100vw' }}>
            <div className='swipe-wrapper'>
              <div className="swiper-slide">Slide 1</div>
              <div className="swiper-slide">Slide 2</div>
              <div className="swiper-slide">Slide 3</div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          <div style={{ flex: '1 1 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <TextField variant='outlined' label='label' onChange={(e) => { this.setState({nickname: e.target.value}) }} />
            <Button variant='contained' onClick={() => { location.href=`/user?nickname=${this.state.nickname}` }}>Button</Button>
          </div>
          <div style={{ flex: '3 1 0' }}></div>
        </div>
      </Base>
    )
  }
}

export default Index

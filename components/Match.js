import { Paper } from '@material-ui/core';
import meta from '../public/meta.json';

class Match extends React.Component {
  render() {
    let { match } = this.props;
    let rank = match.player.matchRank;
    let track = meta.tracks.find(({ id }) => { return match.trackId == id });
    track = (track == null) ? '알 수 없는 트랙' : track.name;
    let kart = meta.karts.find(({ id }) => { return match.player.kart == id });
    kart = (kart == null) ? '알 수 없는 카트' : kart.name;
    let time = match.player.matchTime / 1000;
    if (time == 0) {
      return (false);
    }
    return (
      <Paper elevation={10} style={{ margin: '5% 20%', padding: '2%', borderRadius: '10px' }}>
        <div style = {{ 'width' : '70%', 'display' : 'inline-block' }}>
          <h1 style={{ display: 'inline-block' }}>{rank}등</h1>
          <div style={{display: 'flex'}}>
            <p id="map" name="map" style={{flex: '0.5 0.5 0'}}>{track}</p>
            <p id="kartName" name="kartName" style={{flex: '0.5 0.5 0', textAlign: 'right'}}>{kart}</p>
            <p id="time" name="time" style={{flex: '0.5 0.5 0', textAlign: 'right'}}>{parseInt(time / 60)}'{parseInt(time % 60)}</p>
          </div>
        </div>
        <img src={`../track/${match.trackId}.png`} onError={(e) => { e.target.style.display = "none" }} style={{float: 'right', width: '20%'}} />
      </Paper>
    )
  }
}

export default Match
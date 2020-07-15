import { Paper, Accordion, AccordionSummary, AccordionDetails, } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import meta from '../public/meta.json';

class Match extends React.Component {
  render() {
    let { match } = this.props;
    let rank = match.player.matchRank;
    let playerCount = match.playerCount;
    let track = meta.tracks.find(({ id }) => { return match.trackId == id });
    track = (track == null) ? '알 수 없는 트랙' : track.name;
    let kart = meta.karts.find(({ id }) => { return match.player.kart == id });
    kart = (kart == null) ? '알 수 없는 카트' : kart.name;
    let time = match.player.matchTime / 1000;
    // if (time == 0) {
    //   return (false);
    // }
    return (
      <Accordion elevation={10} style={{ margin: '3% 20%' }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <div style={{ display: 'flex', width: '100%', height: '100%' }}>
            { (rank == 99) ? (<div style={{ flex: '1 1 0', backgroundColor: '#ED3537' }}></div>) : (<div style={{ flex: '1 1 0', backgroundColor: '#1494E9' }}></div>) }
            <div style={{ flex: '2 1 0' }}></div>
            { (rank == 99) ? (<p style={{ flex: '10 1 0', textAlign: 'left' }}><span style={{ fontSize: '3rem' }}>리타</span>/{playerCount}등</p>) : (<p style={{ flex: '10 1 0', textAlign: 'left' }}><span style={{ fontSize: '3rem' }}>{rank}</span>/{playerCount}등</p>) }
            <p style={{ display: 'flex', flex: '15 1 0', textAlign: 'right', alignItems: 'center' }}>{track}</p>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p id="map" name="map" style={{ flex: '0.5 0.5 0' }}>{track}</p>
          <p id="kartName" name="kartName" style={{ flex: '0.5 0.5 0', textAlign: 'right' }}>{kart}</p>
          <p id="time" name="time" style={{ flex: '0.5 0.5 0', textAlign: 'right' }}>{parseInt(time / 60)}'{parseInt(time % 60)}</p>
          <img src={`../track/${match.trackId}.png`} onError={(e) => { e.target.style.display = "none" }} style={{ float: 'right', width: '20%' }} />
        </AccordionDetails>
      </Accordion>
    )
  }
}

export default Match
import { Accordion, AccordionSummary, AccordionDetails, } from '@material-ui/core';
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
    if (rank == '') { rank = 99 };
    return (
      <Accordion elevation={10} style={{ margin: '1% 20%' }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <div style={{ display: 'flex', width: '100%', height: '100%' }}>
            {this.getColorByRank(rank)}
            <div style={{ flex: '2 1 0' }}></div>
            {(rank == 99) ? (<p style={{ flex: '10 1 0', textAlign: 'left' }}><span style={{ fontSize: '3rem' }}>리타</span>/{playerCount}등</p>) : (<p style={{ flex: '10 1 0', textAlign: 'left' }}><span style={{ fontSize: '3rem' }}>{rank}</span>/{playerCount}등</p>)}
            <p style={{ display: 'flex', flex: '15 1 0', alignItems: 'center', justifyContent: 'center' }}>{track}</p>
          </div>
        </AccordionSummary>
        <AccordionDetails style={{ display: 'flex', width: '100%', height: '100%' }}>
          {/* <p id="map" name="map" style={{ flex: '0.5 0.5 0' }}>{track}</p>
          <p id="kartName" name="kartName" style={{ flex: '0.5 0.5 0', textAlign: 'right' }}>{kart}</p>
          <p id="time" name="time" style={{ flex: '0.5 0.5 0', textAlign: 'right' }}>{parseInt(time / 60)}'{parseInt(time % 60)}</p>
          <img src={`../track/${match.trackId}.png`} onError={(e) => { e.target.style.display = "none" }} style={{ float: 'right', width: '20%' }} /> */}
          <div style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={`../track/${match.trackId}.png`} onError={(e) => { e.target.style.display = "none" }} style={{ width: '50%' }} />
            <p>{track}</p>
          </div>
          <div style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={`../kart/${match.player.kart}.png`} style={{ width: '50%' }} />
            <p>{kart}</p>
          </div>
          <div style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            {(rank == 99) ? <p style={{ fontSize: '2rem' }}>리타이어</p> : <p style={{ fontSize: '2rem' }}>{parseInt(time / 60)}'{parseInt(time % 60)}</p>}
          </div>
        </AccordionDetails>
      </Accordion>
    )
  }

  getColorByRank(rank) {
    if (rank == 1) {
      return (<div style={{ flex: '1 1 0', backgroundColor: '#448aff' }}></div>);
    }
    else if (rank == 99) {
      return (<div style={{ flex: '1 1 0', backgroundColor: '#ff5252' }}></div>);
    }
    else {
      return (<div style={{ flex: '1 1 0', backgroundColor: '#9e9e9e' }}></div>);
    }
  }
}

export default Match
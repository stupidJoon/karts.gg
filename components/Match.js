import meta from '../public/meta.json'

class Match extends React.Component {
    render() {
        let { match } = this.props;
        let rank = match.player.matchRank;
        let track = meta.tracks.find(({ id }) => { return match.trackId == id });
        track = (track == null) ? '알 수 없는 트랙' : track.name;
        let kart = meta.karts.find(({ id }) => { return match.player.kart == id });
        kart = (kart == null) ? '알 수 없는 카트' : kart.name;
        let time = match.player.matchTime / 1000;
        return (
            <>
                <div id="mapInfoBox">
                    <p id="rank" name="rank">{rank}등</p>
                    <p id="map" name="map">{track}</p>
                    <p id="kartName" name="kartName">{kart}</p>
                    <p id="time" name="time">{parseInt(time / 60)}'{parseInt(time % 60)}</p>
                </div>
                <style jsx>{`
                      #nickname {
                        display: inline-block;
                        display: table-cell; vertical-align: middle;
                        font-size : 30px;
                        font-weight : bold;
                        margin : 0 auto;
                        top: 0; 
                        bottom:0; 
                        margin-top:auto; 
                        margin-bottom:auto;
                        padding-left: 5%;
                      }
            
                      #mapInfoBox {
                        display:table;
                        border : 2px solid black;
                        height:10vw;
                        width:50%;
                        margin : 4vw auto auto;
                        
                      }
            
                      #rank, #map, #kartName, #time {
                        display: table-cell; vertical-align: middle;
            
                        font-size:2em;
                      }
                      #rank {
                        padding-left:2vw;
                      }
                `}</style>
            </>
        )
    }
}

export default Match
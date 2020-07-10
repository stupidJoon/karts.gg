import Base from '../components/Base.js'
import Match from '../components/Match.js'
import router from 'next/router';

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nickname: null,
      uuid: null,
      matches: []
    }
  }

  async componentDidMount() {
    await (new Promise((resolve) => { this.setState({ nickname: this.getParam('nickname') }, resolve) }));
    let uuid = await fetch(`https://api.nexon.co.kr/kart/v1.0/users/nickname/${this.state.nickname}`, { headers: { 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMzE5NDIzNjMxIiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExMzkzIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjIwMDAwOjEwIiwibmJmIjoxNTkwNzEzMjY3LCJleHAiOjE2NTM3ODUyNjcsImlhdCI6MTU5MDcxMzI2N30.yaNbESgBdBVW0iqqyEUju589P1iZSxMhIsN7pMa_fsg' } });
    uuid = (await uuid.json()).accessId;
    console.log(uuid)
    let matchList = await fetch(`https://api.nexon.co.kr/kart/v1.0/users/${uuid}/matches?limit=200`, { headers: { 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMzE5NDIzNjMxIiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExMzkzIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjIwMDAwOjEwIiwibmJmIjoxNTkwNzEzMjY3LCJleHAiOjE2NTM3ODUyNjcsImlhdCI6MTU5MDcxMzI2N30.yaNbESgBdBVW0iqqyEUju589P1iZSxMhIsN7pMa_fsg' } });
    matchList = await matchList.json();
    console.log(matchList)
    this.setState({
      uuid: uuid,
      matches: matchList.matches.reduce((acc, val) => { return acc.concat(val.matches) }, [])
    });
    console.log(this.state.matches)
  }

  render() {
    let { nickname, matches } = this.state;
    let character = matches[0]?.character;
    console.log(matches);
    return (
      <Base>
        <div style={{ margin: '5%', marginBottom: '20%' }}>
          {(character != null) ? (<img src={`../character/${matches[0].character}.png`} style={{ float: 'right', width: '30%' }} />) : (<></>)}
          <h1>{nickname}</h1>
        </div>
        {matches.map((match, index) => {
          return (<Match key={index} match={match} style={{ minWidth: '50%' }}></Match>)
        })}
      </Base>
    )
  }

  getParam(sname) {
    var params = location.search.substr(location.search.indexOf("?") + 1);
    var sval = "";
    params = params.split("&");
    for (var i = 0; i < params.length; i++) {
      let temp = params[i].split("=");
      if ([temp[0]] == sname) { sval = temp[1]; }
    }
    return decodeURI(sval);
  }
}

export default User
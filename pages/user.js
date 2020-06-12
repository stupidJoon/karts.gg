import { Card } from 'antd';

import Base from '../components/Base.js'
import Match from '../components/Match.js'

class User extends React.Component {
  static getInitialProps({query}) {
    return {query}
  }

  constructor(props) {
    super(props)
    this.state = {
      nickname: props.query.nickname,
      uuid: null,
      matches: []
    }
  }

  async componentDidMount() {
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
  }

  render() {
    let { nickname, matches } = this.state;
    let character = matches[0]?.character;
    console.log(matches);
    console.log(this.props.query)
    return (
      <Base>
        <Card title="유저 정보" style={{ margin: '5%' }}>
          {(character != null) ? (<img src={`../character/${matches[0].character}.png`}/>) : (<></>)}
          <h3>{nickname}</h3>
        </Card>
      </Base>
    )

    /* return (
      <Base>
        <Descriptions id='userInfo' title='유저 정보'>
          <Descriptions.Item label='닉네임'>{nickname}</Descriptions.Item>
        </Descriptions>
        <div id='userInfoBox1'>
          <p id='nickname' name="nickname">{nickname}</p>
        </div>
        {matches.map((match, index) => {
          return (
            <Match key={index} match={match}></Match>
          )
        })}
        <style jsx>{`
          #userInfo {
            padding: 5%;
          }
          #userInfoBox1 {
            display:table;
            border : 2px solid black;
            height:10vw;
            width:90%;
            margin: 5vw auto auto 7vw;
          }
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
        `}</style>
      </Base>
    ) */
  }
}

export default User
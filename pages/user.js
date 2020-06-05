import { useRouter } from 'next/router'

import Base from '../components/Base.js'
import Match from '../components/Match.js'
import { Divider } from 'antd'

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
    console.log(matches);
    console.log(this.props.query)
    return (
      <Base>
        <div id='userInfoBox'>
          <p id='nickname' name="nickname">{nickname}</p>
        </div>
        {matches.map((match, index) => {
          return (
            <Match key={index} match={match}></Match>
          )
        })}
        <style jsx>{`
          #userInfoBox {
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
    )
  }
}

export default User

// ------------------------------------------------------------------------------------------------------ //

// import Head from 'next/head'

// export default function Home() {
//   return (
//     <div className="container">
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <h1 className="title">
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className="description">
//           Get started by editing <code>pages/index.js</code>
//         </p>

//         <div className="grid">
//           <a href="https://nextjs.org/docs" className="card">
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className="card">
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/zeit/next.js/tree/master/examples"
//             className="card"
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className="card"
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
//         </a>
//       </footer>

//       <style jsx>{`
//         .container {
//           min-height: 100vh;
//           padding: 0 0.5rem;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//         }

//         main {
//           padding: 5rem 0;
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//         }

//         footer {
//           width: 100%;
//           height: 100px;
//           border-top: 1px solid #eaeaea;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         footer img {
//           margin-left: 0.5rem;
//         }

//         footer a {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         a {
//           color: inherit;
//           text-decoration: none;
//         }

//         .title a {
//           color: #0070f3;
//           text-decoration: none;
//         }

//         .title a:hover,
//         .title a:focus,
//         .title a:active {
//           text-decoration: underline;
//         }

//         .title {
//           margin: 0;
//           line-height: 1.15;
//           font-size: 4rem;
//         }

//         .title,
//         .description {
//           text-align: center;
//         }

//         .description {
//           line-height: 1.5;
//           font-size: 1.5rem;
//         }

//         code {
//           background: #fafafa;
//           border-radius: 5px;
//           padding: 0.75rem;
//           font-size: 1.1rem;
//           font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
//             DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
//         }

//         .grid {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-wrap: wrap;

//           max-width: 800px;
//           margin-top: 3rem;
//         }

//         .card {
//           margin: 1rem;
//           flex-basis: 45%;
//           padding: 1.5rem;
//           text-align: left;
//           color: inherit;
//           text-decoration: none;
//           border: 1px solid #eaeaea;
//           border-radius: 10px;
//           transition: color 0.15s ease, border-color 0.15s ease;
//         }

//         .card:hover,
//         .card:focus,
//         .card:active {
//           color: #0070f3;
//           border-color: #0070f3;
//         }

//         .card h3 {
//           margin: 0 0 1rem 0;
//           font-size: 1.5rem;
//         }

//         .card p {
//           margin: 0;
//           font-size: 1.25rem;
//           line-height: 1.5;
//         }

//         .logo {
//           height: 1em;
//         }

//         @media (max-width: 600px) {
//           .grid {
//             width: 100%;
//             flex-direction: column;
//           }
//         }
//       `}</style>

//       <style jsx global>{`
//         html,
//         body {
//           padding: 0;
//           margin: 0;
//           font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
//             Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
//             sans-serif;
//         }

//         * {
//           box-sizing: border-box;
//         }
//       `}</style>
//     </div>
//   )
// }

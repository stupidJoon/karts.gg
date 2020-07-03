import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
// import { MenuIcon } from '@material-ui/icons'

class Base extends React.Component {
    static getInitialProps({ query }) {
        return { query }
    }

    render() {
        console.log(this.props.query)
        return (
            <>
                <AppBar position='sticky'>
                    <Toolbar>
                        <Typography variant='h5' color='inherit'>Karts.gg</Typography>
                    </Toolbar>
                </AppBar>
                {this.props.children}
            </>

            // <>
            //     <Layout className="layout" style={{ minHeight: '100vh' }}>
            //         <Header>
            //             <div className="logo" />
            //             <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            //                 <Menu.Item key="1">홈</Menu.Item>
            //                 <Menu.Item key="2">카트 분석</Menu.Item>
            //                 <Menu.Item key="3">통계</Menu.Item>
            //                 <Menu.Item key="4">랭킹</Menu.Item>
            //             </Menu>
            //         </Header>
            //         <Content style={{ margin: '5% 10%' }}>
            //             <div className="site-layout-content">
            //                 {this.props.children}
            //             </div>
            //         </Content>
            //         <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            //     </Layout>
            //     <style jsx>{`
            //         .site-layout-content {
            //             background: #fff;
            //             padding: 24px;
            //             min-height: 280px;
            //           }
            //           #components-layout-demo-top .logo {
            //             width: 120px;
            //             height: 31px;
            //             background: rgba(255, 255, 255, 0.2);
            //             margin: 16px 24px 16px 0;
            //             float: left;
            //           }
            //     `}</style>
            // </>

            // <div id='container'>
            //     <div id='logo_container'>
            //         <div id='logo'>kart.gg</div>
            //     </div>
            //     <div id='nav_container'>
            //         <ul id='nav'>
            //             <li >홈</li>
            //             <li>카트 분석</li>
            //             <li>통계</li>
            //             <li>랭킹</li>
            //         </ul>
            //     </div>
            //     <div id='childrenContainer'>
            //         <div style={{flex: '1 1 auto'}}></div>
            //         <div style={{flex: '3 3 auto', backgroundColor: 'grey'}}>{this.props.children}</div>
            //         <div style={{flex: '1 1 auto'}}></div>
            //     </div>
            //     <style jsx>{`
            //         #container {
            //             display: flex;
            //             flex-direction: column;
            //             width: 100vw;
            //             height: 100vh;
            //         }

            //         #childrenContainer {
            //             display: flex;
            //             flex-direction: row;
            //             height: 100%;
            //             width: 100%;
            //         }

            //         #logo_container {
            //             width: 100vw;  
            //             display: flex;
            //             background-color:rgb(12, 123, 245);
            //         }
            //         #logo {
            //             font-size:40px;
            //             color:white;
            //         }

            //         #nav_container {
            //             width: 100vw;  
            //             display: flex;
            //             background-color:rgb(25, 36, 195);
            //         }

            //         #nav {
            //             list-style:none;
            //             margin:0;
            //             padding:0;
            //         }
            //         li {
            //             color:white;
            //             font-size:30px;
            //             margin: 0 30px 0 0;
            //             padding: 0 0 0 0;
            //             border : 0;
            //             float: left;
            //         }
            //         #search {
            //             text-align: center;
            //         }
            //     `}</style>
            // </div>


            // <Layout className='layout'>
            //     <Header>
            //         <h1 className="logo">Karts.gg</h1>
            //         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            //             <Menu.Item key="1">nav 1</Menu.Item>
            //             <Menu.Item key="2">nav 2</Menu.Item>
            //             <Menu.Item key="3">nav 3</Menu.Item>
            //         </Menu>
            //     </Header>
            //     <Content style={{ padding: '0 50px' }}>
            //         <Breadcrumb style={{ margin: '16px 0' }}>
            //             <Breadcrumb.Item>Home</Breadcrumb.Item>
            //             <Breadcrumb.Item>List</Breadcrumb.Item>
            //             <Breadcrumb.Item>App</Breadcrumb.Item>
            //         </Breadcrumb>
            //         <div className="site-layout-content">Content</div>
            //     </Content>
            //     <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            // </Layout>
            // <>
            //     <div><p>Karts.gg</p></div>
            //     <Menu mode='horizontal'>
            //         <Menu.Item key='home'>홈</Menu.Item>
            //         <Menu.Item key='ranking'>랭킹</Menu.Item>
            //         <Menu.Item key='kartAnalyze'>카트 분석</Menu.Item>
            //         <Menu.Item key='statistics'>카트 통계</Menu.Item>
            //     </Menu>
            //     <div id='container'>{this.props.children}</div>
            //     <style jsx>{`
            //         #topbar {
            //             background-color: #85B3D1FF

            //         }
            //         #logo {
            //             color : white
            //         }
            //         #dropdownbar {
            //             background-color : #2460A7FF
            //         }
            //         #container {
            //             color: blue
            //         }
            //     `}</style>
            // </>
        )
    }
}

export default Base
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

class Base extends React.Component {
    render() {
        return (
            <>
                <div id='logo_container'>
                    <div id='logo'>kart.gg</div>
                </div>
                <div id='nav_container'>
                    <ul id='nav'>
                        <li >홈</li>
                        <li>카트 분석</li>
                        <li>통계</li>
                        <li>랭킹</li>
                    </ul>
                </div>
                {this.props.children}
                <style jsx>{`
                    #logo_container {
                        width: 100vw;  
                        display: flex;
                        background-color:rgb(12, 123, 245);
                    }
                    #logo {
                        font-size:40px;
                        color:white;
                    }
                   
                    #nav_container {
                        width: 100vw;  
                        display: flex;
                        background-color:rgb(25, 36, 195);
                    }

                    #nav {
                        list-style:none;
                        margin:0;
                        padding:0;
                    }
                    li {
                        color:white;
                        font-size:30px;
                        margin: 0 30px 0 0;
                        padding: 0 0 0 0;
                        border : 0;
                        float: left;
                    }
                    #search {
                        text-align: center;
                    }
                `}</style>
            </>
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
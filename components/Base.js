import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

class Base extends React.Component {
    render() {
        return (
            <>
                <div id='container'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <style jsx>{`
                    #container {
                        width: 100vw;
                        height: 100vh;
                        display: flex;
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
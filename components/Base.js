import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

class Base extends React.Component {
    componentDidMount() {
        document.body.style.margin = '0px';
        document.body.style.padding = '0px';
    }

    render() {
        return (
            <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
                <AppBar style={{ flex: '1 1 0', position: 'relative' }}>
                    <Toolbar>
                        <Typography variant="h6">
                            <a href='/'>Karts.gg</a>
                        </Typography>
                    </Toolbar>
                </AppBar>
                {this.props.children}
                <style jsx>{`
                    a {
                        color: #ffffff;
                        text-decoration: none;
                        outline: none;
                    }
                    a:hover, a:active {
                        text-decoration: none;
                        color: #ffffff;
                    }
                `}</style>
            </div>
        )
    }
}

export default Base
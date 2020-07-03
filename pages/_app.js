import App from 'next/app'

class RootApp extends App {
    componentDidMount() {
        document.body.style.margin = '0px';
        document.body.style.padding = '0px';
    }

    render() {
        const { Component, ...pageProps } = this.props;
        return (
            <>
                <Component {...pageProps} />
            </>
        )
    }
}

export default RootApp;
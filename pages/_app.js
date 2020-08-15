


global.console = {
    log: ()=>{return},
    error: ()=>{return},
    warn:()=>{return}
}

// This default export is required in a new `pages/_app.js` file.

// const Header = () => (<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
// );
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}
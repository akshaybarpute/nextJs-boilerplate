// import Header from '../components/Header';
import { Provider } from 'react-redux';
// import store from '../store/index';
import Head from  'next/head';
// import { initGA, logPageView } from '../others/Analytics';



// const title = 'freetests4u.com';



const Layout=(props)=>{
    return(
        <div>
            <Head>
                <title>{props.title}</title>
                <meta name='description' content={props.desc}/>
            </Head>
                {/* <Header /> */}
            {props.children}
            {/* </Provider> */} 
        </div>
    )
}

export default Layout;
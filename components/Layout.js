import Header from '../components/Header';
import { Provider } from 'react-redux';
import store from '../store/index';
import Head from  'next/head';
import {Component} from 'react';
import { initGA, logPageView } from '../others/Analytics';



const title = 'freetests4u.com';

export default class Layout extends Component{

    constructor(props){
        super(props)
    }

    componentDidMount () {
        if (!window.GA_INITIALIZED) {
          initGA()
          window.GA_INITIALIZED = true
        }
        logPageView()
      }

      render () {
    return (
        <div >
            <Provider store={store}>
                <Head>
                <title>{this.props.title}</title>
                <meta name='description' content={this.props.desc}/>
                    </Head>
                <Header />
                {this.props.children}
            </Provider>
        </div>
    )
}
    
}
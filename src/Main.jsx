import {Component } from "react";
import styles from './App.module.css';


class Main extends Component {
 
    render() { 
        return <div className={ styles.main }>{ this.props.children }</div>;
    }
}
export default Main;
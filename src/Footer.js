import React, { Component } from 'react';
import './footerStyle.css';

class Footer extends Component {
    render() {
        return(
            <div className="footer-container row">
                <ul className="left">
                    <li><a href="#!">Terms and condition</a></li>
                    <li><a href="#!">Privacy Policy</a></li>
                    <li><a href="#!">Contact Us</a></li>
                </ul>
                <div className="right">
                    <h2 className="footer-title">Josh Technology Group</h2>
                </div>
            </div>
        )
    }
}

export default Footer;
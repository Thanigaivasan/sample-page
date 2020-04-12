import React from "react";
import './style.css'
import { Input, Button } from "antd";

export class Footer extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="footer-wrapper">
                <div className="footer-single padding-5">
                    <div className="footer-single-each">The BURST Brush</div>
                    <div className="footer-single-each">Coconut Whitening Strips</div>
                    <div className="footer-single-each">Whitening Toothpaste</div>
                    <div className="footer-single-each">Accessories</div>
                </div>
                <div className="footer-single">
                    <div className="footer-second-one">BURST</div>
                    <div className="footer-line-small" />
                    <div>ICONS</div>
                    <div>
                        <Input
                            size="large"
                            defaultValue="Enter email to stay in touch"
                            className="footer-input"
                        />
                        <Button
                            size={"large"}
                            className="footer-button"
                            type={"primary"}
                            >
                            SIGN UP
                        </Button>
                    </div>
                    <div className="footer-line-long" />
                </div>
                <div className="footer-single padding-5">
                    <div className="footer-third-each">Contact</div>
                    <div className="footer-third-each">help@burstoralcare.com</div>
                    <div className="footer-third-each font-28">855-352-7604</div>
                    <div className="footer-third-each">Help & FAQs</div>
                </div>
            </div>
        );
    }

}
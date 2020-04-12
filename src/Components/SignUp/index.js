import React from "react";
import './style.css'
import { Input, Form } from "antd";


export class SignUp extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="signup-wrapper">
                <div className="signup-header">
                    SIGN UP NOW
                </div>
                <div className="signup-title">
                    Create your personal BAM account
                </div>
                <div className="signup-form">
                    <div className="su-subs">
                        Let's create your BAM account. If you already have a BURST account,
                        <a className="su-link"> <u>log in</u></a> to upgrade it to a BAM account
                    </div>
                </div>
                <div className="su-form">
                    <Form>
                        <div className="su-form-single">
                            <Form.Item>
                                <Input className="su-input-single" placeholder="Practice Name" size={"large"} />
                            </Form.Item>
                        </div>
                        <div className="su-form-single">
                            <Form.Item>
                                <Input className="su-input-single" placeholder="Practice main email address" size={"large"} />
                            </Form.Item>
                        </div>
                        <div className="su-form-single">
                            <Form.Item>
                                <Input className="su-input-single" placeholder="Account BURST code (if applicable)" size={"large"} />
                            </Form.Item>
                        </div>
                        <div className="su-form-single">
                            <Form.Item>
                                <Input className="su-input-single" placeholder="DDS Name(s), separate with a comma" size={"large"} />
                            </Form.Item>
                        </div>
                        <div className="su-form-single">
                            <Form.Item>
                                <Input className="su-input-single" placeholder="Number of clinical staff" size={"large"} />
                            </Form.Item>
                        </div>
                        <div className="su-form-single">
                            <Form.Item>
                                <Input className="su-input-single" placeholder="Number of non-clinical staff" size={"large"} />
                            </Form.Item>
                        </div>
                        <div className="su-form-submit">
                            CREATE BURST OFFICE ACCOUNT
                        </div>
                    </Form>
                </div>
                <div className="su-form-last">
                    Does your practice already have an account ? <a className="su-link"> <u>log in</u></a>
                </div>
            </div>
        )
    }
}



import React from "react";
import './style.css'
import { BENEFITS } from "./constant";

export class Benefits extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="benefits-wrapper">
                <div className="benefits-header">BENEFITS</div>
                <div className="benefits-title">
                    <span>ACTIVITY</span>
                    <span>REWARD</span>
                </div>
                <div className="benefits-divider" />
                {
                    BENEFITS.map((benefit, index) => {
                        return (
                            <div key={index}>
                            <div className="benefits-points">
                                <div className="benefits-points-left">{benefit.ACTIVITY}</div>
                                <div className="benefits-points-right">{benefit.REWARD}</div>
                            </div>
                                {
                                    index < BENEFITS.length - 1 &&
                                    <div className="benefits-divider"/>
                                }
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
import React from 'react'
import './style.css'

export class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="main-container">
                <div className="company-name">
                    BURST
                </div>
                <div className="header-text">
                    <div className="header-text-main">SIGN UP YOUR DENTAL OFFICE TODAY</div>
                    <div className="header-text-subs">
                        THE BEST ORAL CARE ON THE PLANET
                    </div>
                    <div className="header-text-desc">YOUR PATIENTS DESERVE BURST</div>
                    <div className="header-text-btn">LEARN HOW IT WORKS</div>
                </div>
            </div>
        )
    }

}
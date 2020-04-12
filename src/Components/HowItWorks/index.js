import React from "react";
import './style.css'
import { ReactComponent as Brush } from "../../Assets/brush.svg";
import { ReactComponent as Flag } from "../../Assets/flag.svg";
import { ReactComponent as Gift } from "../../Assets/gift.svg";

export class HowItWorks extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="hiw-wrapper">
                <div className="hiw-title">HOW IT WORKS</div>
                <div className="hiw-detail-wrapper">
                    <div className="hiw-detail-individual">
                        <div className="hiw-detail-icon"><Brush/></div>
                        <div className="hiw-detail-main">
                            Easily sign your office up and get a FREE brush to try
                        </div>
                        <div className="hiw-detail-sub">
                            Earn $2 per bulk order brush and give your patients access to incredible
                            & affordable oral care in/outside the OP
                        </div>
                    </div>
                    <div className="hiw-detail-individual">
                        <div className="hiw-detail-icon"><Flag/></div>
                        <div className="hiw-detail-main">
                            Bring on your dental professionals as ambassadors
                        </div>
                        <div className="hiw-detail-sub">
                            Sign up your dentists, hygienists and assistants to make your dream team.
                            You'll earn for every introduction. Perfect!
                        </div>
                    </div>
                    <div className="hiw-detail-individual">
                        <div className="hiw-detail-icon"><Gift/></div>
                        <div className="hiw-detail-main">
                            Have your say on our office sales program
                        </div>
                        <div className="hiw-detail-sub">
                            What we do, we do because of pro's like you. So let's work together.
                            Your voice matters. Let's make it heard....
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
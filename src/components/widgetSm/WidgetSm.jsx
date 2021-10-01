import React from 'react'
import "./widgetSm.css"
import { Visibility } from '@material-ui/icons';

export default function WidgetSm() {
    const {REACT_APP_PROFILE_AVATAR}=process.env;
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src={REACT_APP_PROFILE_AVATAR} alt="someImage" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Developer</span>
                    </div>
                    <button className="widgerSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src={REACT_APP_PROFILE_AVATAR} alt="someImage" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Developer</span>
                    </div>
                    <button className="widgerSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src={REACT_APP_PROFILE_AVATAR} alt="someImage" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Developer</span>
                    </div>
                    <button className="widgerSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src={REACT_APP_PROFILE_AVATAR} alt="someImage" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Developer</span>
                    </div>
                    <button className="widgerSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src={REACT_APP_PROFILE_AVATAR} alt="someImage" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Developer</span>
                    </div>
                    <button className="widgerSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>

            </ul>
        </div>
    )
}

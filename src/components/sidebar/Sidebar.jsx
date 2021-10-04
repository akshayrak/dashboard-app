import React from 'react'
import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp, PersonOutlineOutlined, StorefrontOutlined, AttachMoneyOutlined, BarChartOutlined, MailOutlineOutlined, DynamicFeedOutlined, ChatBubbleOutline, WorkOutline, Report } from '@material-ui/icons'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidbarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link" >
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidbarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <PersonOutlineOutlined className="sidebarIcon" />
                                Users
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <StorefrontOutlined className="sidebarIcon" />
                            Products
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoneyOutlined className="sidebarIcon" />
                            Transaactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChartOutlined className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidbarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutlineOutlined className="sidebarIcon" />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeedOutlined className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebarIcon" />
                            Messages
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidbarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon" />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon" />
                            Report
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

import React from 'react';
import './Sidebar.css';
import {
    FaCalendar,
    FaInbox,
    FaPlus,
    FaPlusCircle,
    FaProjectDiagram,
    FaRegClock,
    FaRegCommentAlt,
    FaTh
} from 'react-icons/fa';
import avatar from "../../assets/img/avatar2.png";


interface ISidebar {

}

export const Sidebar: React.FC<ISidebar> = (props: ISidebar) => {
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-container">
                    <div className="sidebar-avatar">
                        <div>
                            <img src={avatar} />
                        </div>
                        <div className="avatar-info">
                            <div className="avatar-text">
                                <h4>AR Shakir</h4>
                                <small><b>Sr. Visual Designer</b></small>
                            </div>
                            <i className="ri-arrow-down-s-line"></i>
                        </div>
                    </div>
                    <div className="sidebar-menu">
                        <div className='title'>
                            <h3>Menu</h3>
                        </div>
                        <ul>
                            <li>
                                <a href="">
                                    <div className="figure"></div>
                                    <div className="icon">
                                        <FaInbox />
                                    </div>
                                    <div className="icon_text">My Tasks</div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className="figure"></div>
                                    <div className="icon">
                                        <FaRegCommentAlt />
                                    </div >
                                    <div className="icon_text">Inbox</div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className="figure"></div>
                                    <div className="icon">
                                        <FaRegClock />
                                    </div>
                                    <div className="icon_text">Standups</div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className="figure"></div>
                                    <div className="icon">
                                        <FaCalendar />
                                    </div>
                                    <div className="icon_text">Meetings</div>
                                    <div className="notification">
                                        <p>5</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="sidebar-favorite">
                        <div className='title'>
                            <h3>Favorites</h3>
                        </div>
                        <ul>
                            <li>
                                <a href="">
                                    <div className="circle_one" style={{ background: "red" }}>
                                        <div className="circle_two"></div>
                                    </div>
                                    <div className="icon_text">Redwhale Design</div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className="circle_one" style={{ background: "blue" }}>
                                        <div className="circle_two"></div>
                                    </div>
                                    <div className="icon_text">Mobile App Mock...</div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className="circle_one" style={{ background: "#5cb85c" }}>
                                        <div className="circle_two"></div>
                                    </div>
                                    <div className="icon_text">UI Design Revisi...</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="sidebar-plus">
                        <FaPlusCircle className="btn_icon"/>
                    </div>
                    <div className="sidebar-footer">
                        <div className="text_footer">2021 AR Shakir License</div>
                    </div>
                </div>
            </div>
        </>
    )
}
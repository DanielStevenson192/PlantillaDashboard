import React from 'react';
import { FaFire, FaLightbulb, FaPlus, FaSplotch } from 'react-icons/fa';
import './Dashboard.css';
import avatar from "../../assets/img/avatar2.png";

interface IDashboard {

}

export const Dashboard: React.FC<IDashboard> = (props: IDashboard) => {
    return (
        <>
            <div className="main">
                <div className="main-container">
                    <div className="column_one">
                        <div className="card-main">
                            <div className="card-header">
                                <div className="title_name">
                                    <h3>Hi Shakir</h3>
                                </div>
                                <div className="progress">
                                    <div className="progress_main">
                                        <div className="progress_title">
                                            <h3>15% task completed</h3>
                                        </div>
                                        <div className="progress_bar progress_bar--70">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card_one">
                                    <div className="card_icon">
                                        <div className="icon">
                                            <FaLightbulb />
                                        </div>
                                    </div>
                                    <div className="card_text">
                                        R&D for New Banking
                                    </div>
                                    <div className="card_avatar">
                                        <img src={avatar} />
                                        <img src={avatar} style={{ transform: "translateX(-15px)" }} />
                                        <img src={avatar} style={{ transform: "translateX(-30px)" }} />
                                    </div>
                                </div>
                                <div className="card_two">
                                    <div className="card_icon">
                                        <div className="icon">
                                            <FaSplotch />
                                        </div>
                                    </div>
                                    <div className="card_text">
                                        Create Signup Page
                                    </div>
                                    <div className="card_avatar">
                                        <img src={avatar} />
                                        <img src={avatar} style={{ transform: "translateX(-15px)" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="title_name">
                                    <h3>Monthly Tasks</h3>
                                </div>
                                <div className="btn">
                                    <div className="btn_main">
                                        <div className="btn_one">
                                            Archive
                                        </div>
                                        <div className="btn_two">
                                            New
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column_two">
                        <div className="inline-up">
                            <div className="title">
                                <h3>Design Project</h3>
                            </div>
                            <div className="subtitle">
                                <div className="icon">
                                    <FaFire />
                                </div>
                                <h3>In Progress</h3>
                            </div>
                        </div>
                        <div className="inline-down">
                            <div className="completed">
                                <h3>Completed</h3>
                                <div className="item">
                                    <h4>114</h4>
                                    <div className="completed_item"></div>
                                </div>
                            </div>
                            <div className="in_progress">
                                <h3>In Progress</h3>
                                <div className="item">
                                    <h4>24</h4>
                                    <div className="in_progress_item"></div>
                                </div>
                            </div>
                            <div className="team">
                                <h3>Team members</h3>
                                <div className="team_avatar">
                                    <img src={avatar} />
                                    <img src={avatar} style={{ transform: "translateX(-10px)" }} />
                                </div>
                            </div>
                        </div>
                        <div className="separator"></div>
                        <div className="inline-up">
                            <div className="title">
                                <h3>Design Project</h3>
                            </div>
                            <div className="subtitle">
                                <div className="icon">
                                    <FaFire />
                                </div>
                                <h3>In Progress</h3>
                            </div>
                        </div>
                        <div className="inline-down">
                            <div className="completed">
                                <h3>Completed</h3>
                                <div className="item">
                                    <h4>114</h4>
                                    <div className="completed_item"></div>
                                </div>
                            </div>
                            <div className="in_progress">
                                <h3>In Progress</h3>
                                <div className="item">
                                    <h4>24</h4>
                                    <div className="in_progress_item"></div>
                                </div>
                            </div>
                            <div className="team">
                                <h3>Team members</h3>
                                <div className="team_avatar">
                                    <img src={avatar} />
                                    <img src={avatar} style={{ transform: "translateX(-10px)" }} />
                                </div>
                            </div>
                        </div>
                        <div className="separator"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
import React from 'react';
import { Tabs } from 'antd';
import Upcoming from './upcoming';
import "./style.scss"

const IdoHome = () => {
    return (
        <>
            <section className="section-ido">
                <div className="container">
                    <div className="main-home-ido">
                        <div className="title">
                            BSCS Launchpad
                        </div>
                        <div className="desc">
                            An all-in-one Incubation Hub with a full stack Defi platform across only TON networks
                        </div>
                        <div className="table-custome">
                            <Tabs defaultActiveKey="1">
                                <Tabs.TabPane tab="Upcoming" key="upcoming">
                                    <Upcoming />
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="Active" key="active">
                                    Content of Tab Pane 2
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="Ended" key="ended">
                                    Content of Tab Pane 3
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="Joined" key="joined">
                                    Content of Tab Pane 4
                                </Tabs.TabPane>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default IdoHome
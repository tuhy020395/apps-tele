import React from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';
import "./style.scss"

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="main-header">
                        <div className="left-header">
                            <img src="./images/logo-brand-v3.svg" alt="" />
                        </div>
                        <div className="right-header">
                            <TonConnectButton className="btn-connectTon" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header
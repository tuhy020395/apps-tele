import React, { useEffect, useState } from 'react';
import { useHookIDO } from "../store";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Countdown from "react-countdown";
import { message } from "antd";
import moment from "moment";
import {
    rendererCountDown,
} from "../utilsIDO";
import { Link } from 'react-router5';

const Upcoming = () => {
    const [state, actions]: any = useHookIDO();

    useEffect(() => {
        actions.getListUpComing();
    }, []);

    const Item = ({item}: any) => {
        const formatNumber = (x: any, max: any) => {
            if (x) {
                return x.toLocaleString("en-US", {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: max,
                });
            } else return 0;
        };
        let timeUpcoming = moment(item?.idoStartTime * 1000).format(
            "MMM DD YYYY h:mm A"
        );

        // const handleCallClickDetails = (symbol: any) => {
        //     navigate(`${"/details"}?${symbol}`);
        // };

        const handleCallClick = (symbol: any) => {
            // navigate(`${"/Ido/FullSearchProject"}?${symbol}`);
        };

        return (
            <>
                <div className="item-row bage-custom">
                    {item?.idoTrust !== "" ?
                        <>
                            {item.idoTrust === "S" ? (
                                <div className="bage-s">Shielded</div>
                            ) : item.idoTrust === "R" ? (
                                <div className="bage-r">Riskless</div>
                            ) : (
                                <div className="bage-d">{item.idoTrust}</div>
                            )}
                        </>
                        :
                        <>
                            {""}
                        </>
                    }

                    <div className="content-up">
                        <div className="box-content-top">
                            <div className="box-img">
                                <img src={item?.backgroundUrl} alt="background" />
                            </div>
                        </div>
                        <div className="box-content-bottom">
                            <div className="guide-swap">
                                <div className="name-token">
                                    {item?.name} <span className="symbol">{item?.unit}</span>
                                </div>
                                <p className="desc">{item?.description?.substring(0, 50)}...</p>
                                <ul className="list-swap">
                                    <li>
                                        <span className="text-l">Swap Rate:</span>
                                        <span className="text-r">{item?.swapAmount}</span>
                                    </li>
                                    <li>
                                        <span className="text-l">Total Raise:</span>
                                        <span className="text-r">
                                            {formatNumber(item?.idoSupply * item?.pricePer, 1)} {item?.symbolUSD}
                                        </span>
                                    </li>
                                    <li>
                                        <span className="text-l">Total Supply:</span>
                                        <span className="text-r">
                                            {formatNumber(item?.totalSupply, 1)} {item?.symbol}
                                        </span>
                                    </li>
                                </ul>
                                <div className="list-socail">
                                    <div className="text-item">
                                        <div className="text-l">Join Network:</div>
                                        <div className="text-r">
                                            <span className="icon-symbol">
                                                <img src="./images/ton.png" alt="" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-item">
                                        <div className="text-l">Token Network:</div>
                                        <div className="text-r">
                                            <span className="icon-symbol">
                                            <img src="./images/ton.png" alt="" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-item">
                                        <div className="text-l">Community:</div>
                                        <div className="text-r">
                                            <div className="box-icon-sc">
                                                <a
                                                    className="linkMedia"
                                                    href={item?.socical?.website}
                                                    target="blank"
                                                >
                                                    <img src="./images/web.png" alt="" />
                                                </a>

                                                <a
                                                    className="linkMedia"
                                                    href={item?.socical?.telegram}
                                                    target="blank"
                                                >
                                                    <img src="./images/tele-1.png" alt="" />
                                                </a>

                                                <a
                                                    className="linkMedia"
                                                    href={item?.socical?.twitter}
                                                    target="blank"
                                                >
                                                    <img src="./images/twi-1.png" alt="" />
                                                </a>

                                                <a
                                                    className="linkMedia"
                                                    href={item?.socical?.medium}
                                                    target="blank"
                                                >
                                                    <img src="./images/me-1.png" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-item">
                                        <div className="text-l">Contract:</div>
                                        <div className="text-r">
                                            <span>
                                                {item?.idoContract === "TBA" ? (
                                                    "TBA"
                                                ) : (
                                                    <>
                                                        {item?.network === "apt"
                                                            ? item?.idoContract &&
                                                            `${item?.idoContract.substring(
                                                                0,
                                                                10
                                                            )}...${item?.idoContract.substring(
                                                                81,
                                                                item?.idoContract.length
                                                            )}`
                                                            : item?.idoContract &&
                                                            `${item?.idoContract.substring(
                                                                0,
                                                                10
                                                            )}...${item?.idoContract.substring(
                                                                37,
                                                                item?.idoContract.length
                                                            )}`}
                                                    </>
                                                )}
                                            </span>
                                            {item?.idoContract === "TBA" ? (
                                                ""
                                            ) : (
                                                <CopyToClipboard
                                                    text={item?.idoContract}
                                                    onCopy={() => {
                                                        message.success("Copied", 0.4);
                                                    }}
                                                >
                                                    <span className="img-copy">
                                                        <img
                                                            className="coppy"
                                                            src="/images/imgido/copy.png"
                                                            alt=""
                                                        />
                                                    </span>
                                                </CopyToClipboard>
                                            )}
                                        </div>
                                    </div>
                                    <div className="text-item">
                                        <div className="text-l">Start Time:</div>
                                        <div className="text-r">
                                            <span className="times-join">
                                                {item?.idoStartTime > 0 ? (
                                                    <>
                                                        <Countdown
                                                            date={timeUpcoming}
                                                            renderer={rendererCountDown}
                                                        />
                                                    </>
                                                ) : (
                                                    <>N/A</>
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="button-view">
                                    <Link routeName="details">
                                        <button
                                            className="btn btn-view"
                                            type="button"
                                            // onClick={() =>
                                            //     window.location.href = "/details"
                                            // }
                                        >
                                            View Pool
                                        </button>
                                    </Link>
                                </div>
                                {item?.isFullResearch === true ? (
                                    <>
                                        <div className="full-search">
                                            <button
                                                type="button"
                                                className="btn-search-project"
                                                onClick={() => handleCallClick(item?.symbol)}
                                            >
                                                Full Research Project {">>"}
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="main-upcoming">
                <div className="main-guide">
                    {state.listUpComing?.length === 0 ? ""
                    : 
                    state.listUpComing.map((item: any, i: any) => (
                        <Item item={item} />
                    ))}
                </div>
            </div>
        </>
    )
}
export default Upcoming
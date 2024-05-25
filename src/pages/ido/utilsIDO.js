/* eslint-disable default-case */
/* eslint-disable no-mixed-operators */
import web3 from "web3";
import BigNumber from "bignumber.js";
// import * as anchor from "@project-serum/anchor";
// import * as Web3 from "@solana/web3.js";
// import idl from "./bscs_ido.json";

// import { struct, u32, u8 } from "@solana/buffer-layout";
// import { publicKey, u64 } from "@solana/buffer-layout-utils";
// import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { ethers } from "ethers";



export const getProgressTime = (startTime) => {
    if (!startTime) {
        return Date.now();
    }
    const now = new Date();
    const utcDate = Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds(),
        0
    );
    const startDate = new Date(startTime);

    const startTS = Date.UTC(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate(),
        startDate.getHours(),
        startDate.getMinutes(),
        startDate.getSeconds(),
        0
    );
    if (startTS <= utcDate) {
        return Date.now();
    } else {
        let delta = Math.abs(startTS.valueOf() - utcDate.valueOf()) / 1000;

        const days = Math.floor(delta / 86400);
        delta -= days * 86400;
        const hours = Math.floor(delta / 3600);
        delta -= hours * 3600;
        const minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;
        const seconds = Math.floor(delta % 60); // in theory the modulus is not required

        // return `${days} day${days > 1 ? 's' : ''} ${hours}:${minutes}:${seconds}`
        if (days >= 1) {
            return (
                Date.now() +
                days * 24 * 60 * 60 * 1000 +
                hours * 60 * 60 * 1000 +
                minutes * 60 * 1000 +
                seconds * 1000
            );
        } else {
            return (
                Date.now() +
                hours * 60 * 60 * 1000 +
                minutes * 60 * 1000 +
                seconds * 1000
            );
        }
    }
};
export const rendererCountDown = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
}) => {
    // Render a countdown
    if (completed) {
        return <span>Finish</span>
    }
    if (days > 1) {
        return (
            <span>
                {days}days : {hours}h : {minutes}m : {seconds}s
            </span>
        );
    } else if (days === 1) {
        return (
            <span>
                {days}day : {hours}h : {minutes}m : {seconds}s
            </span>
        );
    } else {
        return (
            <span>
                {hours}h : {minutes}m : {seconds}s
            </span>
        );
    }
};


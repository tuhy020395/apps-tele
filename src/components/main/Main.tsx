import React, { useEffect, memo } from "react";
import { useCookies } from "react-cookie";
import encodeAddress from "../../utils/encodeData";
import { Layout } from "antd";
import Header from "../header";
import { useTonAddress } from '@tonconnect/ui-react';

const { Content } = Layout;
function Main({ children }: any) {
    const userFriendlyAddress = useTonAddress();
    let account = userFriendlyAddress
    const [cookies, setCookie] = useCookies(["user", "account"]);
    useEffect(() => {
        if (account !== undefined && account) {
            setCookie("user", encodeAddress(account));
            setCookie("account", account);
        } else {
            setCookie("account", undefined);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [account]);

    return (
        <Layout>
            <Header />
            <Content>{children}</Content>
        </Layout>
    );
}

export default Main;

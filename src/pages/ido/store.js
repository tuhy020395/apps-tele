/* eslint-disable prefer-template */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return, no-param-reassign */
import axios from "axios";
import { API_URL } from "../../constants/index";
import {
    createStore,
    createHook,
    createContainer,
    createSubscriber,
} from "react-sweet-state";

const StoreIDO = createStore({
    initialState: {
        listUpComing: [],
    },
    actions: {
        getListUpComing:
            (m, y) =>
            async ({ setState, getState }) => {
            return new Promise((resolve, reject) => {
                axios
                    .get(`${API_URL}/launchpadv2/app_upcoming`)
                    .then((res) => {
                        setState({ totalCount: res.data.totalCount || 0 });
                        setState({ listUpComing: res.data.data || [] });
                    });
            });
        },
    },
    name: "IDO Store",
});

export const useHookIDO = createHook(StoreIDO);
export const Container = createContainer(StoreIDO, {
    onInit:
        () =>
            ({ setState }, props) => {
                setState({ ...props });
            },
});
export const Subscriber = createSubscriber(StoreIDO);
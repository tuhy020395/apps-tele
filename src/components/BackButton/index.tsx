import { FC, useEffect } from "react";
import WebApp from '@twa-dev/sdk'

interface BackButtonProps {
    onClick?: VoidFunction;
}

const backButton = WebApp.BackButton;
console.log('backButton', backButton)
let isButtonShown = false;

export const BackButton: FC<BackButtonProps> = ({
    onClick = () => {
        window.history.back();
    },
}) => {
    useEffect(() => {
        backButton.show();
        isButtonShown = true;
        console.log('isButtonShown', isButtonShown)
        return () => {
            isButtonShown = false;
            setTimeout(() => {
                if (!isButtonShown) {
                    backButton.hide();
                }
            }, 10);
        };
    }, []);

    useEffect(() => {
        WebApp.onEvent("backButtonClicked", onClick);
        return () => {
            WebApp.offEvent("backButtonClicked", onClick);
        };
    }, [onClick]);

    return null;
};
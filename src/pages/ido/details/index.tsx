
import React, { useEffect } from 'react';
import WebApp from '@twa-dev/sdk'
import { BackButton } from '@twa-dev/sdk/react';
// import { BackButton } from '../../../components/BackButton';

const DetailsIdo = () => {

    function toggleMainButton() {
        console.log('WebApp.BackButton.isVisible', WebApp.BackButton.isVisible)
        if (!WebApp.BackButton.isVisible) {
            WebApp.BackButton.hide();
            console.log('2', 2)
        } else {
            WebApp.BackButton.show();
            console.log('1', 1)
        }
    };

    console.log('WebApp.BackButton.isVisible', WebApp.BackButton.isVisible)

    useEffect(() => {
        toggleMainButton()
    }, []);

    return (
        <>
            <BackButton />
            di vao day
        </>
    )
}
export default DetailsIdo
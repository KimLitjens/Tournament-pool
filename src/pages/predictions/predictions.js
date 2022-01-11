import React, { useEffect } from 'react'

import HeaderContainer from '../../containers/header'
import PredictionsContainer from '../../containers/predictions'
import FooterContainer from '../../containers/footer'


export default function Predictions() {
    useEffect(() => {
        document.title = "Pool - Predictions";
    }, []);

    return (
        <>
            <HeaderContainer />
            <PredictionsContainer />
            <FooterContainer />
        </>
    )
}

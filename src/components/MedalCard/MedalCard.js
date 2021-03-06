import React from 'react';
import Card from '../Card/Card'
import PropTypes from 'prop-types'

import "./medalCard.scss"

const COLORS = {
    gold: '#D8BB78',
    silver: '#C4CACE',
    bronce: '#BF8970',
    unique: '#80C5DE',
    locked: '#9C9C9C'
}

const MedalCard = ({ medalImg, medalName, type }) => {

    const cardBackground = COLORS[type]

    return <Card className="medal-card" background={cardBackground}>
        <div className="photo-wrapper">
            <div className="circle">
                <img src={medalImg} className="photo" alt="medal-img"/>
            </div>
        </div>
        <div className="info-wrapper">
            <span className="medal-name">{medalName}</span>
        </div>
    </Card>
}

MedalCard.propTypes = {
    medalImg: PropTypes.element,
    medalName: PropTypes.string,
    type: PropTypes.string
}

export default MedalCard;
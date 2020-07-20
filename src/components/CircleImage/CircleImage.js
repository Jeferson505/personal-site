import React from 'react';
import PropTypes from "prop-types";

import useStyles from './Style';

export default function CircleImage(props) {
    const { src, alt } = props;
    const classes = useStyles();
    return <img className={classes.image} src={src} alt={alt} />
}

CircleImage.prototype = {
    src: PropTypes.object,
    alt: PropTypes.string,
};

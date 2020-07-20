import React from 'react';
import PropTypes from "prop-types";

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

function openNewTab(url) {
    window.open(url);
}

export default function CustomIconButton(props) {
    const { url, tooltipTitle, children } = props;

    return (
        <Tooltip title={tooltipTitle}>
            <IconButton edge="start" onClick={() => openNewTab(url)} color="inherit">
                {children}
            </IconButton>
        </Tooltip>
    );
}

CustomIconButton.propTypes = {
    url: PropTypes.string,
    tooltipTitle: PropTypes.string,
    children: PropTypes.node
};

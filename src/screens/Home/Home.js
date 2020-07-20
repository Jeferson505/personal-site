import React from 'react';

import Container from '@material-ui/core/Container';
import CircleImage from '../../components/CircleImage/CircleImage';
import imgProfile from '../../assets/jeferson.jpg';

import CardInfo from '../../components/Cards/CardInfo/CardInfo';

import useStyles from "./Style";

export default function Home() {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <div className={classes.info}>
                <CircleImage src={imgProfile} alt="Jeferson Santos" />
                <CardInfo />
            </div>
        </Container>
    );
}

import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import useStyles from './Style';

export default function CardInfo() {
    const classes = useStyles();

    return (
        <Card className={classes.card} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Desenvolvedor Frontend e Mobile
                </Typography>
                <Typography variant="h5" component="h2">
                    Jeferson Santos
                </Typography>
                <Typography className={classes.description} variant="body1" component="p">
                    Olá, seja muito bem-vindo ao meu site. Sou um desenvolvedor Frontend e Mobile que gosta muito de chocolate. Estou sempre em processo de aprendizado.
                    Atualmente atuo como desenvolvedor pela TDR Informática.
                </Typography>
                <Typography variant="body2" component="p">
                    Minhas principais experiências são em React, React-Native e Flutter. <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Conhecer Portfólio</Button>
            </CardActions>
        </Card>
    );
}

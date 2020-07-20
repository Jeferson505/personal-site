import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        objectFit: "cover",
        borderWidth: 5,
        borderStyle: "solid"
    }
}));

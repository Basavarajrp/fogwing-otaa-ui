import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    footerText: {
        width: 327,
        margin: "0 auto",
        fontFamily: "Roboto",
        fontSize: 13,
        marginTop: 35,
        marginBottom: 35
    },
    card: {
        marginTop: 10,
        display: "flex",
        justifyContent: "center"
    }
}));

export default useStyles;
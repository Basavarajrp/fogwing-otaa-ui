import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    image: {
        display: "flex",
        justifyContent: "center"
     },
    mainContent: {
        padding: 10,
        marginTop: "1rem",
        overflowY: "hidden",
    },
    textField: {
        background: "#FFFFFF",
        color: "green",
        fontWeight: 'bold',
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#455A64"
        },
    },
    text: {
        width: 300,
        margin: "0 auto",
        fontSize: 13,
        marginTop: 40
    },
    edgeEUIField: {
        display: "flex",
        justifyContent: "center",
        marginTop: 10
    },
    button: {
        display: "flex",
        justifyContent: "center",
        marginTop: 15
    }
}));

export default useStyles;
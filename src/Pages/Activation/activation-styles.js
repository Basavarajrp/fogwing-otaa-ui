import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    textField: {
        background: "#FFFFFF",
        color: "green",
        fontWeight: 'bold',
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#455A64"
        }
    },
    searchBar: {
        fontFamily: 'Roboto'
    },
    button: {
        display: "flex",
        justifyContent: "center",
        marginTop: 15
    },
    footerText: {
        width: 300,
        margin: "0 auto",
        fontSize: 13,
        marginTop: 25,
        marginBottom: 35
    },
    image: {
       display: "flex",
       justifyContent: "center"
    },
    searchBox: {
        display: "flex",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: "0.8rem",
        marginTop: 20,
        fontWeight: "bold"
    },
    deviceCard: {
        display: "flex",
        justifyContent: "center",
        marginTop: 20
    },
    activationCode: {
        display: "flex",
        justifyContent: "center",
        marginTop: 25
    }
}));

export default useStyles;
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    mainContent: {
        padding: 10,
        marginTop: "1rem",
        overflowY: "hidden",
        height: "100vh"
    },
    deviceUnavailable: {
       display: "flex",
       justifyContent: "center",
       height: "100vh"
    }
}));

export default useStyles;
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root:{
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingTop: "20px",
        width: 290,
        boxShadow: 4,
        fontSize: "1rem",
        backgroundColor: "white"
    },
    dataKey:{
        fontSize: "initial",
    },
    dataValue: {
        fontSize: 14
    },
    chart: {
        paddingLeft: 0,
        marginLeft: -14
    },
    headerFont: {
        fontSize: 17,
        fontWeight: "bold"
    }
}));

export default useStyles;
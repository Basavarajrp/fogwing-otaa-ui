import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root:{
        padding: "20px",
        width: 290,
        boxShadow: 3,
        fontSize: "1rem"
    },
    header: {
        fontSize: "large",
    },
    dataKey:{
        fontSize: 17,
        fontWeight: 500
    },
    dataValue: {
        fontSize: 17,
    },
    headerFont: {
        fontSize: 17,
        fontWeight: "bold"
    }
}));

export default useStyles;
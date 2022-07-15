// styles
import useStyles from './footer-styles';

const Footer = () => {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.footer}></div>
        </div>      
    )
}


export default Footer;
import { AppBar, Toolbar  } from "@mui/material";
import { Typography } from "@mui/material";

// styles
import useStyles from "./navbar-styles";

const Navbar = (props) => {

    const classes = useStyles();

    return (
        <AppBar position="sticky" >
            <Toolbar className={classes.navbar}>
                <Typography varient="h2" 
                 sx={{fontSize:"20px"}}
                >
                  { props.title }
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
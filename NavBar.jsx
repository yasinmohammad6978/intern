
import{AppBar,makeStyles,Toolbar, Typography } from '@material-ui/core';
const usestyle= makeStyles({
        header:{
            background: "#111111"}
    })

const NavBar = ()=>{
    const classes=usestyle();
    return(
        <AppBar className = {classes.header} position="static">
            <Toolbar>
                <Typography>
                    code for Interviwe
                </Typography>
                <Typography>
                    All users
                </Typography>
                <Typography>
                    Add user
                </Typography>

            </Toolbar>
        </AppBar>
    )
}
export default NavBar;
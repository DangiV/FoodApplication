import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import { Tab, Tabs } from '@mui/material';
import '../assests/header.css'

const Header = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" className="headerparent">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            {/* <MenuIcon /> */}
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}  className='HeaderLogo'>
                            Food
                        </Typography>
                        <Tabs textColor='inherit' indicatorColor='secondary' value={false} >
                            <Tab label="Home" onClick={() => deleteLocalData()} component={Link} to="/" className='HeaderText' />
                            <Tab label="Food" component={Link} to="/food" className='HeaderText' />
                            <Tab label="Contact" component={Link} to="/carousel" className='HeaderText' />
                            <Tab label="About" component={Link} to="/" className='HeaderText'/>
                            <Tab label="Login" component={Link} to="/login" className='HeaderText'/>
                            <Tab label="Register" component={Link} to="/register" className='HeaderText' />

                        </Tabs>
                        <Box sx={{ flexGrow: 1 }} />
                        {/* <Button color="inherit" >Login</Button> */}
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Header
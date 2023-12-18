import React, { useState } from 'react'
import '../assests/register.css'
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import { CallApi } from '../CallApi';

const Register = () => {

    const [userData, setUserData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(userData);
        const response =  await CallApi("post", "/register",userData)
        console.log("res", response);
    }

    return (
        <>
            <div className='RegisterParent'>
                <>
                    <Grid>
                        <Paper elevation={20} className="paperStyle">
                            <Grid align="center">
                                <Avatar className="avatarStyle">
                                    <AddCircleOutlineIcon />
                                </Avatar>
                                <h2 className="HeadingText">Register</h2>
                            </Grid>
                            <div className="container">
                                <form className="row mb-3" >
                                    <Grid container spacing={2}>

                                        <Grid item xs={12}>
                                            <TextField
                                                variant="filled"
                                                required
                                                fullWidth
                                                type="text"
                                                id="firstname"
                                                value={userData.firstname}
                                                onChange={handleChange}
                                                label="First Name"
                                                name="firstname"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                variant="filled"
                                                required
                                                fullWidth
                                                type="text"
                                                id="lastname"
                                                value={userData.lastname}
                                                onChange={handleChange}
                                                label="Last Name"
                                                name="lastname"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                variant="filled"
                                                required
                                                fullWidth
                                                type="text"
                                                id="email"
                                                value={userData.email}
                                                onChange={handleChange}
                                                label="Email"
                                                name="email"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                variant="filled"
                                                required
                                                fullWidth
                                                type="password"
                                                id="password"
                                                value={userData.password}
                                                onChange={handleChange}
                                                label="Passrword"
                                                name="password"
                                            />
                                        </Grid>

                                    </Grid>
                                </form>
                                <div className="text-center">
                                    <Button
                                        variant="contained"
                                        // className="mb-5"
                                        className='SubmitBtn'
                                        type="submit"
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                </>
            </div>
        </>
    )
}

export default Register
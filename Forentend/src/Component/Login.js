import { useState, useEffect } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import { Try } from "@mui/icons-material";

const Login = () => {
  const getToken = () => {
    const newToken = localStorage.getItem("userToken");
    const newt = JSON.parse(newToken);
    console.log("local storage token is ", newt);
    console.log("local storage token is ", newt.user.role);
  };

  getToken();

  const [schoolData, setSchoolData] = useState({
    schoolname: "",
  });

  let name, value;

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
  };

  const handleSubmit = () => {
    // e.prevent.default();
    // console.log("schoolData", schoolData);
    // try {
    //   const addSchoolData = axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/createschool`, {
    //     address: schoolData.address,
    //     city: schoolData.city,
    //   });
    //   console.log("addSchoolData is here ", addSchoolData);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const paperStyle = { padding: "30px 20px", width: "900px", margin: "0 auto" };
  const headerStyle = { margin: "8px" };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const labelStyle = { marginTop: "10%" };

  return (
    <>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineIcon />
            </Avatar>
            <h2 style={headerStyle}>Add School</h2>
          </Grid>

          <div className="container">
            <form className="row mb-3" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    // className={style.labelcolor}
                    variant="standard"
                    required
                    fullWidth
                    type="text"
                    id="firstname"
                    value={schoolData.schoolname}
                    onChange={handleChange}
                    label="First Name"
                    name="firstname"
                  />
                </Grid>


              </Grid>
            </form>
            <div className="text-center">
              <Button
                variant="contained"
                className="mb-5"
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
  );
};

export default Login;

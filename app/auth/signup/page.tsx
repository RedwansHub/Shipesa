'use client'
import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Box from "@mui/material/Box";
import Login from "@/app/components/Login";
import { Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {}

const SignUp = (props: Props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: '',
    password: "",
    confirmPassword: "",
    receiveEmails: false,
  });
  const handleFormChange = (event : any) => {
    const { name, value, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "receiveEmails" ? checked : value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formData); // Submit form data to server here
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height:"95vh",
      }}
    >
      <Box sx={{ paddingBottom: '25px', display: 'grid', gap:2, placeItems:'center'}} >
        <Image src={'/Logo.png'} alt="Logo" width={250} height={100}/>
      <Typography variant={"h5"} fontWeight={700}>Create an Account</Typography>
      </Box>
         <Paper sx={{ padding: '24px'}}>
          <Grid item xs={12} sm={8} md={6}>
            <form
              onSubmit={handleSubmit}
              style={{ maxWidth: 600,  }}
            >
              <Grid container spacing={3}>
               
              <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      type="email"
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      type="password"
                      label="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      type="password"
                      label="Confirm Password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleFormChange}
                    />
                  </Grid>
                <Grid item xs={12}>
                  <button type="submit" className=" rounded-md bg-[#5C51FE] font-semibold text-xl p-3 items-center w-full">
                    Continue</button>
                </Grid>
              </Grid>
            </form>
            <Grid sx={{ paddingTop: 2, textAlign: 'center'}}>
              <Typography >
                Already have an account?
                <Button onClick={() => signIn()}>Sign In</Button>
              </Typography>
            </Grid>
          </Grid>
        </Paper>

      {/* <Login /> */}
    </Box>
  )
}

export default SignUp
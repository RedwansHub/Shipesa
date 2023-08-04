'use client'
import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Box from "@mui/material/Box";
import Login from "@/app/components/Login";
import { Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const SignIn = () => {
  const { data: session } = useSession();
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleFormChange = (event : any) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false
    })
    .then((res) => {
        if (!res || res.error) {
          toast.error('Authentication Failed')
          // console.log('User not found or authentication failed');
          
        } else {
          toast.success('Logged in Successfully')
          if(formData.email == 'admin@sp.com'){
            router.push('/Admin')
          } else {
            router.push('/Dashboard')
          }
          console.log('User authenticated');
        }
      })
      .catch((error) => {
        console.log('An error occurred during authentication:', error);
      });
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
      <Typography variant={"h5"} fontWeight={700}>Sign In to Shipesa</Typography>
      </Box>
        {/* <h2 className="font-semibold text-xl">{session ? "Thank you for logging in" : "Please log in"}</h2> */}
        <Paper sx={{ padding: '24px'}}>
          <form
              onSubmit={handleSubmit}
              style={{ maxWidth: 400,  }}
            >
              <Grid container spacing={3}>
               
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
                  <button type="submit" className=" rounded-md bg-[#5C51FE] font-semibold text-xl p-3 items-center w-full">Login</button>
                </Grid>
              </Grid>
            </form>
            <Grid sx={{ paddingTop: 2, textAlign: 'center'}}>
              <Typography >
                Don't have an account?
                <Button onClick={() => router.push('/auth/signup')}>Create Account</Button>
              </Typography>
            </Grid>
        </Paper>

      {/* <Login /> */}
    </Box>
  );
};

export default SignIn;
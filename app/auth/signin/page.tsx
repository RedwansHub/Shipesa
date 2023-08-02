'use client'
import React from "react";
import { useSession } from "next-auth/react";
import Box from "@mui/material/Box";
import Login from "@/app/components/Login";


const SignIn = () => {
  const { data: session } = useSession();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 className="font-semibold text-xl">{session ? "Thank you for logging in" : "Please log in"}</h2>
      <Login />
    </Box>
  );
};

export default SignIn;
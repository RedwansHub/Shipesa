'use client'

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { signIn, signOut, useSession } from "next-auth/react";
import NextLink from "next/link";
import { useMediaQuery, useTheme } from "@mui/material";
import ThemeToggleButton from "./ThemeButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SafeUser } from "../lib/Types";

export type HeaderProps = {
  ColorModeContext: React.Context<{ toggleColorMode: () => void }>;
  user: string 
};

const Header = (props: HeaderProps) => {
  const { ColorModeContext } = props;
  const { data: session } = useSession();
  const theme = useTheme();
  const userProfileImg = session?.user?.image as string;
 
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

 
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleAuth = () => {
    signOut(),
    router.push('/');
  };
  const backToDashboard = () => {
    if(props.user == 'Admin'){
      router.push('/Admin');
    } else {
      router.push('/Dashboard');
    }
  };

  const tabletCheck = useMediaQuery("(min-width: 768px)");
  const router = useRouter()
  return (
    <AppBar position="sticky" sx={{ marginBottom: "20px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <div onClick={() => backToDashboard()} className="w-[180px] cursor-pointer">
            <Image src={'/Shipesa-Logo.png'} alt="Shipesa Logo" height={200} width={200}/> 
          </div>

          <Box sx={{ flexGrow: 0,paddingRight: 5, marginLeft: "auto" }}>
            <Tooltip title="Open profile settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt={session?.user?.name as string}
                  src={userProfileImg}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <NextLink
                  href={"/Dashboard/Profile"}
                  style={{
                    color: theme.palette.text.primary,
                    textDecoration: "none",
                  }}
                >
                  <Typography textAlign="center">Profile</Typography>
                </NextLink>
              </MenuItem>
              <MenuItem onClick={() => handleAuth()}>
                <Typography textAlign="center">
                  Logout
                </Typography>
              </MenuItem>
              <MenuItem className="flex justify-between gap-2 items-center">
                <ThemeToggleButton ColorModeContext={ColorModeContext} />
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
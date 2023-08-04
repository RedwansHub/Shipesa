'use client'
import { CSSObject, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Theme, useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Person2Icon from "@mui/icons-material/Person2";
import HomeIcon from "@mui/icons-material/Home";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { Settings } from "@mui/icons-material";
import { signOut, useSession } from 'next-auth/react';
import scss from "./SideMenu.module.scss";
import NextLink from "next/link";
import { useRouter } from 'next/navigation';
import { SafeUser } from '@/app/lib/Types';
import { AdminMenuBar, UserMenuBar } from '@/app/lib/Data';

type Props = {
  User: SafeUser | null
}

  const drawerWidth = 240;
  const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });
  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });
  const userMenuRouteList = ["Dashboard", "Dashboard/Transactions", "Dashboard/Profile", "Dashboard/Settings", ""];
  const menuRouteList = ["Admin/Dashboard", "Admin/Dashboard/Analytics", "Admin/Dashboard/Profile", "Admin/Dashboard/Settings", ""];
  const userMenuListTranslations = ["Home", "Transactions", "Profile", "Settings", "Sign Out"];
  const menuListTranslations = ["Home", "Analytics", "Profile", "Settings", "Sign Out"];
 
  const menuListIcons = [
    <HomeIcon />,
    <EqualizerIcon />,
    <Person2Icon />,
    <Settings />,
    <ExitToAppIcon />,
  ];

const SideMenu = (props: Props) => {
  const { data: session } = useSession()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const mobileCheck = useMediaQuery("(min-width: 600px)");
  const handleDrawerToggle = () => { setOpen(!open) }
  const router = useRouter()
  const handleAuth = () => {
    router.push('/');
    signOut()
  };
  const handleListItemButtonClick = (text: string) => {
    if(text === "Sign Out") {
      handleAuth()
    } else null

    setOpen(false);
  };
  
   const MenuRouteList = props.User?.role === 'Admin' 
     ? menuRouteList : userMenuRouteList 
   const MenuTranslationsList = props.User?.role === 'Admin' 
     ? menuListTranslations : userMenuListTranslations 

     console.log(MenuRouteList);
     

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={open}
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: {
          left: 0,
          top: mobileCheck ? 64 : 57,
          flexShrink: 0,
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          ...(open && {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme),
          }),
          ...(!open && {
            ...closedMixin(theme),
            "& .MuiDrawer-paper": closedMixin(theme),
          }),
        },
      }}
    >
      <div className={'drawerHeader'}>
        <IconButton onClick={handleDrawerToggle}>
          {!open ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <Divider />
      <List>
        {MenuTranslationsList.map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <NextLink
              className={'link'}
              href={`/${MenuRouteList[index]}`}
            >
              <ListItemButton
                onClick={() => handleListItemButtonClick(text)}
                title={text}
                aria-label={text}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {menuListIcons[index]}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    color: theme.palette.text.primary,
                    opacity: open ? 1 : 0,
                  }}
                />{" "}
              </ListItemButton>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default SideMenu

/*
  {menuListTranslations.map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <NextLink
              className={'link'}
              href={`/Dashboard/${menuRouteList[index]}`}
            >
              <ListItemButton
                onClick={() => handleListItemButtonClick(text)}
                title={text}
                aria-label={text}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {menuListIcons[index]}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    color: theme.palette.text.primary,
                    opacity: open ? 1 : 0,
                  }}
                />{" "}
              </ListItemButton>
            </NextLink>
          </ListItem>
        ))}
*/
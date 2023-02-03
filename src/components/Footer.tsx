import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <Box sx={{ width: "100%" }} style={{marginTop: "auto"}}>
      <BottomNavigation style={{ backgroundColor: "#f44336" }}>
        <BottomNavigationAction
          icon={<InstagramIcon />}
          className={styles.ig}
        />
        <BottomNavigationAction
          icon={<WhatsAppIcon />}
          className={styles.wpp}
        />
        <BottomNavigationAction
          icon={<TwitterIcon />}
          className={styles.twtt}
        />
        <BottomNavigationAction
          icon={<LocationOnIcon />}
          className={styles.loc}
        />
      </BottomNavigation>
    </Box>
  );
}

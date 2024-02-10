import { Box, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotiBody from "./NotiBody";

const Notification = () => {
  return (
    <div>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#E5E5E5",
        }}
        className="flex_center_display"
      >
        <Paper
          elevation={2}
          sx={{
            py: 3,
            px: { xs: 3, md: 8 },
            borderRadius: "20px",
            minWidth: { xs: "auto", md: "600px" },
            my: 3,
            mx: 3,
          }}
        >
          <Box sx={{ gap: 2, mb: 2 }} className="flex_center_display">
            <NotificationsIcon
              color="primary"
              sx={{
                width: { xs: "30px", md: "60px" },
                height: { xs: "30px", md: "60px" },
              }}
            />
            <Typography sx={{ fontSize: "28px", fontWeight: "bold" }}>
              Push Notification
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ mt: 2 }}>
            <NotiBody />
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default Notification;

import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const Design = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        padding: "20px",
        display: "flex",
        gap: 4,
      }}
    >
      <Box
        sx={{
          margin: 2,
          minHeight: "400px",
          minWidth: "300px",
          maxWidth: "357px",
          maxHeight: "462px",
          bgcolor: "white",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            height: { xs: "30px", md: "73px" },
            width: "100%",
            backgroundColor: "#4BCC4B",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "column",
            height: "100%",
            flexGrow: 1,
            px: 5,
          }}
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "22px",
            }}
          >
            Success!
          </Typography>
          <Box>
            <CheckCircleOutlineOutlinedIcon
              sx={{
                height: { xs: "30px", md: "86px" },
                width: { xs: "30px", md: "86px" },
                color: "#4BCC4B",
              }}
            />
          </Box>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "18px",
            }}
            align="center"
          >
            Your Notification has been Successfully Sent
          </Typography>
          <Button
            variant="contained"
            className="btn"
            sx={{
              bgcolor: "#4BCC4B",
              px: 4,
              "&:hover": {
                bgcolor: "#4BCC4B",
              },
            }}
          >
            OK
          </Button>
        </Box>
      </Box>

      {/* error box   */}

      <Box
        sx={{
          margin: 2,
          minHeight: "400px",
          minWidth: "300px",
          maxWidth: "357px",
          maxHeight: "462px",
          bgcolor: "white",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            height: { xs: "30px", md: "73px" },
            width: "100%",
            backgroundColor: "#D23B3B",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "column",
            height: "100%",
            flexGrow: 1,
            px: 5,
          }}
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "22px",
            }}
          >
            Failed!
          </Typography>
          <Box>
            <CancelOutlinedIcon
              sx={{
                height: { xs: "30px", md: "86px" },
                width: { xs: "30px", md: "86px" },
                color: "#D23B3B",
              }}
            />
          </Box>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "18px",
            }}
            align="center"
          >
            Something went wrong Error details here
          </Typography>
          <Button
            variant="contained"
            className="btn"
            sx={{
              bgcolor: "#D23B3B",
              px: 4,
              "&:hover": {
                bgcolor: "#D23B3B",
              },
            }}
          >
            OK
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Design;

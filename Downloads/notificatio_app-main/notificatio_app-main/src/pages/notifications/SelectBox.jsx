import { Box, MenuItem, Select, Typography } from "@mui/material";
import React from "react";

const SelectBox = ({ data }) => {
  return (
    <Select
      fullWidth
      size="small"
      defaultValue={data[0].val}
      sx={{
        backgroundColor: "#F5F5F5",
        border: "none",
      }}
      renderValue={(value) => {
        const item = data.find((elem) => elem.val === value);
        return (
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
              backgroundColor: "#F5F5F5",
              border: "none",
            }}
          >
            <img
              src={
                item && item.icon
                  ? `data:image/png;base64,${item.icon}`
                  : "/images/select_img_1.png"
              }
              style={{
                maxWidth: "35px",
                maxHeight: "35px",
              }}
              alt="img"
            />
            <Typography
              component="span"
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              {item.title ? item.title : "Select"}
            </Typography>
          </Box>
        );
      }}
    >
      {data.map((item, index) => (
        <MenuItem key={index} value={item.val}>
          {item.title}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectBox;

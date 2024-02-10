import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { getAppDataAction } from "../../actions/notificationAction";
import SelectBox from "./SelectBox";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const NotiBody = () => {
  const theme = useTheme();

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const makeDataFromArr = (data) => {
    let dummyArr = [];

    for (let key in data["app_name_bundle"]) {
      const icon = data["app_icons_base64"][key];
      let obj = {
        title: data["app_name_bundle"][key],
        val: key,
        icon: null,
      };

      if (icon) {
        obj = {
          ...obj,
          icon,
        };
      }
      dummyArr.push(obj);
    }

    setData(dummyArr);
  };

  const getDataOnLoad = async () => {
    setLoading(true);
    const res = await getAppDataAction();
    if (res.status) {
      makeDataFromArr(res.data);
    } else toast.error("Faild to fetch Select Data!");
    setLoading(false);
  };

  useEffect(() => {
    getDataOnLoad();
  }, []);

  return (
    <Fragment>
      <Box
        sx={{
          mb: 2,
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography
            sx={{
              color: "black",
              fontWeight: "bold",
              fontSize: "18px",
              mb: 1,
            }}
          >
            Select App
          </Typography>
          {!loading && data && data.length > 0 && <SelectBox data={data} />}
          {loading && (
            <Box
              sx={{
                width: "100%",
              }}
              className="flex_center_display"
            >
              <CircularProgress />
            </Box>
          )}
        </Box>

        <Typography
          sx={{
            color: "black",
            fontWeight: "bold",
            fontSize: "18px",
            mb: 1,
          }}
        >
          Options
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Button variant="contained" className="btn">
            Is Subscribed
          </Button>
          <Button variant="contained" color="inherit" className="btn">
            Country
          </Button>
        </Box>
      </Box>
      <FormControl>
        <FormLabel id="mode-lebel">
          <Typography
            sx={{
              color: "black",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Gender
          </Typography>
        </FormLabel>
        <RadioGroup row aria-labelledby="mode-lebel" defaultValue="sandbox">
          <FormControlLabel
            value="sandbox"
            control={<Radio />}
            label="Sandbox"
          />
          <FormControlLabel
            value="production"
            control={<Radio />}
            label="Production"
          />
        </RadioGroup>
      </FormControl>

      <Box sx={{ width: "100%", mt: 1.5 }}>
        <Typography
          sx={{
            color: "black",
            fontWeight: "bold",
            fontSize: "18px",
            mb: 1,
          }}
        >
          Device Token{" "}
          <Typography
            variant="span"
            sx={{
              color: "#878787",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            (Optional, 1 per line)
          </Typography>
        </Typography>

        <Box
          sx={{
            minHeight: "160px",
            borderRadius: "10px",
            backgroundColor: "#F5F5F5",
            p: 2,
          }}
        >
          <TextField
            variant="standard"
            type="text"
            placeholder="Enter Token "
            fullWidth
          />
        </Box>
        {/* <textarea
          rows={4}
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            backgroundColor: "#F5F5F5",
            border: "none",
          }}
          placeholder="Enter Token "
        /> */}
      </Box>

      <Box sx={{ width: "100%", mt: 1.5 }}>
        <Typography
          sx={{
            color: "black",
            fontWeight: "bold",
            fontSize: "18px",
            mb: 1,
          }}
        >
          Message
        </Typography>
        <textarea
          rows={4}
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            backgroundColor: "#F5F5F5",
            border: "none",
            borderRadius: "10px",
          }}
          placeholder="Enter your message"
        />
      </Box>

      <Grid container spacing={3} sx={{ mt: 0.1 }}>
        <Grid item xs={6}>
          <Button
            variant="contained"
            sx={{
              bgcolor: theme.palette.primary.light,
              color: theme.palette.primary.main,
              "&:hover": {
                bgcolor: theme.palette.primary.light,
              },
              py: 1.5,
            }}
            className="btn"
            fullWidth
          >
            Reset
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            className="btn"
            fullWidth
            sx={{ py: 1.5 }}
            onClick={() => {
              navigate("/design");
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default NotiBody;

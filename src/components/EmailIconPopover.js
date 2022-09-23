import React from "react";
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const EmailIconPopover = ({ children }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      {" "}
      <Box
        style={{ cursor: "pointer", position: "relative" }}
        aria-describedby={id}
        onClick={handleClick}
      >
        <i>{children}</i>
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box className="icons-popover">
          <Box sx={{ display: "flex", margin: "0.5rem 0" }}>
            <EmailOutlinedIcon style={{ margin: 0, color: "grey" }} />
            <Typography style={{ color: "grey" }} variant="p">
              Work: Example@sssss.com
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <EmailOutlinedIcon style={{ margin: 0 }} />
            <Typography variant="p">Personal: Example@sssss.com</Typography>
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default EmailIconPopover;

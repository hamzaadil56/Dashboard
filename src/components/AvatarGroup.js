import React from "react";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Chip from "@mui/material/Chip";

import AvatarGroup from "@mui/material/AvatarGroup";

export default function GroupAvatars() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <>
      <AvatarGroup max={4}>
        <Avatar
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          alt="Remy Sharp"
          src="./images/img_avatar.png"
        />
        <Avatar alt="Remy Sharp" src="./images/img_avatar.png" />
        <Avatar alt="Remy Sharp" src="./images/img_avatar.png" />
        <Avatar alt="Remy Sharp" src="./images/img_avatar.png" />
      </AvatarGroup>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Box>
          <Box style={{ width: "200px", height: "200px", display: "flex" }}>
            <img
              width={"50px"}
              height="50px"
              src="././images/img_avatar.png"
              alt=""
            />
            <Typography variant="h6">John</Typography>
          </Box>
          <Chip label="Employee" color="primary" />
        </Box>
      </Popover>
    </>
  );
}

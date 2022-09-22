import React from "react";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const AvatarPopOver = ({ person }) => {
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
      <Avatar
        style={{ cursor: "pointer" }}
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        alt="Remy Sharp"
        src={person.avatar}
      />
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
        <Box
          style={{
            width: "300px",
            height: "300px",
            // display: "flex",
            padding: "1rem",
          }}
        >
          <Box style={{ display: "flex" }}>
            <Box
              style={{
                width: "20%",
                height: "20%",
                display: "flex",
                alignItems: "center",
              }}
            >
              {" "}
              <Avatar sx={{ width: 56, height: 56 }} src={person.avatar} />
            </Box>
            <Box style={{ margin: "0 0.5rem", width: "70%" }}>
              <Typography variant="h6">{person.personName}</Typography>
              <Typography style={{ color: "grey" }} variant="p">
                {person.personName}|{person.position}
              </Typography>
            </Box>
          </Box>
          <Box style={{ margin: "1rem 0" }}>
            <Chip label="Employee" color="primary" />
          </Box>
          <Box sx={{ display: "flex" }}>
            <AlternateEmailIcon
              style={{ color: "grey", marginRight: "0.5rem" }}
            />
            <PhoneIcon style={{ color: "grey", marginRight: "0.5rem" }} />
            <WhatsAppIcon style={{ color: "grey", marginRight: "0.5rem" }} />
          </Box>
          <Box>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              neque adipisci deserunt iste repellat voluptates!
            </p>
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default AvatarPopOver;

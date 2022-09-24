import React from "react";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Button from "@mui/material/Button";

export const persons = [
  {
    id: 1,
    personName: "Jack",
    position: "Secretary",
    avatar: "./images/img_avatar.png",
  },
  {
    id: 2,
    personName: "Starc",
    position: "Director",
    avatar: "./images/img_avatar2.png",
  },
  {
    id: 3,
    personName: "Marcus",
    position: "Manager",
    avatar: "./images/img_avatar3.png",
  },
];

const PersonsListPopover = ({ children }) => {
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
      <Box
        style={{ cursor: "pointer", position: "relative" }}
        aria-describedby={id}
        onClick={handleClick}
      >
        <p>{children}</p>
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
        <Box
          style={{ borderRadius: "0% !important" }}
          className="persons-lists-popover"
        >
          <Box
            style={{
              border: "1px solid black",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="p">Contact Persons List</Typography>
            <Button style={{ margin: "0", padding: "0" }} onClick={handleClose}>
              <CancelOutlinedIcon style={{ color: "black" }} />
            </Button>
          </Box>
          {persons.map((person) => (
            <Box
              key={person.id}
              style={{
                display: "flex",
                margin: "0.5rem",
                padding: "0.5rem",
              }}
            >
              <Box>
                <Avatar sx={{ width: 54, height: 54 }} src={person.avatar} />
              </Box>
              <Box style={{ margin: "0 0.5rem" }}>
                <Typography variant="h6">{person.personName}</Typography>
                <Typography style={{ color: "grey" }} variant="p">
                  {person.personName}|{person.position}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Popover>
    </>
  );
};

export default PersonsListPopover;

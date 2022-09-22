import React from "react";
import Popover from "@mui/material/Popover";

const PopOver = ({ persons }) => {
  return (
    <div>
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
          <Box style={{ width: "200px", height: "200px" }}>
            <img width={"50px"} src={person.avatar} alt="" />
            <Typography variant="h6">{person.personName}</Typography>
          </Box>
        </Box>
      </Popover>
    </div>
  );
};

export default PopOver;

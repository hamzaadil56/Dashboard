import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import MenuIcon from "@mui/icons-material/Menu";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import GridOnIcon from "@mui/icons-material/GridOn";
import { Typography } from "@mui/material";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 200,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
      >
        <GridOnIcon />
        View
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          style={{ display: "flex", justifyContent: "space-between" }}
          onClick={handleClose}
          disableRipple
        >
          <FormGroup sx={{ display: "flex" }}>
            <FormControlLabel control={<Checkbox />} label="Contact Name" />
          </FormGroup>
          <MenuIcon />
        </MenuItem>
        <MenuItem
          style={{ display: "flex", justifyContent: "space-between" }}
          onClick={handleClose}
          disableRipple
        >
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Contact Person" />
          </FormGroup>
          <MenuIcon />
        </MenuItem>
        <MenuItem
          style={{ display: "flex", justifyContent: "space-between" }}
          onClick={handleClose}
          disableRipple
        >
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Email" />
          </FormGroup>
          <MenuIcon />
        </MenuItem>
        <MenuItem
          style={{ display: "flex", justifyContent: "space-between" }}
          onClick={handleClose}
          disableRipple
        >
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Website" />
          </FormGroup>
          <MenuIcon />
        </MenuItem>
        <MenuItem
          style={{ display: "flex", justifyContent: "space-between" }}
          onClick={handleClose}
          disableRipple
        >
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Address" />
          </FormGroup>
          <MenuIcon />
        </MenuItem>
        <MenuItem
          style={{ display: "flex", justifyContent: "space-between" }}
          onClick={handleClose}
          disableRipple
        >
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Country" />
          </FormGroup>
          <MenuIcon />
        </MenuItem>
        <MenuItem
          style={{ display: "flex", justifyContent: "space-between" }}
          onClick={handleClose}
          disableRipple
        >
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="City" />
          </FormGroup>
          <MenuIcon />
        </MenuItem>
        <MenuItem
          style={{ display: "flex", justifyContent: "space-between" }}
          onClick={handleClose}
          disableRipple
        >
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Phone No" />
          </FormGroup>
          <MenuIcon />
        </MenuItem>
        <MenuItem
          style={{ display: "flex", justifyContent: "space-between" }}
          onClick={handleClose}
          disableRipple
        >
          <Typography>Fax</Typography>
          <MenuIcon />
        </MenuItem>
        <MenuItem
          style={{ display: "flex", justifyContent: "space-between" }}
          onClick={handleClose}
          disableRipple
        >
          <Typography>Vat No</Typography>
          <MenuIcon />
        </MenuItem>
        <MenuItem
          style={{ display: "flex", justifyContent: "space-between" }}
          onClick={handleClose}
          disableRipple
        >
          <Typography>Registration No</Typography>
          <MenuIcon />
        </MenuItem>
        <MenuItem
          style={{ display: "flex", justifyContent: "space-between" }}
          onClick={handleClose}
          disableRipple
        >
          <Typography>Tags</Typography>
          <MenuIcon />
        </MenuItem>
        <MenuItem
          style={{ display: "flex", justifyContent: "space-between" }}
          onClick={handleClose}
          disableRipple
        >
          <Typography>You Owe</Typography>
          <MenuIcon />
        </MenuItem>
        <MenuItem
          style={{ display: "flex", justifyContent: "space-between" }}
          onClick={handleClose}
          disableRipple
        >
          <Typography>They Owe</Typography>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}

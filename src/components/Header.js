import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  //

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{ backgroundColor: "white", color: "black" }}
        position="static"
      >
        <Toolbar>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <Select
              style={{
                padding: "0 1rem !important",
                backgroundColor: "var(--light-grey)",
                borderRadius: "none",
              }}
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">Company1</MenuItem>
              <MenuItem value={2}>Company2</MenuItem>
              <MenuItem value={3}>Company3</MenuItem>
            </Select>
          </FormControl>

          <Button
            style={{
              color: "var(--dark-blue)",
              fontWeight: "600",
              textTransform: "capitalize",
              backgroundColor: "var(--light-grey)",
            }}
          >
            Dashboard
          </Button>
          <Search
            className="search-container"
            sx={{
              margin: "0 auto",
              marginLeft: "auto !important",
            }}
          >
            <SearchIconWrapper className="search-icon">
              <SearchIcon style={{ color: "#c4c4c4" }} />
            </SearchIconWrapper>
            <StyledInputBase
              className="search-input"
              style={{
                border: "1px solid #c4c4c4",
                borderRadius: "20px",
              }}
              placeholder="Search Full Website"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <NotificationsIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <HelpOutlineIcon style={{ color: "grey" }} />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <AppsOutlinedIcon style={{ color: "grey", marginLeft: "1rem" }} />
            </IconButton>
            <div>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                style={{ padding: "0 5px" }}
              >
                <AccountCircleOutlinedIcon style={{ fontSize: "35px" }} />
              </IconButton>
              <div>
                <Typography style={{ margin: 0, color: "grey" }} variant="p">
                  Profile
                </Typography>
              </div>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}

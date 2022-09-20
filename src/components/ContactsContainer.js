import * as React from "react";
import { Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import AppsIcon from "@mui/icons-material/Apps";
import AddIcon from "@mui/icons-material/Add";
import DataGridContainer from "./DataGridContainer";
import ViewButton from "./ViewBtn";
import OptionsBtn from "./OptionsBtn";
import "../App.css";

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
const AllContacts = () => {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      All Contacts
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Groups
    </Link>,
    <Typography key="3" color="text.primary">
      Sub-Group
    </Typography>,
  ];
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Typography
            sx={{ margin: "2rem", textAlign: "left" }}
            variant="h4"
            component="h4"
          >
            All Contacts
          </Typography>
        </div>
        <div>
          <Button
            sx={{ margin: "2rem" }}
            style={{ backgroundColor: "var(--btn_blue_color)" }}
            variant="contained"
          >
            New Contact <AddIcon style={{ fontSize: "20px" }} />
          </Button>
        </div>
      </Box>
      <Box
        sx={{
          padding: "0 2rem",
        }}
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Box>
      <div>
        <ButtonGroup
          sx={{ margin: "2rem" }}
          variant="outlined"
          aria-label="outlined button group"
        >
          <Button style={{ color: "black", borderColor: "black" }}>
            All Contacts
          </Button>
          <Button style={{ color: "black", borderColor: "black" }}>
            Employees
          </Button>
          <Button style={{ color: "black", borderColor: "black" }}>
            Organization
          </Button>
          <Button style={{ color: "black", borderColor: "black" }}>
            Individual
          </Button>
        </ButtonGroup>
      </div>
      <Box
        sx={{
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Search
          sx={{
            width: "30% !important",
          }}
        >
          <SearchIconWrapper>
            <SearchIcon style={{ color: "#c4c4c4" }} />
          </SearchIconWrapper>
          <StyledInputBase
            style={{
              border: "1px solid #c4c4c4",
              color: "#c4c4c4",
              borderRadius: "20px",
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box sx={{ display: "flex" }}>
          <Button>
            <AppsIcon />
            Export
          </Button>
          <ViewButton />
          <OptionsBtn />
        </Box>
      </Box>
      <DataGridContainer />
    </div>
  );
};

export default AllContacts;

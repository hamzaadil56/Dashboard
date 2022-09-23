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
import MenuItem from "@mui/material/MenuItem";

import AppsIcon from "@mui/icons-material/Apps";
import AddIcon from "@mui/icons-material/Add";
import DataGridContainer from "./DataGridContainer";
import ViewButton from "./ViewBtn";
import OptionsBtn from "./OptionsBtn";
import GroupBtn from "./GridBtn";
import Pagination from "@mui/material/Pagination";

import "../App.css";
import Select from "@mui/material/Select";

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
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="text.primary"
      href="/"
      onClick={handleClick}
    >
      All Contacts
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="text.primary"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Groups
    </Link>,
    <Typography key="3" color="inherit">
      Sub-Group
    </Typography>,
  ];
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Typography
            sx={{ margin: "2rem", textAlign: "left", fontWeight: "600" }}
            variant="h5"
            component="h5"
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
          sx={{ margin: "2rem 0.1rem 2rem 2rem", textTransform: "capitalize" }}
          variant="outlined"
          aria-label="outlined button group"
        >
          <Button
            style={{
              color: "black",
              borderColor: "black",
              textTransform: "capitalize",
            }}
          >
            All Contacts
          </Button>
          <Button
            style={{
              color: "black",
              borderColor: "black",
              textTransform: "capitalize",
            }}
          >
            Customers
          </Button>
          <Button
            style={{
              color: "black",
              borderColor: "black",
              textTransform: "capitalize",
            }}
          >
            Suppliers
          </Button>
          <Button
            style={{
              color: "black",
              borderColor: "black",
              textTransform: "capitalize",
            }}
          >
            Employees
          </Button>
          <Button
            style={{
              color: "black",
              borderColor: "black",
              textTransform: "capitalize",
            }}
          >
            Archive
          </Button>
        </ButtonGroup>
        <Select
          value={age}
          style={{
            width: "15vw",
            padding: "0.5rem 0",
          }}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="">Group</MenuItem>
          <MenuItem value={1}>Group1</MenuItem>
          <MenuItem value={2}>Group2</MenuItem>
          <MenuItem value={3}>Group3</MenuItem>
        </Select>
      </div>
      <Box
        sx={{
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Search
          className="search-container"
          sx={{
            width: "30% !important",
          }}
        >
          <SearchIconWrapper>
            <SearchIcon style={{ color: "#c4c4c4" }} />
          </SearchIconWrapper>
          <StyledInputBase
            className="search-input"
            style={{
              border: "1px solid #c4c4c4",
              color: "#c4c4c4",
              borderRadius: "20px",
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button>
            <AppsIcon />
            Export
          </Button>
          <ViewButton />
          <OptionsBtn />
          <GroupBtn />
        </Box>
      </Box>
      <DataGridContainer />
      <Pagination
        sx={{ margin: "0 auto", width: "50vw" }}
        count={10}
        variant="outlined"
        color="primary"
      />
    </div>
  );
};

export default AllContacts;

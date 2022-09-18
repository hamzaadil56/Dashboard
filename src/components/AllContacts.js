import React from "react";
import { Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

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
          <Button sx={{ margin: "2rem" }} variant="contained">
            New Contact
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
    </div>
  );
};

export default AllContacts;

import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "../App.css";
import GroupAvatars from "./AvatarGroup";
import { Button, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import PersonsListPopover from "./PersonsListPopover";
import Badge from "@mui/material/Badge";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "yellow",
      contrastText: "black",
    },
  },
});

const columns = [
  {
    field: "contact",
    headerName: "Contact",
    minWidth: 200,
    height: "20vh",
    headerClassName: "table-header",
    headerAlign: "center",
    cellClassName: "cell",
    align: "center",
    renderCell: () => {
      return (
        <Box>
          <Typography
            style={{ color: "var(--btn_blue_color)", fontSize: "large" }}
            variant="h6"
          >
            Contact Name English
          </Typography>
          <div>
            <Typography style={{ color: "var(--btn_blue_color)" }} variant="p">
              Arabic Name
            </Typography>
          </div>
          <Typography style={{ color: "varggrey" }} variant="p">
            A/C:78797887
          </Typography>
          <div>
            <Typography style={{ color: "grey" }} variant="p">
              Note: This is the contact relating jobs
            </Typography>
            <ThemeProvider theme={theme}>
              <Badge
                badgeContent={1}
                style={{ color: "black", backgroundColor: "yellow" }}
                color="neutral"
              >
                <Button
                  style={{ width: "100px", fontSize: "10px" }}
                  variant="contained"
                  color="primary"
                >
                  Organization{" "}
                </Button>
              </Badge>
            </ThemeProvider>
          </div>
          <div>
            <Typography
              style={{ color: "grey", fontSize: "small" }}
              variant="p"
            >
              Search Key Words: text1,text2,text3,text4,text5
            </Typography>
          </div>
        </Box>
      );
    },
  },
  {
    field: "persons",
    headerName: "Contact Persons",
    renderCell: () => {
      return (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GroupAvatars />
          <PersonsListPopover>
            <Typography
              style={{ color: "var(--btn_blue_color)", margin: "0 1rem" }}
              variant="p"
            >
              +3
            </Typography>
          </PersonsListPopover>
        </Box>
      );
    },
    minWidth: 200,
    height: "20vh",
    headerClassName: "table-header",
    headerAlign: "center",
    cellClassName: "cell",
    align: "center",
  },

  {
    field: "country",
    headerName: "Country",
    minWidth: 200,
    height: "20vh",
    headerClassName: "table-header",
    headerAlign: "center",
    cellClassName: "cell",
    align: "center",
  },
  {
    field: "tags",
    headerName: "Tags",
    minWidth: 200,
    height: "20vh",
    headerClassName: "table-header",
    headerAlign: "center",
    renderCell: () => {
      return (
        <Box className="chip-container">
          <Chip className="chip" label="Tag" color="success" />
          <Chip className="chip" label="Tag2" color="primary" />
          <Chip
            className="chip"
            label="Tag"
            style={{ backgroundColor: "purple", color: "white" }}
          />
          <Typography margin={"0 1rem"} color={"var(--btn_blue_color)"}>
            +3
          </Typography>
        </Box>
      );
    },
    cellClassName: "cell",
    align: "center",
  },
  //   {
  //     field: "city",
  //     headerName: "City",
  //     minWidth: 150,
  //     height: "10vh",
  //     headerClassName: "table-header",
  //     headerAlign: "center",
  //     cellClassName: "cell",
  //     align: "center",
  //   },
  //   {
  //     field: "contact_details",
  //     headerName: "Contact Details",
  //     minWidth: 150,
  //     height: "10vh",
  //     headerClassName: "table-header",
  //     headerAlign: "center",
  //     cellClassName: "cell",
  //     align: "center",
  //   },
  //   {
  //     field: "financial_details",
  //     headerName: "Financial Details",
  //     minWidth: 150,
  //     height: "10vh",
  //     headerClassName: "table-header",
  //     headerAlign: "center",
  //     cellClassName: "cell",
  //     align: "center",
  //   },
  //   {
  //     field: "they_owe",
  //     headerName: "They Owe",
  //     minWidth: 150,

  //     editable: true,
  //     headerAlign: "center",
  //     headerClassName: "table-header",
  //     cellClassName: "cell",
  //     align: "center",
  //   },
];

const rows = [
  {
    id: 1,
    contact: "Contact Name English",
    persons: <GroupAvatars />,
    country: "United States of America",
    tags: "tags",
  },
];

export default function DataGridDemo() {
  return (
    <Box
      sx={{
        height: 400,
        width: "70%",
        margin: "0 2rem",
        // "& .cell": {
        //   backgroundColor: "rgba(224, 183, 60, 0.55)",
        //   color: "#1a3e72",
        //   fontWeight: "600",
        // },
      }}
    >
      <DataGrid
        getRowHeight={() => "auto"}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[10, 20, 50]}
        checkboxSelection
        headerHeight={30}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}

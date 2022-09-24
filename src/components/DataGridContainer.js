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
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

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

    renderHeader: () => (
      <>
        <DescriptionOutlinedIcon style={{ color: "grey" }} />
        {"Contact"}
      </>
    ),
    minWidth: 300,
    height: "20vh",
    backgroundColor: "grey",
    headerClassName: "table-header",
    headerAlign: "left",
    cellClassName: "cell",
    align: "center",
    renderCell: () => {
      return (
        <Box>
          <Typography
            style={{
              color: "var(--btn_blue_color)",
              fontSize: "medium",
              fontWeight: "bold",
              textAlign: "center",
            }}
            variant="h6"
          >
            Contact Name English
          </Typography>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <DescriptionOutlinedIcon
              style={{ color: "grey", margin: 0, padding: 0 }}
            />
            <Typography
              style={{
                textAlign: "center",
                marginTop: "3px",
                color: "var(--btn_blue_color)",
              }}
            >
              3
            </Typography>
            <Typography
              style={{
                color: "var(--btn_blue_color)",
                textAlign: "right",
                marginLeft: "5rem",
              }}
              variant="p"
            >
              Arabic Name
            </Typography>
          </Box>
          <div>
            <Typography
              style={{
                margin: "2rem 4rem",
                textAlign: "center !important",
                width: "100%",
                color: "grey",
                fontWeight: "500",
              }}
              variant="p"
            >
              A/C:78797887
            </Typography>
          </div>
          <Box
            style={{
              display: "flex",
              margin: "1rem 0",
              justifyContent: "space-between",
            }}
          >
            <Typography
              style={{ color: "grey", textAlign: "left" }}
              variant="p"
            >
              Note: This is the contact relating jobs
            </Typography>
            <ThemeProvider theme={theme}>
              <Badge
                badgeContent={1}
                style={{ color: "black" }}
                color="neutral"
              >
                <Button
                  className="organization-btn"
                  style={{
                    width: "100px",
                    fontSize: "15px",
                    height: "30px",
                    textTransform: "capitalize",
                  }}
                  variant="contained"
                  color="primary"
                >
                  Organization
                </Button>
              </Badge>
            </ThemeProvider>
          </Box>

          <Typography
            style={{
              color: "grey",
              fontSize: "small",
              textAlign: "left !important",
            }}
            variant="p"
          >
            Search Key Words: text1,text2,text3,text4,text5
          </Typography>
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
          <Typography
            sx={{ textAlign: "center" }}
            margin={"0 2rem 0 2rem"}
            color={"var(--btn_blue_color)"}
          >
            +3
          </Typography>
        </Box>
      );
    },
    cellClassName: "cell",
    align: "center",
  },
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
        width: "75%",
        margin: "0 2rem",
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

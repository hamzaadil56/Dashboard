import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "../App.css";
import GroupAvatars from "./AvatarGroup";
import { Typography } from "@mui/material";

const columns = [
  {
    field: "contact",
    headerName: "Contact",
    minWidth: 200,
    height: "10vh",
    headerClassName: "table-header",
    headerAlign: "center",
    cellClassName: "cell",
    align: "center",
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
          <Typography
            style={{ color: "var(--btn_blue_color)", margin: "0 1rem" }}
            variant="p"
          >
            +3
          </Typography>
        </Box>
      );
    },
    minWidth: 200,
    height: "10vh",
    headerClassName: "table-header",
    headerAlign: "center",
    cellClassName: "cell",
    align: "center",
  },

  {
    field: "country",
    headerName: "Country",
    minWidth: 200,
    height: "10vh",
    headerClassName: "table-header",
    headerAlign: "center",
    cellClassName: "cell",
    align: "center",
  },
  {
    field: "tags",
    headerName: "Tags",
    minWidth: 200,
    height: "10vh",
    headerClassName: "table-header",
    headerAlign: "center",
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
    contact: "adsd",
    persons: <GroupAvatars />,
    country: "Pakistan",
    tags: "tags",
  },
];

export default function DataGridDemo() {
  return (
    <Box
      sx={{
        height: 400,
        width: "70%",
        margin: "0 auto",
        // "& .cell": {
        //   backgroundColor: "rgba(224, 183, 60, 0.55)",
        //   color: "#1a3e72",
        //   fontWeight: "600",
        // },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        headerHeight={30}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}

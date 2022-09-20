import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "../App.css";

const columns = [
  {
    field: "contact",
    headerName: "Contact Name",
    minWidth: 150,
    height: "10vh",
    headerClassName: "table-header",
    headerAlign: "center",
    cellClassName: "cell",
    align: "center",
  },
  {
    field: "persons",
    headerName: "Contact Persons",
    minWidth: 150,
    height: "10vh",
    headerClassName: "table-header",
    headerAlign: "center",
    cellClassName: "cell",
    align: "center",
  },
  {
    field: "tags",
    headerName: "Tags",
    minWidth: 150,
    height: "10vh",
    headerClassName: "table-header",
    headerAlign: "center",
    cellClassName: "cell",
    align: "center",
  },
  {
    field: "country",
    headerName: "Country",
    minWidth: 150,
    height: "10vh",
    headerClassName: "table-header",
    headerAlign: "center",
    cellClassName: "cell",
    align: "center",
  },
  {
    field: "city",
    headerName: "City",
    minWidth: 150,
    height: "10vh",
    headerClassName: "table-header",
    headerAlign: "center",
    cellClassName: "cell",
    align: "center",
  },
  {
    field: "contact_details",
    headerName: "Contact Details",
    minWidth: 150,
    height: "10vh",
    headerClassName: "table-header",
    headerAlign: "center",
    cellClassName: "cell",
    align: "center",
  },
  {
    field: "financial_details",
    headerName: "Financial Details",
    minWidth: 150,
    height: "10vh",
    headerClassName: "table-header",
    headerAlign: "center",
    cellClassName: "cell",
    align: "center",
  },
  {
    field: "they_owe",
    headerName: "They Owe",
    minWidth: 150,

    editable: true,
    headerAlign: "center",
    headerClassName: "table-header",
    cellClassName: "cell",
    align: "center",
  },
];

const rows = [
  {
    id: 1,
    contact: "Jon",
    persons: "Many Persons",
    tags: "tags",
    country: "Pakistan",
    city: "Karachi",
    contact_details: 1323123,
    financial_details: "123skfe",
    they_owe: 12323,
    you_owe: 123434,
  },
  {
    id: 1,
    contact: "Jon",
    persons: "Many Persons",
    tags: "tags",
    country: "Pakistan",
    city: "Karachi",
    contact_details: 1323123,
    financial_details: "123skfe",
    they_owe: 12323,
    you_owe: 123434,
  },
  {
    id: 1,
    contact: "Jon",
    persons: "Many Persons",
    tags: "tags",
    country: "Pakistan",
    city: "Karachi",
    contact_details: 1323123,
    financial_details: "123skfe",
    they_owe: 12323,
    you_owe: 123434,
  },
  {
    id: 1,
    contact: "Jon",
    persons: "Many Persons",
    tags: "tags",
    country: "Pakistan",
    city: "Karachi",
    contact_details: 1323123,
    financial_details: "123skfe",
    they_owe: 12323,
    you_owe: 123434,
  },
  {
    id: 1,
    contact: "Jon",
    persons: "Many Persons",
    tags: "tags",
    country: "Pakistan",
    city: "Karachi",
    contact_details: 1323123,
    financial_details: "123skfe",
    they_owe: 12323,
    you_owe: 123434,
  },
  {
    id: 1,
    contact: "Jon",
    persons: "Many Persons",
    tags: "tags",
    country: "Pakistan",
    city: "Karachi",
    contact_details: 1323123,
    financial_details: "123skfe",
    they_owe: 12323,
    you_owe: 123434,
  },
];

export default function DataGridDemo() {
  return (
    <Box
      sx={{
        height: 400,
        width: "100%",
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

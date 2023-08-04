import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Resource } from "../../types/resource";

// Columns configuration for the data table
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "ConsumedQuantity", headerName: "Consumed Quantity", width: 150 },
  { field: "Cost", headerName: "Cost", width: 90 },
  {
    field: "Date",
    headerName: "Date",
    width: 110,
  },
  {
    field: "InstanceId",
    headerName: "InstanceId",
    width: 180,
    sortable: false,
  },
  {
    field: "MeterCategory",
    headerName: "MeterCategory",
    width: 130,
  },
  {
    field: "ResourceGroup",
    headerName: "ResourceGroup",
    width: 120,
  },
  {
    field: "ResourceLocation",
    headerName: "ResourceLocation",
    width: 140,
  },
  {
    field: "Tags",
    headerName: "Tags",
    width: 240,
    valueGetter: (params: any) =>
      params.row.Tags && `${Object?.values(params.row.Tags)}`,
  },
  {
    field: "UnitOfMeasure",
    headerName: "UnitOfMeasure",
    width: 160,
  },
  {
    field: "Location",
    headerName: "Location",
    width: 140,
  },
  {
    field: "ServiceName",
    headerName: "ServiceName",
    width: 160,
  },
];

// Data table component
// It takes resourceList as props and maps the resourceList
const DataTable = (props: { resourceList: Resource[] }) => {
  const mappedResources = props.resourceList?.map((u, i) => {
    return { ...u, id: i + 1 };
  });
  return (
    <DataGrid
      rows={mappedResources}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 10 },
        },
      }}
      pageSizeOptions={[10, 20, 30, 40, 50]}
      checkboxSelection
    />
  );
};

export default DataTable;

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BasicSelect from "./base/Select";

export default function FormTable() {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const list = ["Add", "Edit", "View"];

  const rows = [
    {
      forms: "Demographics",
      fields: "2/25",
      survey: "Enable",
      actions: (
        <BasicSelect
          label={"Choose Actions"}
          list={list}
          value={selectedValue}
          onChange={handleChange}
        />
      ),
    },
    {
      forms: "Demographics",
      fields: "2/25",
      survey: "Enable",
      actions: (
        <BasicSelect
          label={"Choose Actions"}
          list={list}
          value={selectedValue}
          onChange={handleChange}
        />
      ),
    },
    {
      forms: "Demographics",
      fields: "2/25",
      survey: "Enable",
      actions: (
        <BasicSelect
          label={"Choose Actions"}
          list={list}
          value={selectedValue}
          onChange={handleChange}
        />
      ),
    },
    {
      forms: "Demographics",
      fields: "2/25",
      survey: "Enable",
      actions: (
        <BasicSelect
          label={"Choose Actions"}
          list={list}
          value={selectedValue}
          onChange={handleChange}
        />
      ),
    },
    {
      forms: "Demographics",
      fields: "2/25",
      survey: "Enable",
      actions: (
        <BasicSelect
          label={"Choose Actions"}
          list={list}
          value={selectedValue}
          onChange={handleChange}
        />
      ),
    },
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead
          style={{
            background: "#0E6ACE",
          }}
        >
          <TableRow>
            <TableCell
              style={{
                color: "white",
              }}
            >
              Forms (100g serving)
            </TableCell>
            <TableCell
              style={{
                color: "white",
              }}
              align="right"
            >
              Section/Fields
            </TableCell>
            <TableCell
              style={{
                color: "white",
              }}
              align="right"
            >
              Enabled as Survey
            </TableCell>
            <TableCell
              style={{
                color: "white",
              }}
              align="right"
            >
              Form Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.forms}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.forms}
              </TableCell>
              <TableCell align="right">{row.fields}</TableCell>
              <TableCell align="right">{row.survey}</TableCell>
              <TableCell align="right">{row.actions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

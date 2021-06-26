import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';

import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
// import TextField from '@material-ui/core/TextField';

const row = (
  x,
  i,
  header,
  handleRemove,
  startEditing,
  editIdx,
  handleSave,
  stopEditing
) => {
  const currentlyEditing = editIdx === i;
  return currentlyEditing ? (
    <TableRow key={`inline-form-${i}`} selectable={false}>
      {/* <InlineForm
        handleSave={handleSave}
        header={header}
        x={x}
        i={i}
        stopEditing={stopEditing}
      /> */}
    </TableRow>
  ) : (
    <TableRow key={`tr-${i}`} selectable={false}>
      {header.map((y, k) => (
        <TableCell key={`trc-${k}`}>{x[y.prop]}</TableCell>
      ))}
      <TableCell>
        <DeleteIcon onClick={() => handleRemove(i)} />
      </TableCell>
    </TableRow>
  );
};

export default ({
  data,
  header,
  handleRemove,
  startEditing,
  editIdx,
  handleSave,
  stopEditing,
  handleSort,
  sortDirection,
  columnToSort
}) => (
  <Table>
    <TableHead>
      <TableRow>
        {header.map((x, i) => (
          <TableCell key={`thc-${i}`}>
            <div
              style={{
                display: "flex",
                alignItems: "center"
              }}
              onClick={() => handleSort(x.prop)}
            >
              <span>{x.name}</span>
              {columnToSort === x.prop ? (
                sortDirection === "asc" ? (
                  <ArrowDropUpIcon />
                ) : (
                  <ArrowDropDownIcon />
                )
              ) : null}
            </div>
          </TableCell>
        ))}
        <TableCell />
      </TableRow>
    </TableHead>
    <TableBody>
      {data.map((x, i) =>
        row(
          x,
          i,
          header,
          handleRemove,
          startEditing,
          editIdx,
          handleSave,
          stopEditing
        )
      )}
    </TableBody>
  </Table>
);

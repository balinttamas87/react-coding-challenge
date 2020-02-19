import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable({ tableData, selected, copiedFrame }) {
  const classes = useStyles();
  let rows;
  let tableCells;
  let tableHeaders;
  
  if (tableData) {
    rows = [
        tableData[selected].row
    ];

    if (copiedFrame) {
        rows = [
            ...rows,
            copiedFrame.row
        ]
    }
    
    tableCells = tableData[selected].row.map((cellValue) => {
        const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

        return (
            <TableCell key={Object.values(cellValue)[0]}>
                { renderHTML(Object.values(cellValue)[0]) }
            </TableCell>
        );
      });

    tableHeaders = tableData[selected].row.map((cellValue) => {
        const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

        return (
            <TableCell key={Object.keys(cellValue)[0]}>
                { renderHTML(Object.keys(cellValue)[0]) }
            </TableCell>
        );
      });

  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            { tableData && tableHeaders }
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData && rows.map(row => (
            <TableRow key={row}>
                { tableCells }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

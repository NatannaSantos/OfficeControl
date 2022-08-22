import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import api from '../../services/api';
import useAuth from '../../hooks/useAuth';
import useAlert from '../../hooks/useAlert';

const columns = [
  { id: 'description', label: 'Descrição', minWidth: 170 },
  { id: 'date', label: 'Data', minWidth: 170 },
  { id: 'type', label: 'Tipo', minWidth: 170 },
  {
    id: 'value',
    label: 'Valor',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function TableExtract(transactions) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const {token} = useAuth();
  const { setMessage } = useAlert();
 
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  async function handleDeleteTransaction(id) {
    if (!window.confirm("Confirma a exclusão da transação selecionada?")) {
      return;
    }

      try {
        await api.deleteTransaction(token, id);
        window.location.reload();
      } catch (error) {
        if (error.response) {
          setMessage({
            type: "error",
            text: error.response.data,
          });
          return;
        }
      }
    }       


    const styles = {
      deleteButton: {
        cursor: "pointer"
      }
    }

    const rows = transactions.transactions;
    console.log("rows", rows);
    return (
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow >
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align} typetransaction={row.type} >
                            {column.id === "description" && <DeleteOutlineIcon style={styles.deleteButton} onClick={()=>handleDeleteTransaction(row.id)} />}
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    );
  }




  export default TableExtract;
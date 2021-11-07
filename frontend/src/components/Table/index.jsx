import React from 'react';
import { Text } from 'styles/index.js';
import { TableStyles } from './styles.js';

const Table = ({ tableInstance }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    state: { selectedRowIds }
  } = tableInstance;
  return (
    <TableStyles>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th key={index} {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <tr key={index} {...row.getRowProps()}>
                {row.cells.map((cell, index) => {
                  return (
                    <td key={index} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <Text color="violet" fontFamily="avenirRoman" size="xs">
          {selectedRowIds ? Object.keys(selectedRowIds).length : 0} employee(s)
        </Text>
        <Text fontFamily="avenirRoman" size="xs">
          {' '}
          selected
        </Text>
      </div>

      {/* selectedIds: selectedFlatRows.map((d) => d.original.id) */}
    </TableStyles>
  );
};

export default Table;

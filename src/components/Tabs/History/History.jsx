import React, { useState, useEffect } from 'react';
import BaseTable, { Column, AutoResizer } from 'react-base-table';
import { withStyles } from '@material-ui/styles';
import 'react-base-table/styles.css';
import { styles } from '../../../styles/HistoryTableStyles';
import { SORT_ORDER } from '../../../helpers/constants';
import { generateColumns, getDefaultSort, generateData } from '../../../helpers/helpers';
import AdvanceTableCell from './AdvanceTableCell';

const History = ({ data, classes }) => {
  useEffect(() => {
    setTableData(generateData(data));
  }, [data])
  
  const columns = generateColumns(data);
  const defaultSort = { ...getDefaultSort(columns) };

  const [sortState, setSortState] = useState(defaultSort);
  const [tableData, setTableData] = useState(generateData(data));

  const onColumnSort = ({ key, order }) => {
    setTableData(tableData.reverse());
    setSortState(
      {
        ...sortState,
        [key]: sortState[key] === SORT_ORDER.DESC ? null : order,
      }
    );
  }

  return (
    <div id="historyTable" className={classes.tableWrapper}>
      <AutoResizer>
        {({ width, height }) => (
          <BaseTable
            fixed
            width={width}
            height={height}
            data={tableData}
            sortState={sortState}
            onColumnSort={onColumnSort}
            components={{
              TableCell: AdvanceTableCell,
            }}
          >
            {columns.map(column => (
              <Column key={column.key} dataKey={column.key} {...column} />
            ))}
          </BaseTable>
        )}
      </AutoResizer>
    </div>
  )
};

export default withStyles(styles)(History);

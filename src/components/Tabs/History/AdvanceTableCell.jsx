import React from 'react';
import { toString } from '../../../helpers/helpers';

/**
 * Cell component for BaseTable
 */
const AdvanceTableCell = ({ className, cellData, column, columnIndex, rowData, rowIndex }) => {
  if (column.dataKey === '%Change') {
    let classNames = className;
    const percentChange = Number(cellData.slice(0, -1));
    if (percentChange > 0) {
      classNames = `${className} green`;
    } else if (percentChange < 0) {
      classNames = `${className} red`;
    }
    return (
      <div className={classNames}>{React.isValidElement(cellData) ? cellData : toString(cellData)}</div>
    )
  }
  return (
    <div className={className}>{React.isValidElement(cellData) ? cellData : toString(cellData)}</div>
  )
};

export default AdvanceTableCell;
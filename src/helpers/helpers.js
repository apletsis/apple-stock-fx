import moment from 'moment';
import { SORT_ORDER } from './constants';

export const arraymove = (arr, fromIndex, toIndex) => {
  var element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
}

export const generateColumns = (data) => {
  if (!data) return [];
  let keysArr = Object.keys(data[0]);
  // rearrange/remove keys to be like in design
  keysArr.splice(6, 2);
  keysArr.splice(1, 1);
  arraymove(keysArr, 1, 3);
  const columns = keysArr.map((key, index) => ({
    key: `${key} ${index}`,
    title: key !== 'StartDate' ? key : 'Date',
    dataKey: key,
    sortable: true,
    width: 200
  }));
  // no such data in API, so I added it manually
  columns.push({
    key: `%Change ${Math.floor(Math.random() * 10)}`,
    title: '% Change',
    dataKey: '%Change',
    sortable: true,
    width: 200
  });
  return columns;
};

export const getDefaultSort = (columns) => (
  columns.map(col => {
    return {
      [col.key]: SORT_ORDER.ASC,
    }
  })
);

// I haven't find &change data in API, so I calculated it like in this article 
// https://www.investopedia.com/terms/p/percentage-change.asp#:~:text=How%20Do%20I%20Calculate%20Percentage,multiply%20that%20number%20by%20100.
// StartDate field was formatted like in design
export const generateData = (data) => {
  const dataArr = data;
  const updatedArr = dataArr.map(d => ({
    ...d,
    '%Change': `${Math.round(((d['Close'] - d['Open']) / d['Open'] * 100) * 100) / 100}%`,
    'StartDate': moment(d['StartDate']).format('MMM D, YYYY')
  }))
  return updatedArr;
};

export const toString = (value) => {
  if (typeof value === 'string') return value;
  if (value === null || value === undefined) return '';
  return value.toString ? value.toString() : '';
}
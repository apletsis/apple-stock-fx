import axios from 'axios';

export const getPricesFromAPI = ({ period, precision }) => {
  const url = `https://test.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=${period}&Precision=${precision}&StartTime=02/22/2023&EndTime=03/01/2023%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume,ChartBars.Change`;
  return axios.get(url)
  .then(response => {
    return response;
  })
  .catch(error => {
    console.log(error)
  });
}

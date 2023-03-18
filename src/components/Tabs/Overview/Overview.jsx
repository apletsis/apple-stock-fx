import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const Overview = ({ data, xAxisDisplayBy }) => {
  const formatString = (value, end) => value.slice(0, end);

  const formattedOverviewData = data.map(({ Close, StartTime, StartDate }) => {
    const formattedTime = formatString(StartTime, -6)
    const formattedDate = formatString(StartDate, -5)
    return {
      Date: formattedDate,
      Time: formattedTime,
      Close
    }
  })

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={formattedOverviewData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#97beef' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#97beef' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey={xAxisDisplayBy === 'date' ? 'Date' : 'Time'} axisLine='false' tickLine='false' tickMargin={5} fontSize={12} />
          <YAxis
            dataKey='Close'
            domain={['dataMin', 'dataMax']}
            tickCount={5}
            tickMargin={5}
            allowDecimals={true}
            fontSize={13}
          />
          <Tooltip />
          <Area type='monotone' dataKey='Close' stroke='#419bf9' fillOpacity={1} fill='url(#colorUv)' />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

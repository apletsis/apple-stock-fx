import React, { useCallback, useEffect, useState } from 'react';
import { Tab, Tabs, withStyles } from '@material-ui/core';
import { Overview } from './Overview/Overview';
import TimeFrameSelectors from './TimeFrameSelectors/TimeFrameSelectors';
import { getPricesFromAPI } from '../../helpers/api';
import { TabPanel } from './TabPanel';
import { styles } from '../../styles/TabsStyles';
import History from './History/History';

const TabsComponent = ({ classes }) => {
  const [tab, setTab] = useState(0);
  const [data, setData] = useState([])
  const [timeFrame, setTimeFrame] = useState({
    units: 'Hours', amount: '168', label: '1 Week'
  })

  const fetchApiData = useCallback(async () => {
    try {
      const { data, status } = await getPricesFromAPI({
        precision: timeFrame.units,
        period: timeFrame.amount
      })
      if (status === 200 && data.length) {
        setData(() => data)
      }
    } catch (error) {
      console.log(error)
    }
  }, [timeFrame.amount, timeFrame.units])

  useEffect(() => {
    fetchApiData()
  }, [fetchApiData])

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <div>
      <Tabs value={tab} onChange={handleChange} classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}>
        <Tab label='Overview' classes={{ root: classes.tabRoot, selected: classes.tabSelected }} disableRipple />
        <Tab label='History' classes={{ root: classes.tabRoot, selected: classes.tabSelected }} disableRipple />
      </Tabs>
      <TimeFrameSelectors timeFrame={timeFrame} setTimeFrame={setTimeFrame} />
      <TabPanel value={tab} index={0}>
        <Overview
          data={data}
          xAxisDisplayBy={timeFrame.label && /week/gi.test(timeFrame.label) ? 'date' : 'time'}
        />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <History data={data} />
      </TabPanel>
    </div>
  );
};

export default withStyles(styles)(TabsComponent);

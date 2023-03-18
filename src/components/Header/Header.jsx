import React, { Fragment, useState, useRef, useEffect, useCallback } from 'react';
import useWebSocket from 'react-use-websocket';
import { Grid, withStyles } from '@material-ui/core';
import { styles } from '../../styles/HeaderStyles';
import moment from 'moment';
import { SOCKET_URL } from '../../helpers/constants';
import Badge from './Badge';

const Header = ({ classes, handleLoading }) => {
  const socketUrl = SOCKET_URL;
  const [response, setResponse] = useState({});
  const didUnmount = useRef(false);

  const { sendJsonMessage, getWebSocket } = useWebSocket(socketUrl, {
    onOpen: () => console.log('WebSocket connection opened.'),
    onClose: () => console.log('WebSocket connection closed.'),
    onMessage: (event) => {
      processMessages(event);
      handleLoading(false);
    },
    shouldReconnect: () => {
      return didUnmount.current === false;
    },
  });

  const processMessages = (event) => {
    const resp = JSON.parse(event.data)['s-aapl'];
    setResponse(resp)
  };

  const connect = useCallback(() => {
    const unSubscribeMessage = {
      type: 'UNSUBSCRIBE',
      instruments: ['s-aapl'],
    };
    sendJsonMessage(unSubscribeMessage);

    const subscribeMessage = {
      type: 'SUBSCRIBE',
      instruments: ['s-aapl'],
    };
    sendJsonMessage(subscribeMessage);
  }, [sendJsonMessage])

  useEffect(() => {
    connect();
  
    return () => {
      getWebSocket()?.close();
      didUnmount.current = true;
    }
  }, [connect, getWebSocket])


  const notEmptyResponse = response.last && response.lastUpdate && response.change && response.percentChange
  const headerDate = notEmptyResponse ?
    `As of: ${moment(response.lastUpdate).format(`MMM DD, YYYY hh:mm UTC ${response.utcOffset}`)}`
    : '';
  const positiveChange = response.change > 0;
  const zeroChange = response.change === 0;

  return (
    <Fragment>
      <Grid className={classes.headerMainGrid} container>
        <Grid item xs={8}>
          <h1 className={classes.headerBrandName}>Apple Inc</h1>
          <p className={classes.headerDate}>{headerDate}</p>
        </Grid>
        <Grid item xs={4}>
          {notEmptyResponse && (
            <Fragment>
              <div className={classes.headerPriceBlock}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  { !zeroChange && <Badge positiveChange={positiveChange} /> }
                  <span className={classes.headerPrice}>{response.last || ''}</span>
                </div>
                {!zeroChange &&
                  <span
                    className={`${classes.headerPriceAdditions} ${positiveChange ? 'positive' : 'negative'}`}
                  >
                    {response.change} ({response.percentChange}%)
                  </span>
                }
              </div>
            </Fragment>
          )}
        </Grid>
      </Grid>
    </Fragment>
  )
};

export default withStyles(styles)(Header);
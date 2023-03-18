import React from 'react';

export default function Badge(response) {
  const positiveChange = response.change > 0;
  const badgeColor = positiveChange ? '#507e11' : '#d91e18';
  return (
    <div style={{
      display: 'inline-flex',
      margin: '6px 5px 0 0',
      transform: `rotate(${!positiveChange ? '180deg' : 0})`
    }} >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16px'
        height='16px'
        viewBox='0 0 16 16'
      >
        <polygon
          fill={badgeColor}
          points='8,2 0,16 16,16'
          data-testid='direction_polygon'
        >
        </polygon>
      </svg>
    </div>
  )
}

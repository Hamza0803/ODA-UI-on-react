import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const salesData = [
  { time: '9:00 AM',  revenue: 4000, profit: 2400 },
  { time: '9:00 AM',  revenue: 4000, profit: 2400 },
  { time: '9:00 AM',  revenue: 4000, profit: 2400 },
  { time: '9:00 AM',  revenue: 4000, profit: 2400 },

  { time: '9:30 AM',  revenue: 3000, profit: 7598 },
  { time: '10:00 AM', revenue: 6800, profit: 2000 },
  { time: '10:30 AM', revenue: 3008, profit: 4980 },
  { time: '11:00 AM', revenue: 4800, profit: 900 },
  { time: '11:30 AM', revenue: 3100, profit: 8390 },
  { time: '12:00 PM', revenue: 7100, profit: 1390 },
  { time: '12:30 PM', revenue: 3220, profit: 4490 },
  { time: '1:00 PM', revenue: 6300, profit: 3390 },
  { time: '1:30 PM', revenue: 3000, profit: 4390 },
  { time: '2:00 PM', revenue: 6000, profit: 1390 },
  { time: '2:30 PM', revenue: 1800, profit: 7690 },
  { time: '3:00 PM', revenue: 2600, profit: 1390 },
  { time: '3:30 PM', revenue: 8000, profit: 4190 },
  { time: '4:00 PM', revenue: 1100, profit: 7090 },
];

const LineChartComponent = () => {
  return (
    <div style={{ overflowX: 'auto' }}>
      <LineChart
        className='bg-gray-950 bg-opacity-120'
        width={950}
        height={169}
        data={salesData}
        margin={{ right: 16, left:48, top:4, bottom: 2 }}
      >
        <CartesianGrid stroke="#ccc" strokeOpacity={0.3} strokeWidth={0.5} />
        <XAxis className='text-xs' dataKey="time" />
        <Tooltip content={<CustomTooltip />} />
        <Line type="monotone" dataKey="profit" stroke="#8b5cf6" dot={<CustomDot />} />
      </LineChart>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-slate-900 flex flex-col gap-0 rounded-md">
        <p className="text-sm text-lg text-white">{label}</p>
        <p className="text-sm text-indigo-400">
          Profit:
          <span className="ml-2">${payload[0].value}</span>
        </p>
      </div>
    );
  }
};

const CustomDot = (props) => {
  const { cx, cy, stroke, payload } = props;

  return (
    <svg
      x={cx - 5}
      y={cy - 5}
      width={10}
      height={10}
      viewBox="0 0 10 10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x={3} y={3} width={4} height={4} fill="#f59e0b" stroke="#f59e0b" strokeWidth="2" />
    </svg>
  );
};

export default LineChartComponent;

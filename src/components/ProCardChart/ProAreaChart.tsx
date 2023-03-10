import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

interface Props {
	colorGradient: string;
	strokeColor: string;
	dataKey: string;
}

const data = [
	{
	  name: "Page A",
	  uv: 4000,
	  pv: 2400,
	  amt: 2400
	},
	{
	  name: "Page B",
	  uv: 3000,
	  pv: 1398,
	  amt: 2210
	},
	{
	  name: "Page C",
	  uv: 2000,
	  pv: 9800,
	  amt: 2290
	},
	{
	  name: "Page D",
	  uv: 2780,
	  pv: 3908,
	  amt: 2000
	},
	{
	  name: "Page E",
	  uv: 1890,
	  pv: 4800,
	  amt: 2181
	},
	{
	  name: "Page F",
	  uv: 2390,
	  pv: 3800,
	  amt: 2500
	},
	{
	  name: "Page G",
	  uv: 3490,
	  pv: 4300,
	  amt: 2100
	}
  ];
const ProAreaChart = (props: Props) => {
	const {colorGradient, strokeColor,dataKey} = props;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id={`colorUv${colorGradient}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={colorGradient} stopOpacity={0.4} />
            <stop offset="95%" stopColor={colorGradient} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip cursor={{ stroke: 'none', strokeWidth: 2 }} />
        <Area
          type="monotone"
          dataKey={dataKey}
          stroke={strokeColor || "purple"}
          fill={`url(#colorUv${colorGradient})`}
          strokeWidth={3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
export default ProAreaChart;

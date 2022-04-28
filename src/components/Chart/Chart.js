import './Chart.scss'
import dataR from '../../assets/data.json'
import {
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
  } from "recharts";


const Chart = () => {
    const data = [
        { name: "ΠΕ197234", clients: 878983.24 },
        { name: "ΠΕ197596", clients: 365159.35 },
        { name: "ΠΕ292122", clients: 205507.51 },
        { name: "ΠΕ243059", clients: 75810.18 },
        { name: "ΠΕ243544", clients: 67878.88 },
        { name: "ΠΕ243009", clients: 144432.86 },
        { name: "ΠΕ243345", clients: 64567.09 },
      ];
    return (
        <div className='chart'>
            <div style={{ textAlign: "center" }}>
      <h1>Total Gas Consumption (kWh) by Client:</h1>
      <div className="App">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="clients"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="clients" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
        </div>
    )
}

export default Chart
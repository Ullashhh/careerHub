// import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";



// const data = [
//   { name: "Assignment 1", mark: 85 },
//   { name: "Assignment 2", mark: 90 },
//   { name: "Assignment 3", mark: 76 },
//   { name: "Assignment 5", mark: 93 },
//   { name: "Assignment 6", mark: 100 },
//   { name: "Assignment 7", mark: 69 },
//   { name: "Assignment 8", mark: 88 },
//   { name: "Assignment 9", mark: 96 },
//   { name: "Assignment 10", mark: 100 },
//   { name: "Assignment 11", mark: 100 },
//   { name: "Assignment 12", mark: 99 },
// ];

const data = [
  {
    name: "Assignment 1",
    mark: 75,
    total: 100,
    highest: 85,
  },
  {
    name: "Assignment 2",
    mark: 98,
    total: 100,
    highest: 99,
  },
  {
    name: "Assignment 3",
    mark: 75,
    total: 100,
    highest: 88,
  },
  {
    name: "Assignment 4",
    mark: 88,
    total: 100,
    highest: 90,
  },
  {
    name: "Assignment 5",
    mark: 44,
    total: 100,
    highest: 68,
  },
  {
    name: "Assignment 6",
    mark: 100,
    total: 100,
    highest: 100,
  },
  {
    name: "Assignment 7",
    mark: 55,
    total: 100,
    highest: 61,
  },
  {
    name: "Assignment 8",
    mark: 91,
    total: 100,
    highest: 91,
  },
  {
    name: "Assignment 9",
    mark: 59,
    total: 100,
    highest: 69,
  },
  {
    name: "Assignment 10",
    mark: 95,
    total: 100,
    highest: 98,
  }
];


const Statistics = () => {
    
    return (
      <div>
        <h1 className="text-center my-8 text-2xl text-violet-500">Assignment Statistics of the Course</h1>
        <div style={{ width: "100%", height: 550 }}>
          <ResponsiveContainer>
            <ComposedChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="highest"
                fill="#8884d8"
                stroke="#8884d8"
              />
              <Bar dataKey="total" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="mark" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        );
      </div>
    );
};

export default Statistics;
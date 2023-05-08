import React, { PureComponent } from "react";
import "./App.css";
import { PieChart, Pie, Cell } from "recharts";
import Circle from "./Circle";

const flowData = {
  nightData: {
    data: [
      { name: "active", value: 0, color: "#A396EC" },
      { name: "inActive", value: 360, color: "#D8D8D8" },
    ],
    startAngle: 45,
    endAngle: 134,
  },
  morningData: {
    data: [
      { name: "active", value: 135, color: "#A396EC" },
      { name: "inActive", value: 225, color: "#D8D8D8" },
    ],
    startAngle: -45,
    endAngle: 44,
  },
  afternoonData: {
    data: [
      { name: "active", value: 0, color: "#A396EC" },
      { name: "inActive", value: 360, color: "#D8D8D8" },
    ],
    startAngle: 225,
    endAngle: 314,
  },
  eveningData: {
    data: [
      { name: "active", value: 340, color: "#A396EC" },
      { name: "inActive", value: 0, color: "#D8D8D8" },
    ],
    startAngle: 135,
    endAngle: 224,
  },
};

const data = [{ name: "active", value: 100, color: "#D8D8D8" }];

export const Charts = () => {
    return (
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "20px",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "400px",
          height: "400px",
          marginLeft: "25%",
          position: "relative",
          marginTop: "10%",
        }}
      >
        <div className="heading">Flow Peaks</div>
        <div className="infoIcon">i</div>
        <hr className="hrOne" />
        <hr className="hrTwo" />

        <PieChart
          width={400}
          height={400}
          style={{
            position: "absolute",
          }}
        >
          <Pie
            data={data}
            cx={200}
            cy={200}
            innerRadius={70}
            outerRadius={85}
            fill="#D8D8D8"
            dataKey="value"
            isAnimationActive={false}
            cornerRadius={8}
            strokeOpacity={0}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
        <div style={{ position: "absolute", left: "55px", fontWeight: "bold" }}>
          Evening
        </div>
        <div style={{ position: "absolute", top: "90px", fontWeight: "bold" }}>
          Night
        </div>
        <div
          style={{ position: "absolute", right: "45px", fontWeight: "bold" }}
        >
          Morning
        </div>
        <div
          style={{ position: "absolute", bottom: "80px", fontWeight: "bold" }}
        >
          Afternoon
        </div>
        <PieChart width={400} height={400}>
          {Object.keys(flowData).length && Object?.keys(flowData).map((key, index) => {
            return (
              <Pie
                data={flowData[key].data}
                cx={200}
                cy={200}
                startAngle={flowData[key].startAngle}
                endAngle={flowData[key].endAngle}
                innerRadius={70}
                outerRadius={85}
                fill="#8884d8"
                isAnimationActive={false}
                dataKey="value"
                strokeOpacity={0}
                cornerRadius={8}
                key={"chart"+index}
              >
                {flowData[key].data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            );
          })}
        </PieChart>

        <Circle radius={90} color="" id="circleContainer" />
        <button className="buttonClass">April</button>
      </div>
    );
}

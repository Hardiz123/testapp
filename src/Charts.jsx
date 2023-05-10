import React, { PureComponent, useEffect, useState } from "react";
import "./App.css";
import { PieChart, Pie, Cell } from "recharts";
import Circle from "./Circle";

const backEndData = [
  {
    startTime: { hours: 0, minutes: 0 },
    endTime: { hours: 2, minutes: 30 },

  },
  {
    startTime: { hours: 8, minutes: 30 },
    endTime: { hours: 10, minutes: 30 },
  },
  {
    startTime: { hours: 11, minutes: 30 },
    endTime: { hours: 12, minutes: 30 },
  },
  {
    startTime: { hours: 15, minutes: 30 },
    endTime: { hours: 17, minutes: 0 },
  },
  {
    startTime: { hours: 17, minutes: 45 },
    endTime: { hours: 18, minutes: 15 },
  },
  {
    startTime: { hours: 20, minutes: 30 },
    endTime: { hours: 22, minutes: 30 },
  },
  {
    startTime: { hours: 23, minutes: 0 },
    endTime: { hours: 24, minutes: 0 },
  },
];

const getAngleFromTime = (time) => {
  const { hours, minutes } = time;
  const angle = (hours * 60 + minutes) * 0.25;
  return angle;
};




const data = [{ name: "active", value: 100, color: "#D8D8D8" }];

export const Charts = () => {
  const [angle, setAngle] = useState([])

  useEffect(() => {

    const anglesFromTime = backEndData.map((item) => {
      const { startTime, endTime } = item;
      const startAngle = getAngleFromTime(startTime);
      const endAngle = getAngleFromTime(endTime);
    
      return {
        startAngle,
        endAngle,
        value : endAngle - startAngle
      };
    });

    let wait = setTimeout(() => {
      setAngle(anglesFromTime)
    }, 2000)

    return () => {
      clearTimeout(wait)
    }
  
  },[])
  
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
          direction={"clockwise"}
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
      <div style={{ position: "absolute", right: "45px", fontWeight: "bold" }}>
        Morning
      </div>
      <div style={{ position: "absolute", bottom: "80px", fontWeight: "bold" }}>
        Afternoon
      </div>
      <PieChart width={400} height={400}>
        {
        angle.map((key, index) => {
          console.log(index, "this is index");
            return (
              <Pie
                data={[key]}
                cx={200}
                cy={200}
                startAngle={-(270+key.startAngle)}
                endAngle={-(270+key.endAngle)}
                innerRadius={70}
                
                // dataKey="value"
                direction={"anticlockwise"}
                outerRadius={85}
                valueKey={"value"}
                fill="#8884d8"
                isAnimationActive={false}
                strokeOpacity={0}
                cornerRadius={8}
                key={"chart" + index}
              />
            );
          })}
      </PieChart>

      <Circle radius={90} color="" id="circleContainer" />
      <button className="buttonClass">April</button>
    </div>
  );
};

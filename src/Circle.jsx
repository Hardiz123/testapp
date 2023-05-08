import React from "react";

function Circle(props) {
  const { radius, color } = props;

  const circleStyle = {
    width: radius * 2,
    height: radius * 2,
    borderRadius: "50%",
    backgroundColor: color,
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const numbers = [];
  for (let i = 0; i < 24; i += 0.5) {
    const numStyle = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transformOrigin: "center",
      fontSize: "8px",
      fontWeight: "normal",
      color: "#b0aeae",
    };

    let icon = i;
    if (i % 2 !== 0) {
      icon = "-";
    }
    if (i === 6 || i === 0 || i === 12 || i === 18) {
      numStyle.fontWeight = "bold";
      numStyle.color = "black";
      numStyle.fontSize = radius / 8 + "px";
    }
    const angle = (i / 24) * 2 * Math.PI;
    let x = Math.round(Math.sin(angle) * (radius - radius / 7 - 15));
    let y = -Math.round(Math.cos(angle) * (radius - radius / 7 - 15));

    if (icon !== "-") {
      // add some extra spacing for the numbers
      x -= Math.round(Math.sin(angle) * 10);
      y += Math.round(Math.cos(angle) * 12);
    }

    let transform = `translate(${x}px, ${y}px)`;



    if (icon === "-") {
      transform += `rotate(${(i / 24) * 360 - 90}deg)`;
    }
    numbers.push(
      <div key={i} style={{ ...numStyle, transform }}>
        {icon}
      </div>
    );
  }

  return (
    <div id="circleContainer" style={circleStyle}>
      {numbers}
    </div>
  );
}

export default Circle;

import React, { useEffect, useState, useRef } from "react";
import { LottieAnimation } from "react-lottie-tools";

import widgetAnim from "../../../assets/animations/irealiti-widgets.json";
export default function App() {
  //  const lottiee = React.useRef(null);

  return (
    <div className="App">
      <div style={{ height: "400px" }}></div>
      <LottieAnimation
        animation={widgetAnim}
        style={{ width: "60px", height: "60px" }}
      />
    </div>
  );
}

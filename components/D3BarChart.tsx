import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@d3/bar-chart-transitions";

function BarChartTransitions() {
  const chartRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "chart") return new Inspector(chartRef.current);
      return ["update"].includes(name);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={chartRef} />
      <p>Credit: <a href="https://observablehq.com/@d3/bar-chart-transitions">Bar Chart Transitions by D3</a></p>
    </>
  );
}

export default BarChartTransitions;
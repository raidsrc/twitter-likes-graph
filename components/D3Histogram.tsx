import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "eee867f901895c46";
import type { reformed } from "../pages/api/likes-combiner";
import type { NewTwitterLikeObject } from "../pages/api/fetch-local-twitter-likes";

const getLikesData = async () => {
  let data = await fetch("/api/fetch-local-twitter-likes")
  let dataJson = await data.json()
  return dataJson
}

const prepDataForGraphing = async () => {
  const data = await fetch("/api/fetch-local-twitter-likes")
  const dataJson: reformed = await data.json()
  
}

function Histogram() {
  const chartRef = useRef();

  useEffect(() => {
    // getLikesData()
  }, [])

  useEffect(() => {
    const runtime = new Runtime();
    const main = runtime.module(notebook, name => {
      if (name === "chart") return new Inspector(chartRef.current);
      if (name === "histogram") return true;
    });
    main.redefine("unemployment", fetch("/api/fetch-local-twitter-likes").then(response => response.json()));
    
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={chartRef} />
      <p>Credit: <a href="https://observablehq.com/d/eee867f901895c46">Histogram by raidsrc</a></p>
    </>
  );
}

export default Histogram;
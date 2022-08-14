import { useEffect, useRef } from "react"
import * as d3 from "d3"
import styles from '../styles/Chart.module.css'

function BarChart() {
  useEffect(() => {
    drawChart()
  }, [])
  const graphRef = useRef(null)

  function drawChart() {

    let bruh = d3.select(graphRef.current)
      .append("svg")
      .attr("width", 500)
      .attr("height", 500)
      .style("background-color", "#ffffff")
      .style("padding", 10)

    bruh.selectAll("rect")
      .data([12, 24, 54, 3, 42, 33, 60, 14])
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => 500 - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "red")

    const x = d3.scaleLinear()
      .domain([0, 1000])     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
      .range([0, 400]);
    bruh.append("g")
      .attr("transform", `translate(0, 400)`)
      .attr("color", "blue")
      .call(d3.axisBottom(x));

    const y = d3.scaleLinear()
      .domain([0, 100])
      .range([1000, 0])
    bruh.append("g")
      .attr("transform", `translate(50, 0)`)
      .attr("color", "blue")
      .call(d3.axisLeft(y))
  }

  return (
    <div ref={graphRef} className={styles.graph} />
  )
}

export default BarChart
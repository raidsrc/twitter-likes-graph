import { useEffect, useRef } from "react"
import * as d3 from "d3"
import styles from '../styles/Chart.module.css'

function BarChart() {
  useEffect(() => {
    drawChart()
  }, [])
  const graphRef = useRef(null)

  function drawChart() {
    const width = 600
    const height = 500
    const margins = {
      top: 50,
      bottom: 50,
      left: 50,
      right: 50
    }

    let bruh = d3.select(graphRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "#ffffff")
      .style("padding", 10)

    bruh.selectAll("lolhahaabcdefghijklmnopqrstuvwxyz")
      .data([12, 24, 54, 3, 42, 33, 60, 14])
      .enter()
      .append("rect")
      .attr("x", (d, i) => margins.left + i * 60)
      .attr("y", (d, i) => height - margins.bottom - 4 * d)
      .attr("width", 40)
      .attr("height", (d, i) => d * 4)
      .attr("fill", "red")

    const x = d3.scaleLinear()
      .domain([0, 100])     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
      .range([0, width - margins.left - margins.right]);
    bruh.append("g")
      .attr("transform", `translate(${margins.left}, ${height - margins.bottom})`)
      .attr("color", "blue")
      .call(d3.axisBottom(x));

    const y = d3.scaleLinear()
      .domain([0, 100])
      .range([height - margins.top - margins.bottom, 0])
    bruh.append("g")
      .attr("transform", `translate(${margins.left}, ${margins.top})`)
      .attr("color", "blue")
      .call(d3.axisLeft(y))
  }

  return (
    <div ref={graphRef} className={styles.graph} />
  )
}

export default BarChart
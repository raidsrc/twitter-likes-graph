import { useRef } from "react"

function BarChart () {
  const graphRef = useRef(null)
  return (
    <div ref={graphRef}>
      sup
    </div>
  )
}

export default BarChart
import { Bar } from "@nivo/bar";

export default function BarChart({ data }) {
  return (
    <Bar
      data={data}
      height={600}
      width={600}
    />
  )
}
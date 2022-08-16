import  { data } from "../components/pie";

import dynamic from "next/dynamic";

import homeStyles from "../styles/Home.module.css";
import Link from "next/link";

const MyResponsivePie = dynamic(()=> import ('../components/pie'), {ssr:false})

const Chart = () => {
  return (
    <div className={homeStyles.divchart}>
      <MyResponsivePie data={data} />
      <Link href={"/"}>go back</Link>
    </div>
  );
};
export default Chart;
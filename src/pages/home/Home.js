import React from "react";
import "./Home.css";
import { xAxisData } from "../../datas";
import Feature from "../../components/features/Feature";
import Chart from "../../components/Charts/Chart";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
export default function Home() {
  return (
    <div className="home">
      <Feature />
      <Chart grid title="Month Sale" data={xAxisData} dataKey="sale" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

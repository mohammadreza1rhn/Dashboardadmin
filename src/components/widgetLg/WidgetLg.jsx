import React from "react";
import "./WidgetLg.css";
import { transactions } from "../../datas";
export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButtun " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest TransActions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date </th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {transactions.map((item) => [
          <tr className="widgetLgTr" key={item.id}>
            <td className="widgetLgUser">
              <img src={item.img} alt="" className="widgetLgImg" />
              <span className="widgetLgName">{item.customer}</span>
            </td>
            <td className="widgetLgDate">{item.date}</td>
            <td className="widgetLgAmount">${item.amount}</td>
            <td className="widgetLgStatus">
              <Button type={item.status}></Button>
            </td>
          </tr>,
        ])}
      </table>
    </div>
  );
}

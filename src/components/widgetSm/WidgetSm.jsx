import React from "react";
import "./WidgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { newMembers } from "../../datas";
export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newMembers.map((item) => {
          return (
            <li className="widgetSmListItem" key={item.id}>
              <img src={item.img} alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
                <span className="widgetSmUserName ">{item.userName}</span>
                <span className="widgetSmUserTitle"> {item.title}</span>
              </div>
              <button className="widgetSmButton">
                <VisibilityIcon className="widgetSmIcon" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

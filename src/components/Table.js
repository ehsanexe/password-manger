import React from "react";
import Glass from "./Glass";
import "./table.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

export default function Table({ data }) {
  return (
    <Glass>
      <table className="table-container">
        <tr>
          <th>USER NAME</th>
          <th>EMAIL</th>
          <th>PASSWORD</th>
        </tr>

        {data.map((item) => {
          return (
            <tr>
              <td>
                {item.userName}
                <IconButton>
                  <ContentCopyIcon className="icon" />
                </IconButton>
              </td>
              <td>
                {item.email}
                <IconButton>
                  <ContentCopyIcon className="icon" />
                </IconButton>
              </td>
              <td>
                {item.password}
                <IconButton>
                  <ContentCopyIcon className="icon" />
                </IconButton>
                <IconButton>
                  <VisibilityIcon onCli className="icon" />
                </IconButton>
              </td>
            </tr>
          );
        })}
      </table>
    </Glass>
  );
}

import logo from "./logo.svg";
import "./App.css";
import BackgroundDecorations from "./components/BackgroundDecorations";
import Table from "./components/Table";
import KeyIcon from "@mui/icons-material/Key";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

function App() {
  const data = [
    {
      userName: "Bruce",
      email: "beuce@bat.com",
      password: "sjdlkajsdlksajd;l",
    },
    {
      userName: "Bruce",
      email: "beuce@bat.com",
      password: "sjdlkajsdlksajd;l",
    },
    {
      userName: "Bruce",
      email: "beuce@bat.com",
      password: "sjdlkajsdlksajd;l",
    },
    {
      userName: "Bruce",
      email: "beuce@bat.com",
      password: "sjdlkajsdlksajd;l",
    },
    {
      userName: "Bruce",
      email: "beuce@bat.com",
      password: "sjdlkajsdlksajd;l",
    },
    {
      userName: "Bruce",
      email: "beuce@bat.com",
      password: "sjdlkajsdlksajd;l",
    },
    {
      userName: "Bruce",
      email: "beuce@bat.com",
      password: "sjdlkajsdlksajd;l",
    },
    {
      userName: "Bruce",
      email: "beuce@bat.com",
      password: "sjdlkajsdlksajd;l",
    },
    {
      userName: "Bruce",
      email: "beuce@bat.com",
      password: "sjdlkajsdlksajd;l",
    },
    {
      userName: "Bruce",
      email: "beuce@bat.com",
      password: "sjdlkajsdlksajd;l",
    },
  ];
  return (
    <div
      className="password-manager-container"
      style={{ height: window.screen.height + 20 }}
    >
      {/* <div
        style={{
          position: "absolute",
          background: "red",
          width: window.screen.width,
          height: window.screen.height,
        }}
      /> */}
      <KeyIcon className="keyIcon" sx={{ fontSize: "6rem" }} />
      <Table data={data} />
      <HorizontalRuleIcon className="keyIcon" />
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import BackgroundDecorations from "./components/BackgroundDecorations";
import Table from "./components/Table";
import KeyIcon from "@mui/icons-material/Key";

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
  ];
  return (
    <div className="password-manager-container">
      <KeyIcon className="keyIcon" sx={{ fontSize: "6rem" }} />
      <Table data={data} />
    </div>
  );
}

export default App;

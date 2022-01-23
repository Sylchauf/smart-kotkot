import { CircularProgress } from "@mui/material";
import Logo from "./Logo";

const ScreenSplash: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Logo />
        <CircularProgress />
      </div>
    </div>
  );
};

export default ScreenSplash;

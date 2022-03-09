import { useMediaQuery, useTheme } from "@mui/material";

const useMobile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLandscape = useMediaQuery("(orientation: landscape)");
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return {
    isMobile,
    isLandscape: isLandscape && !isDesktop,
  };
};

export default useMobile;

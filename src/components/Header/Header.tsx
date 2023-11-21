import { Box } from "@chakra-ui/react";
import { ReactComponent as TimescaleLogo } from "../../assets/logo.svg";

export const Header = () => {
  return (
    <Box display="flex" h={50} alignItems="center">
      <TimescaleLogo />
    </Box>
  );
};

import { Box } from "@chakra-ui/react";
import type { Recipient } from "../../data";

export const RecipientListItem = ({
  recipient,
  onClick,
}: {
  recipient: Recipient;
  onClick: () => void;
}) => {
  return (
    <Box
      display="flex"
      p={2}
      paddingLeft={6}
      _hover={{
        background: "gray.300",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {recipient.email}
    </Box>
  );
};

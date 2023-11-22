import { useEffect, useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  List,
  ListItem,
} from "@chakra-ui/react";
import type { Recipient } from "../../data";

export const AutoComplete = ({
  availableRecipients,
  onSelect,
}: {
  availableRecipients: Recipient[];
  onSelect: (r: Recipient) => void;
}) => {
  const [displayItems, setDisplayItems] = useState(availableRecipients);

  useEffect(() => {
    const filtered = availableRecipients.filter((recipient) =>
      recipient.email.includes(inputValue.toLowerCase()),
    );
    setDisplayItems(filtered);
  }, [availableRecipients]);

  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => {
    const q = event.target.value ?? "";
    setInputValue(q);

    const filtered = availableRecipients.filter((recipient) =>
      recipient.email.includes(q.toLowerCase()),
    );
    setDisplayItems(filtered);
  };

  const handleFocus = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          value={inputValue}
          size="sm"
          placeholder="Search"
          onChange={handleChange}
          onFocus={() => handleFocus(true)}
          onBlur={() => handleFocus(false)}
        />
      </InputGroup>
      <Box
        position="absolute"
        bg="white"
        w={460}
        maxH={200}
        overflowY="auto"
        zIndex={6}
      >
        <List
          h="fit-content"
          borderRadius="4px"
          border={isOpen && "1px solid rgba(0, 0, 0, 0.1)"}
          boxShadow="6px 5px 8px rgba(0, 50, 30, 0.02)"
        >
          {isOpen &&
            displayItems.map((recipient) => {
              return (
                <ListItem
                  key={recipient.email}
                  display="flex"
                  px={2}
                  py={1}
                  borderBottom="1px solid rgba(0, 0, 0, 0.01)"
                  _hover={{
                    background: "gray.300",
                    cursor: "pointer",
                  }}
                  onMouseDown={() => onSelect(recipient)}
                >
                  {recipient.email}
                </ListItem>
              );
            })}
        </List>
      </Box>
    </>
  );
};

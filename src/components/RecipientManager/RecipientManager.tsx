import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  SimpleGrid,
  Box,
  Divider,
} from "@chakra-ui/react";

import { RecipientList } from "./RecipientList";
import { AutoComplete } from "./AutoComplete";

import { type Recipient, getRecipientsData } from "../../data";

export const RecipientManager = () => {
  const [recipients, setRecipients] = useState<Map<string, Recipient>>(
    new Map(),
  );

  useEffect(() => {
    const recipients = getRecipientsData();
    setRecipients(recipients);
  }, []);

  const [availableRecipients, setAvailableRecipients] = useState([]);
  const [selectedRecipients, setSelectedRecipients] = useState([]);

  useEffect(() => {
    const [available, selected] = splitRecipientsBySelection(recipients);

    setAvailableRecipients(available);
    setSelectedRecipients(selected);
  }, [recipients]);

  const select = (recipientsToSelect: Recipient[]) => {
    const updated = new Map(recipients);
    recipientsToSelect.forEach((r) => {
      updated.set(r.email, { ...r, isSelected: true });
    });
    setRecipients(updated);
  };

  const unselect = (recipientsToUnselect: Recipient[]) => {
    const updated = new Map(recipients);
    recipientsToUnselect.forEach((r) => {
      updated.set(r.email, { ...r, isSelected: false });
    });
    setRecipients(updated);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding={15}
    >
      <SimpleGrid columns={2} spacing={4}>
        <Card w={500} h={500}>
          <CardHeader h={112}>
            <Box paddingBottom={4}>Available Recipients</Box>

            <AutoComplete
              availableRecipients={availableRecipients}
              onSelect={(recipient) => select([recipient])}
            />
          </CardHeader>
          <Divider color="gray.300" />
          <CardBody>
            <RecipientList
              recipients={availableRecipients}
              onSelectRecipient={select}
            />
          </CardBody>
        </Card>
        <Card w={500} h={500}>
          <CardHeader h={112}>Selected Recipients</CardHeader>
          <Divider color="gray.300" />
          <CardBody>
            <RecipientList
              recipients={selectedRecipients}
              onSelectRecipient={unselect}
            />
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
};

export const splitRecipientsBySelection = (
  recipients: Map<string, Recipient>,
): [Recipient[], Recipient[]] => {
  const selected = [];
  const available = [];
  recipients.forEach((recipient) => {
    if (recipient.isSelected) {
      selected.push(recipient);
    } else {
      available.push(recipient);
    }
  });
  return [available, selected];
};

import { Box, SimpleGrid } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { RecipientListItem } from "./RecipientListItem";
import type { Company } from "./utils";
import type { Recipient } from "../../data";

export const ExpandableListItem = ({
  company,
  onToggle,
  onSelect,
}: {
  company: Company;
  onToggle: (c: Company) => void;
  onSelect: (rs: Recipient[]) => void;
}) => {
  return (
    <SimpleGrid key={company.domain} columns={1}>
      <CompanyListItem
        company={company}
        onToggle={onToggle}
        onClick={() => onSelect(company.recipients)}
      />
      {company.isExpanded && (
        <Box paddingLeft={6}>
          {company.recipients.map((recipient) => {
            return (
              <RecipientListItem
                key={recipient.email}
                recipient={recipient}
                onClick={() => onSelect([recipient])}
              />
            );
          })}
        </Box>
      )}
    </SimpleGrid>
  );
};

const CompanyListItem = ({
  company,
  onToggle,
  onClick,
}: {
  company: Company;
  onToggle: (c: Company) => void;
  onClick: () => void;
}) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      {company.isExpanded && (
        <ChevronDownIcon
          _hover={{
            background: "gray.300",
            cursor: "pointer",
          }}
          onClick={() => onToggle(company)}
        />
      )}
      {!company.isExpanded && (
        <ChevronRightIcon
          _hover={{
            background: "gray.300",
            cursor: "pointer",
          }}
          onClick={() => onToggle(company)}
        />
      )}
      <Box
        w="100%"
        p={2}
        _hover={{
          background: "#c8c8c8",
          cursor: "pointer",
        }}
        fontWeight={600}
        onClick={onClick}
      >
        {company.domain}
      </Box>
    </Box>
  );
};

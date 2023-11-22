import { useEffect, useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { RecipientListItem } from "./RecipientListItem";
import { ExpandableListItem } from "./ExpandableListItem";
import { type Recipient } from "../../data";
import { type Company, groupByDomain } from "./utils";

export const RecipientList = ({
  recipients,
  onSelectRecipient,
}: {
  recipients: Recipient[];
  onSelectRecipient: (rs: Recipient[]) => void;
}) => {
  const [companies, setCompanies] = useState<Map<string, Company>>(new Map());

  useEffect(() => {
    const groupedByDomain = groupByDomain(recipients);
    setCompanies(groupedByDomain);
  }, [recipients]);

  const toggleCompany = (company: Company) => {
    const updated = new Map(companies);
    updated.set(company.domain, {
      ...company,
      isExpanded: !company.isExpanded,
    });
    setCompanies(updated);
  };

  return (
    <SimpleGrid columns={1}>
      {Array.from(companies.values()).map((company) => {
        if (company.recipients.length < 2) {
          const onlyRecipient = company.recipients[0];
          return (
            <RecipientListItem
              key={onlyRecipient.email}
              recipient={onlyRecipient}
              onClick={() => onSelectRecipient([onlyRecipient])}
            />
          );
        }
        return (
          <ExpandableListItem
            key={company.domain}
            company={company}
            onToggle={toggleCompany}
            onSelect={onSelectRecipient}
          />
        );
      })}
    </SimpleGrid>
  );
};

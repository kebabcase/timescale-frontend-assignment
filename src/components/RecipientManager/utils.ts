import type { Recipient } from "../../data";

export interface Company {
  domain: string;
  isExpanded: boolean;
  recipients: Recipient[];
}

export const groupByDomain = (
  recipients: Recipient[],
): Map<string, Company> => {
  const companiesMap: { [key: string]: Recipient[] } = {};
  recipients.forEach((recipient) => {
    const [_, domain] = recipient.email.split("@");
    if (companiesMap[domain] == null) {
      companiesMap[domain] = [];
    }
    companiesMap[domain].push(recipient);
  });

  const domains = Object.keys(companiesMap).sort();
  const companies = new Map();
  domains.forEach((domain) => {
    companies.set(domain, {
      domain,
      isExpanded: true,
      recipients: companiesMap[domain],
    });
  });
  return companies;
};

import type { Recipient } from "../data";

export const mockRecipients = [
  {
    email: "ann@timescale.com",
    isSelected: false,
  },
  {
    email: "bob@timescale.com",
    isSelected: false,
  },
  {
    email: "brian@qwerty.com",
    isSelected: true,
  },
  {
    email: "james@qwerty.com",
    isSelected: false,
  },
  {
    email: "jane@awesome.com",
    isSelected: false,
  },
  {
    email: "kate@qwerty.com",
    isSelected: true,
  },
  {
    email: "mike@hello.com",
    isSelected: true,
  },
];

export const getRecipientsAsMap = (): Map<string, Recipient> => {
  const aMap = new Map();
  mockRecipients.forEach((r) => {
    aMap.set(r.email, r);
  });
  return aMap;
};

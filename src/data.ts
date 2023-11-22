import recipientsData from "./assets/recipientsData.json";

export interface Recipient {
  email: string;
  isSelected: boolean;
}

export const getRecipientsData = (): Map<string, Recipient> => {
  if (!recipientsData) {
    throw new Error("Unable to retrieve data");
  }

  const recipientsMap = new Map();
  recipientsData.forEach((recipient) => {
    recipientsMap.set(recipient.email, recipient);
  });
  return recipientsMap;
};

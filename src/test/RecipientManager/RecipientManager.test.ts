import { splitRecipientsBySelection } from "../../components/RecipientManager/RecipientManager";
import { getRecipientsAsMap, mockRecipients } from "../mockData";

describe("Recipient Manager", () => {
  describe("RecipientManager:splitRecipientsBySelection", () => {
    it("should split all recipients list into available and selected based on isSelected prop.", () => {
      const available = [];
      const selected = [];
      mockRecipients.forEach((r) => {
        r.isSelected ? selected.push(r) : available.push(r);
      });

      const mockData = getRecipientsAsMap();
      const [actualAvailable, actualSelected] =
        splitRecipientsBySelection(mockData);

      expect(actualAvailable.length).toEqual(available.length);
      expect(actualSelected.length).toEqual(selected.length);
    });
  });
});

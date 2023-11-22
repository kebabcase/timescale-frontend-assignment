import { groupByDomain } from "../../components/RecipientManager/utils";
import type { Recipient } from "../../data";
import { mockRecipients } from "../mockData";

describe("Recipient Manager", () => {
  describe("utils:groupByDomain", () => {
    it("should group recipients by their domain.", () => {
      const domainMap: { [key: string]: Recipient[] } = {};
      mockRecipients.forEach((r) => {
        const [_, d] = r.email.split("@");
        if (domainMap[d] == null) {
          domainMap[d] = [];
        }
        domainMap[d].push(r);
      });

      const actual = groupByDomain(mockRecipients);
      const domains = Array.from(actual.keys());
      expect(domains.length).toEqual(Object.keys(domainMap).length);
      domains.forEach((d) => {
        expect(actual.get(d).recipients.length).toEqual(domainMap[d].length);
      });
    });
  });
});

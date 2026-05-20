import { OUTDOORS_GUIDEBOOK_BY_ID } from "./outdoors-guide";

export type GuidebookEntry = {
  id: string;
  name: string;
  number: number;
  guidebook: {
    text: string;
    keywords: string[];
    beware: string[];
  };
};

export type Guidebook = Record<string, GuidebookEntry>;

export function getGuidebookEntry(cardId: string): GuidebookEntry | undefined {
  return OUTDOORS_GUIDEBOOK_BY_ID[cardId];
}

export function getCardMeaning(cardId: string): {
  text: string;
  keywords: string[];
  beware: string[];
} {
  const entry = getGuidebookEntry(cardId);

  if (!entry) {
    return {
      text: "",
      keywords: [],
      beware: [],
    };
  }

  return {
    text: entry.guidebook.text,
    keywords: entry.guidebook.keywords,
    beware: entry.guidebook.beware,
  };
}

import { ITag } from "@/interfaces/tag.interface";
import { atom, selector } from "recoil";

export const tagListState = atom<ITag[]>({
  key: "tagListState",
  default: [],
});

export const unSetTierTagSelector = selector<ITag[]>({
  key: "removeTagSelector",
  get: ({ get }) => get(tagListState).filter((tag) => !tag?.tier),
});

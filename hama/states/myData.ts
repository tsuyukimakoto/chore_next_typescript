import { atom, useRecoilState } from "recoil";

const MyDataState = atom<string>({
  key: "myData",
  default: "default my data",
});

export const useMyData = () => useRecoilState(MyDataState);

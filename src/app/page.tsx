"use client";

import { useForm } from "react-hook-form";
import {
  dummyMakerCodeOptions,
  dummyMakerList,
  dummyMakerNameOptions,
  dummyMakerOptions,
  onSearch,
} from "./Common";
import { AutoCompleteCompanyCommon } from "./components/AutoCompleteCompanyCommon";

export default function Home() {
  const { setValue, watch } = useForm();

  const onSelectMaker = (value: string) => {
    const [makerCode, makerName] = value.split(" - ");
    setValue("maker", value);
    setValue("makerCode", makerCode);
    setValue("makerName", makerName);
  };

  const onSelectMakerCode = (value: string) => {
    setValue("makerCode", value);
    const foundMaker = dummyMakerList.find((maker) => maker.code === value);
    setValue("maker", `${foundMaker?.code} - ${foundMaker?.name}`);
    setValue("makerName", foundMaker?.name);
  };

  const onSelectMakerName = (value: string) => {
    setValue("makerName", value);
    const foundMaker = dummyMakerList.find((maker) => maker.code === value);
    setValue("maker", `${foundMaker?.code} - ${foundMaker?.name}`);
    setValue("makerCode", foundMaker?.code);
  };

  return (
    <div className="flex flex-col mt-5">
      <AutoCompleteCompanyCommon
        options={dummyMakerOptions}
        value={watch("maker")}
        onSelect={onSelectMaker}
        onChange={(value: string) => setValue("maker", value)}
      />
      <AutoCompleteCompanyCommon
        className="my-5"
        value={watch("makerCode")}
        onSearch={(input: string, optionValue: string) =>
          onSearch(input, optionValue, ["code", "name"], "code", dummyMakerList)
        }
        onSelect={onSelectMakerCode}
        options={dummyMakerCodeOptions}
        onChange={(value: string) => setValue("makerCode", value)}
      />
      <AutoCompleteCompanyCommon
        value={watch("makerName")}
        onSearch={(input: string, optionValue: string) =>
          onSearch(input, optionValue, ["code", "name"], "name", dummyMakerList)
        }
        onSelect={onSelectMakerName}
        options={dummyMakerNameOptions}
        onChange={(value: string) => setValue("makerName", value)}
      />
    </div>
  );
}

"use client";

import { AutoComplete } from "antd";
import React from "react";

type AutoCompleteCompanyCommonType = {
  className?: string;
  options: {
    value: string | null;
    label: React.ReactElement | string;
    disabled: boolean;
  }[];
  onSelect: (value: string) => void;
  onSearch?: (input: string, optionValue: string) => boolean;
  onChange: (value: string) => void;
  value?: string;
};

export const AutoCompleteCompanyCommon: React.FC<
  AutoCompleteCompanyCommonType
> = ({ options, onSelect, onSearch, onChange, className, value }) => {
  return (
    <AutoComplete
      className={className}
      value={value}
      options={options}
      filterOption={(input, option) => {
        return option!.disabled
          ? true
          : onSearch
          ? onSearch(input, option!.value!)
          : option!.value!.includes(input);
      }}
      onSelect={(value) => onSelect(value)}
      onChange={(value) => onChange(value)}
    />
  );
};

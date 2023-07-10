"use client";
import Select from "react-select";

interface MultipleDropdownSelectProps {
  placholder: string;
  value?: string;
  options: DropdownSelectData[];
  onChange: (value: DropdownSelectData[]) => void;
}

interface DropdownSelectData {
  value: string;
  label: string;
}

const MultipleDropdownSelect = ({
  placholder,
  value,
  options,
  onChange,
}: MultipleDropdownSelectProps) => {
  return (
    <Select
      isMulti
      placeholder={placholder}
      isClearable
      options={options}
      value={value}
      onChange={(values) => {
        onChange(values && values.map((v) => v.value));
      }}
      formatOptionLabel={(option: any) => (
        <div className="flex flex-row items-center gap-3">
          <div>{option.label}</div>
        </div>
      )}
      classNames={{
        control: () => "p-3 border-2",
        input: () => "text-lg",
        option: () => "text-lg",
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 6,
        colors: {
          ...theme.colors,
          primary: "#4436f5",
          primary25: "#ffffff",
        },
      })}
    />
  );
};

export default MultipleDropdownSelect;

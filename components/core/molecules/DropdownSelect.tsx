"use client";
import Select from 'react-select';

interface DropdownSelectProps {
    placholder: string;
    value?: string;
    options: DropdownSelectData[]
    maxHeight?: number;
    onChange: (value: string) => void;
}

interface DropdownSelectData {
    value: string;
    label: string;
}

const DropdownSelect = ({
    placholder,
    value,
    options,
    maxHeight = 200,
    onChange,
}: DropdownSelectProps) => {
    return (
        <Select
        maxMenuHeight={maxHeight}
            placeholder={placholder}
            isClearable
            options={options}
            value={value}
            onChange={(value) => {
                onChange(value && value.value)
            }}
            formatOptionLabel={(option: any) => (
                <div className="flex flex-row items-center gap-3">
                    <div>
                        {option.label}
                    </div>
                </div>
            )}
            classNames={{
                control: () => 'p-3 border-2',
                input: () => 'text-lg',
                option: () => 'text-lg'
            }}
            theme={(theme) => ({
                ...theme,
                borderRadius: 6,
                colors: {
                    ...theme.colors,
                    primary: '#4436f5',
                    primary25: '#ffffff'
                }
            })}
        />
    );
}

export default DropdownSelect;
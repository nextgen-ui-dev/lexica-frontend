'use client';

import { useCallback, useState } from "react";
import { FieldValues, FieldErrors, UseFormRegister } from "react-hook-form";

interface TextAreaProps {
    id: string;
    label: string;
    placehoder?: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

const TextArea = ({
    id,
    label,
    placehoder,
    disabled,
    required,
    register,
    errors,
}: TextAreaProps) => {
    return (
        <div className="w-full relative">
            <textarea
                id={id}
                disabled={disabled}
                {...register(id, { required })}
                placeholder={placehoder}
                className={`peer w-full p-4 h-[20vh] font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed
                ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
                ${errors[id] ? 'focus:border-rose-500' : 'focus:border-primary-500'}
                `}
            />
        </div>
    );
}

export default TextArea;
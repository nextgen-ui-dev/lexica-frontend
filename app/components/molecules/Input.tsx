'use client';

import { useCallback, useState } from "react";
import { FieldValues, FieldErrors, UseFormRegister } from "react-hook-form";
import { IconType, icons } from "react-icons";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    icon?: IconType;
}

const Input = ({
    id,
    label,
    type = 'text',
    disabled,
    required,
    register,
    errors,
    icon: Icon
}: InputProps) => {
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [inputType, setInputType] = useState(type);

    const handleToggleVisibility = useCallback(() => {
        if (inputType === 'password') {
            setInputType('text');
        } else {
            console.log('object');
            setInputType('password');
        }
        setPasswordVisibility(!passwordVisibility);
    }, [inputType, setInputType, passwordVisibility, setPasswordVisibility]);

    return (
        <div className="w-full relative">
            {Icon && (
                <Icon
                    size={24}
                    className="absolute left-4 top-6"
                />
            )}
            <input
                id={id}
                disabled={disabled}
                {...register(id, { required })}
                placeholder=" "
                type={inputType}
                className={`peer w-full p-4 pt-8 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed
                ${Icon ? 'pl-14' : 'pl-4'}
                ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
                ${errors[id] ? 'focus:border-rose-500' : 'focus:border-primary-500'}
                `}
            />
            <label className={`absolute text-md duration-150 transform -translate-y-3 top-6 z-10 origin-[0] 
            ${Icon ? 'left-14' : 'left-4'}
            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-4
            ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
            `}>
                {label}
            </label>
            {type === 'password' && (
                passwordVisibility
                    ? <AiFillEyeInvisible
                        size={24}
                        className="absolute right-4 top-7 text-neutral-300 peer-focus:text-primary-600"
                        onClick={handleToggleVisibility}
                    />
                    : <AiFillEye
                        size={24}
                        className="absolute right-4 top-7 text-neutral-300 peer-focus:text-primary-600"
                        onClick={handleToggleVisibility}
                    />
            )}
        </div>
    );
}

export default Input;
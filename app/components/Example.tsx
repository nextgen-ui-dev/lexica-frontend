'use client';

import { useState } from "react";
import { FieldValues, RegisterOptions, UseFormRegisterReturn, useForm } from "react-hook-form";
import Container from "./core/layout/Container";
import { toast } from "react-hot-toast";
import Button from "./core/molecules/Button";
import Input from "./core/molecules/Input";
import TextArea from "./core/molecules/TextArea";

const Example = () => {
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: '',
            desc: '',
        }
    });

    return (
        <Container>
            <div className="h-screen flex flex-col items-center justify-center gap-4">
                <Input
                    id='email'
                    label='Email'
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <Input
                    id='password'
                    label='Password'
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                    type="password"
                />
                <TextArea
                    id="desc"
                    label="description"
                    register={register}
                    errors={errors}
                    placehoder="Hello world"
                    required
                />
                <Button
                    label="Normal"
                    onClick={() => { }}
                />
                <Button
                    label="Danger"
                    onClick={() => { }}
                    danger
                />
                <Button
                    label="Dissabled"
                    onClick={() => { }}
                    disabled
                />
                <Button
                    label="Click for Toast"
                    onClick={() => { toast.success('Hello World') }}
                />
            </div>
        </Container>
    );
}

export default Example;
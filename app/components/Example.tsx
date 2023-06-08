'use client';

import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Input from "./molecules/Input";
import Button from "./molecules/Button";
import Container from "./layout/Container";
import { toast } from "react-hot-toast";

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
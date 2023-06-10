'use client';

import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Container from "./core/layout/Container";
import { toast } from "react-hot-toast";
import Button from "./core/molecules/Button";
import Input from "./core/molecules/Input";
import TextArea from "./core/molecules/TextArea";
import useLoginModal from "../hooks/useLoginModal";

const Example = () => {
    const [isLoading, setIsLoading] = useState(false);

    const loginModal = useLoginModal();

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
            <div className="h-full flex flex-col items-center justify-center gap-4 py-8">
                <div className="flex flex-row gap-4 w-full">
                    <div className="h-[40vh] w-full bg-primary-600 rounded-lg"/>
                    <div className="h-[40vh] w-full bg-primary-300 rounded-lg"/>
                </div>
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
                    label="Textarea example"
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
                    label="Accent"
                    onClick={() => { }}
                    accent
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
                    label="Success Toast"
                    onClick={() => { toast.success('Hello World') }}
                />
                <Button
                    label="Failure Toast"
                    onClick={() => { toast.error('Hello World') }}
                />
                <Button
                    label="Modal Example"
                    onClick={() => loginModal.onOpen()}
                />
            </div>
        </Container>
    );
}

export default Example;
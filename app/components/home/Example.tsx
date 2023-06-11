'use client';

import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Container from "../core/layout/Container";
import { toast } from "react-hot-toast";
import Button from "../core/molecules/Button";
import Input from "../core/molecules/Input";
import TextArea from "../core/molecules/TextArea";
import useLoginModal from "../../hooks/useLoginModal";

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
            <div className="h-full flex flex-col items-center justify-center gap-12 py-8">
                <div className="flex flex-row gap-4 w-full">
                    <div className="h-[40vh] w-full bg-primary-600 rounded-lg" />
                    <div className="h-[40vh] w-full bg-primary-300 rounded-lg" />
                </div>
                <div className="w-full flex flex-col gap-4">
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
                </div>
                <div className="w-full grid grid-cols-2 gap-4">
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
                </div>
                <div className="w-full flex flex-col gap-4">
                    <Button
                        label="Success Toast"
                        onClick={() => { toast.success('Hello World Success') }}
                    />
                    <Button
                        label="Failure Toast"
                        onClick={() => { toast.error('Hello World Failure') }}
                        danger
                    />
                </div>
                <div className="w-full flex flex-col gap-4">
                    <Button
                        label="Modal Example"
                        onClick={() => loginModal.onOpen()}
                    />
                </div>
                <div className="w-full flex flex-col justify-center items-start">
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <h6>Heading 6</h6>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                </div>
            </div>
        </Container>
    );
}

export default Example;
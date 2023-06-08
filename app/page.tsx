'use client';

import { RegisterOptions, FieldValues, UseFormRegisterReturn, useForm } from "react-hook-form";
import Button from "./components/molecules/Button";
import Input from "./components/molecules/Input";
import { useState } from "react";
import { AiFillGithub } from 'react-icons/ai';

export default function Home() {
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
  const [isLoading, setIsLoading] = useState(false);
  return (
    <main>
      <div className="h-screen w-full max-w-4xl mx-auto gap-4 flex flex-col items-center justify-center">
        <Button
          label="Hello"
          onClick={() => { }}
        />
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
      </div>
    </main>
  )
}

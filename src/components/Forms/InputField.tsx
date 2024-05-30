"use client";

import React from "react";
import { Input } from "@nextui-org/react";
import { useFormContext, Controller } from "react-hook-form";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { EyeFilledIcon } from "./EyeFilledIcon ";


interface IInput {
  name: string;
  type?: string;
  size?: "lg" | "md" | "sm";
  value?: string | string[] | undefined;
  defaultValue?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
}

const FormInput = ({
  name,
  type = "text",
  size = "lg",
  value,
  id,
  defaultValue,
  placeholder,
  validation,
  label,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <>
            {type === "password" ? (
              <Input
                {...field}
                type={isVisible ? "text" : "password"}
                size={size}
                id={id}
                className="mt-2"
                placeholder={placeholder}
                value={value ? value : field.value}
                defaultValue={defaultValue ? defaultValue : field.value}
                aria-label={label}
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
              />
            ) : (
              <Input
                {...field}
                type={type}
                size={size}
                id={id}
                className="mt-2"
                placeholder={placeholder}
                value={value ? value : field.value}
                defaultValue={defaultValue ? defaultValue : field.value}
                aria-label={label}
              />
            )}
          </>
        )}
      />
      
    </>
  );
};

export default FormInput;

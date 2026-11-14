"use client";

import { forwardRef } from "react";
import { Input, type InputProps } from "./Input";

export type PasswordInputProps = Omit<InputProps, "type">;

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  function PasswordInput(props, ref) {
    return <Input ref={ref} type="password" {...props} />;
  }
);

export default PasswordInput;

"use client";

import { register, socialLogin } from "@unimart/auth/actions";
import { toast } from "@unimart/ui";
import { RegisterForm } from "@unimart/ui-patterns";
import { useState } from "react";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values: any) => {
    setIsLoading(true);
    try {
      const result = await register(values);
      if (result?.error) {
        toast.error(result.error);
      } else {
        toast.success("Account created successfully!");
      }
    } catch (_err) {
      toast.error("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider: "google") => {
    setIsLoading(true);
    try {
      await socialLogin({ provider });
    } catch (_err) {
      toast.error("An error occurred during social login.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RegisterForm onSubmit={onSubmit} onSocialLogin={handleSocialLogin} isLoading={isLoading} />
  );
}

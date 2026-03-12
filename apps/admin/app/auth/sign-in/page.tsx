"use client";

import { login, socialLogin } from "@unimart/auth/actions";
import { toast } from "@unimart/ui";
import { LoginForm } from "@unimart/ui-patterns";
import { useState } from "react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values: any) => {
    setIsLoading(true);
    try {
      const result = await login(values);
      if (result?.error) {
        toast.error(result.error);
      } else {
        toast.success("Success!");
      }
    } catch (_err) {
      toast.error("Catch error");
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

  return <LoginForm onSubmit={onSubmit} onSocialLogin={handleSocialLogin} isLoading={isLoading} />;
}

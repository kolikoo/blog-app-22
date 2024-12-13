import * as React from "react";
import { Input } from "@/components/ui/input"; 
import { Button } from "@/components/ui/button"; 
import { useState } from "react";
import { register } from "module";
import { useMutation } from "@tanstack/react-query"

const RegisterForm: React.FC = () => {
  const [registerPayload, setRegisterPayload] = useState({
    email: "",
    password: "",
  });

  const { mutate: handleRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn: register,
  });

  const handleSubmit = () => {
    if (!!registerPayload.email && !!registerPayload.password) {
      handleRegister(registerPayload);
    }
  };

  return (
    <form
      onClick={handleSubmit}
      className="m-auto flex w-full max-w-sm flex-col justify-start gap-4 space-x-2 dark:bg-black dark:text-black"
    >
      <div className="ml-2 w-[98%] dark:text-white">
        <label htmlFor="email">Email</label>
        <Input
          value={registerPayload.email}
          onChange={(e) => {
            setRegisterPayload({
              email: e.target.value,
              password: registerPayload.password,
            });
          }}
          name="email"
          type="email"
          placeholder="Email"
          required
        />
      </div>

      <div className="dark:text-white">
        <label htmlFor="password">Password</label>
        <Input
          value={registerPayload.password}
          onChange={(e) => {
            setRegisterPayload({
              password: e.target.value,
              email: registerPayload.email,
            });
          }}
          name="password"
          className="w-[100%]"
          type="password"
          placeholder="Password"
          required
        />
      </div>

      <Button
        className="w-[100%] dark:bg-blue-700 dark:text-white"
        type="submit"
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;


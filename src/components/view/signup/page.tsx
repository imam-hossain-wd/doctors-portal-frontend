"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/InputField";
import { Button } from "@nextui-org/react";
import { SubmitHandler } from "react-hook-form";

const Signup = () => {
  type FormValues = {
    Email?: string;
    password?: string;
  };

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      console.log("hello----");
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <h1>This is signup page.....</h1>

      <Form submitHandler={onSubmit}>
        <div className="">
          <FormInput
            name="email"
            type="email"
            label="Email"
            placeholder="Enter your email"
            validation={{ required: "Email is required" }}
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            validation={{ required: "Password is required" }}
          />
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default Signup;

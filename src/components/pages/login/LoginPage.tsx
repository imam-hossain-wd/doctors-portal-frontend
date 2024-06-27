
'use client'
import Form from "@/components/ui/Forms/Form";
import FormInput from "@/components/ui/Forms/InputField";
import { useLoginUserMutation } from "@/redux/api/authApi";
import { LoginProps } from "@/types";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

const LoginPage = () => {
    const [loginUser] = useLoginUserMutation();
    const router = useRouter();

    const onSubmit: SubmitHandler<LoginProps> = async (loginData) => {
      try {
        
        const res = await loginUser(loginData);

        if (res?.data?.statusCode === 200) {
          alert(res?.data?.message);
          router.push('/')
          //@ts-ignore
        } else if (res?.error?.data?.success === false) {
          //@ts-ignore
          alert(res?.error?.data?.message);
        } else {
          alert("Something went wrong");
        }
        console.log(res, "login user result----");
      } catch (err: any) {
        console.error(err.message);
      }
    };

    return (
        <div className="w-[90%] lg:w-[40%] shadow mx-auto mt-20 border border-gray-200 p-5 rounded ">
      <h1 className="text-center text-2xl font-semibold">Log in</h1>

      <Form submitHandler={onSubmit}>
        <div className="w-4/5 flex flex-col mx-auto">
          <FormInput
            name="email"
            type="text"
            size="md"
            label="Email"
            placeholder="Enter your email"
            validation={{ required: "Email is required" }}
          />
          <FormInput
            name="password"
            type="password"
            size="md"
            label="Password"
            placeholder="Enter your password"
            validation={{ required: "Password is required" }}
          />
          <Button className="mt-5" type="submit">
            Log in
          </Button>
        </div>
      </Form>
    </div>
    );
};

export default LoginPage;
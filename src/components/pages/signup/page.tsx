// "use client";

// import Form from "@/components/ui/Forms/Form";
// import FormInput from "@/components/ui/Forms/InputField";
// import { useCreateUserMutation } from "@/redux/api/authApi";
// import { SignupProps } from "@/types";
// import { Button } from "@nextui-org/react";
// import { SubmitHandler, useForm } from "react-hook-form";

// const Signup = () => {
//   const [createUser] = useCreateUserMutation();


//   const onSubmit: SubmitHandler<SignupProps> = async (userData) => {
//     try {

//       console.log(userData, 'userData');
//       const res = await createUser(userData);
//       if(res?.data?.statusCode === 200){
//         alert(res?.data?.message)
//       }
//       //@ts-ignore
//       else if (res?.error?.data?.success === false){
//         //@ts-ignore
//         alert(res?.error?.data?.message)
//       } else {
//         alert("Something went wrong")
//       }

//       console.log(res, "create user result----");
//     } catch (err: any) {
//       console.error(err.message);
//     }
//   };

//   return (
//     <div className="w-[40%] shadow mx-auto mt-20 border border-gray-200 p-5 rounded ">
//       <h1 className="text-center text-2xl font-semibold">Sign up </h1>

//       <Form submitHandler={onSubmit}>
//         <div className="w-4/5 flex flex-col mx-auto">
//           <FormInput
//             name="name"
//             type="text"
//             size="md"
//             label="Name"
//             placeholder="Enter your name"
//             validation={{ required: "Email is required" }}
//           />
//           <FormInput
//             name="phone_number"
//             type="text"
//             size="md"
//             label="Phone"
//             placeholder="Enter your phone"
//             validation={{ required: "Email is required" }}
//           />
//           <FormInput
//             name="email"
//             type="text"
//             size="md"
//             label="Email"
//             placeholder="Enter your email"
//             validation={{ required: "Email is required" }}
//           />
//           <FormInput
//             name="password"
//             type="password"
//             size="md"
//             label="Password"
//             placeholder="Enter your password"
//             validation={{ required: "Password is required" }}
//           />
//           <Button className="mt-5" type="submit">
//             Sign up
//           </Button>
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default Signup;


"use client";

import Form from "@/components/ui/Forms/Form";
import FormInput from "@/components/ui/Forms/InputField";
import { useCreateUserMutation } from "@/redux/api/authApi";
import { SignupProps } from "@/types";
import { Button } from "@nextui-org/react";
import { SubmitHandler } from "react-hook-form";

const Signup = () => {
  const [createUser] = useCreateUserMutation();

  const onSubmit: SubmitHandler<SignupProps> = async (userData) => {
    try {
      console.log(userData, 'userData');
      const res = await createUser(userData);
      if (res?.data?.statusCode === 200) {
        alert(res?.data?.message);
        //@ts-ignore
      } else if (res?.error?.data?.success === false) {
        //@ts-ignore
        alert(res?.error?.data?.message);
      } else {
        alert("Something went wrong");
      }
      console.log(res, "create user result----");
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className="w-[40%] shadow mx-auto mt-20 border border-gray-200 p-5 rounded ">
      <h1 className="text-center text-2xl font-semibold">Sign up</h1>

      <Form submitHandler={onSubmit}>
        <div className="w-4/5 flex flex-col mx-auto">
          <FormInput
            name="name"
            type="text"
            size="md"
            label="Name"
            placeholder="Enter your name"
            validation={{ required: "Name is required" }}
          />
          <FormInput
            name="phone_number"
            type="text"
            size="md"
            label="Phone"
            placeholder="Enter your phone"
            validation={{ required: "Phone number is required" }}
          />
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
            Sign up
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Signup;


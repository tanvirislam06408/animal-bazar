'use client'
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, IconCalendar, Input, Label, TextField, toast } from "@heroui/react";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import loginAnimation from '../../../../public/login.json'
import { IoLogoGoogle } from "react-icons/io";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";





const LoginPage = () => {




    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formInfo = Object.fromEntries(formData.entries());
        const {  email, password} = formInfo;
        const { data, error } = await authClient.signIn.email({
        
            email: email,
            password: password,
            callbackURL: "/"
        })

        if (data?.user) {
            Swal.fire({
                icon: "success",
                title: `Login Successfully as ${data?.user.name} !`, 
                showConfirmButton: false,
                timer: 1800
            });
            e.target.reset();

        }

        if (error) {
            Swal.fire({
                title: `${error.message}`,
                icon: "error",
                draggable: true
            })
             e.target.reset();
        }


    }



    return (
        <div className="h-screen  container mx-auto flex flex-col md:flex-row items-center px-4 md:px-0">
            <div className="flex-1 max-w-[500px]">
                <Lottie animationData={loginAnimation} />
            </div>
            <div className="border flex flex-col flex-1 items-center justify-center  py-8 border-[#9AD872] rounded-2xl w-full">
                <h1 className="font-semibold text-xl">Login Now</h1>
                <Form onSubmit={handleSubmit} className="flex p-5 justify-center w-96 flex-col gap-4">
    
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    {/* password */}
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your Password" />
                        <FieldError />

                    </TextField>

                    <div className="flex  gap-2">
                        <Button type="submit"  className={'w-full bg-[#9AD872] '}>
                            Login
                        </Button>
                    </div>
                    <p className="text-sm">Don't Have An Account ? <Link href={'/register'} className="text-blue-500">Register</Link></p>
                </Form>
                or
                <Button className="w-full max-w-85" variant="tertiary">
                    <IoLogoGoogle />
                    Sign in with Google
                </Button>
            </div>
        </div>
    );
};

export default LoginPage;
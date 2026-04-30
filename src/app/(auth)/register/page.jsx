'use client'
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, IconCalendar, Input, Label, TextField, toast } from "@heroui/react";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import registerAnimation from '../../../../public/register.json'
import { IoLogoGoogle } from "react-icons/io";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import SocialBtn from "@/components/shared/SocialBtn";
import { useRouter } from "next/navigation";





const RegisterPage = () => {
;
    const router=useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formInfo = Object.fromEntries(formData.entries());
        const { name, email, password, image } = formInfo;
        const { data, error } = await authClient.signUp.email({
            name: name,
            password: password,
            email: email,
            photo: image,
            
        })


        if (data?.user) {
            Swal.fire({
                icon: "success",
                title: `SignUp Successfully as ${data?.user.name}`,
                showConfirmButton: false,
                timer: 1800
            });

            e.target.reset();
            router.push('/login')

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
                <Lottie animationData={registerAnimation} />
            </div>
            <div className="border flex flex-col flex-1 items-center justify-center  py-8 border-[#9AD872] rounded-2xl w-full">
                <h1 className="font-semibold text-xl">Register Now</h1>
                <Form onSubmit={handleSubmit} className="flex p-5 justify-center w-96 flex-col gap-4">
                    {/* name */}
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                    >
                        <Label>Your Name</Label>
                        <Input placeholder="write your name" />
                        <FieldError />
                    </TextField>

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

                    {/* photo url */}
                    <TextField
                        isRequired
                        name="image"
                        type="url"
                    >
                        <Label>Photo Url</Label>
                        <Input placeholder="Enter your Photo Url" />
                        <FieldError />
                    </TextField>

                    <div className="flex  gap-2">
                        <Button type="submit" className={'w-full bg-[#9AD872]'}>
                            Register
                        </Button>
                    </div>
                    <p className="text-sm">Already Have An Account ? <Link href={'/login'} className="text-blue-500">Login</Link></p>
                </Form>
                or
                <SocialBtn />
            </div>
        </div>
    );
};

export default RegisterPage;
'use client'
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField, toast } from "@heroui/react";
import { redirect } from "next/navigation";
import React from 'react';

const BookingForm = () => {

const showToast = () => {
  toast({
    title: "Booking Successful",
    description: "Your booking has been submitted",
    variant: "success",
  });
};


    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData=new FormData(e.currentTarget);
        const formInfo=Object.fromEntries(formData.entries());
        if(formInfo){
            showToast()
        }
        
    }


    return (
        <div className='flex flex-col  justify-center items-center h-full w-full border rounded-2xl shadow' >
            <h1 className="text-2xl font-bold mt-5">Confirm Your Booking</h1>
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


                <TextField
                    isRequired
                    name="address"
                    type="text"
                >
                    <Label>Address</Label>
                    <Input placeholder="Enter your Address" />
                    <FieldError />
                </TextField>

                {/* phone */}
                <TextField
                    isRequired
                    name="phone"
                    type="text"
                >
                    <Label>Phone</Label>
                    <Input placeholder="Enter your Phone Number" />
                    <FieldError />
                </TextField>








                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default BookingForm;
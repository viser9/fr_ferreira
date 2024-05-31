"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { CalendarForm } from "@/components/CalendarForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog";
import CustButton from "@/components/custom-components/CustButton";

export default function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="flex justify-center items-center sm:h-screen">
      <div className="max-w-md w-full mx-auto rounded-2xl md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-gradient-to-b dark:from-neutral-950 dark:to-slate-700">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome to Ferrier
        </h2>
        <p className="font-medium text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Please enter your details for us to know you better
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="fullname">Full name</Label>
              <Input id="fullname" placeholder="Tyler" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="dob">DOB</Label>
              <Input id="dob" placeholder="dd/mm/yy" type="date" />
            </LabelInputContainer>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="age">Age</Label>
              <Input id="age" placeholder="18" type="number" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="gender">Gender</Label>
              <Input id="gender" type="text" placeholder="M/F" />
            </LabelInputContainer>
          </div>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              placeholder="24-bermingham palace"
              type="text"
            />
          </LabelInputContainer>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="emila">Email</Label>
              <Input id="mail" placeholder="hello@gmail.com" type="mail " />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="phoneNo">Phone Number</Label>
              <Input id="phoneN0" placeholder="+9198765432" type="text" />
            </LabelInputContainer>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="guardName">Guardian Name</Label>
              <Input id="guardName" placeholder="John" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="education">Education Status</Label>
              <Input id="education" placeholder="phd" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="relativeAddress">Relative Address</Label>
            <Input
              id="relativeAddress"
              placeholder="24-bermingham palace"
              type="text"
            />
          </LabelInputContainer>
          <Dialog>
            <DialogTrigger asChild>
              <button className="relative px-6 py-2 font-medium rounded-lg bg-indigo-500 text-white w-fit transition shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                Sign up &rarr;
                <BottomGradient />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] w-[400px] backdrop-blur-sm">
              <DialogHeader>
                <DialogTitle className="text-white">Ferrier</DialogTitle>
                <DialogDescription className="text-white">
                  By submitting the details you are accepting to agree to share
                  the details with the institution
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <div className="flex justify-around">
                  <button className="relative px-6 py-2 font-medium rounded-lg bg-indigo-500 text-white w-fit transition shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                    Reject &#x2718;
                                  </button>
                  <button type="submit" className="relative px-6 py-2 font-medium rounded-lg bg-indigo-500 text-white w-fit transition shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                    Accept &#x2714;
                  </button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

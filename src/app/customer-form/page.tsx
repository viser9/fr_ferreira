"use client";
import React, { useState, ChangeEvent } from "react";
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
  DialogClose,
} from "@/components/Dialog";
import CustButton from "@/components/custom-components/CustButton";
import { Checkbox } from "@/components/CheckBox";

export default function SignupFormDemo() {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    fullname: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    phoneNo: "",
    image: "",
    guardName: "",
    relativeName: "",
    relativeAddress: "",
    relativeNumber: "",
  });

  const [errors, setErrors] = useState<{ phoneNo: string }>({
    phoneNo: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "phoneNo" || id === "relativeNumber") {
      setFormData((prevData) => ({
        ...prevData,
        [id]: "+91" + value,
      }));
    }
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log("Form Submitted", formData);
  };

  const acceptConditon = () => {
    setErrors({ phoneNo: "" });
    if (formData.phoneNo.length < 12 || formData.relativeNumber.length < 12) {
      setErrors({ ...errors, phoneNo: "Invalid Phone Number" });
      return;
    }
    console.log(formData);
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
              <Input
                id="fullname"
                placeholder="Tyler"
                type="text"
                value={formData.fullname}
                onChange={handleChange}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="dob">DOB</Label>
              <Input
                id="dob"
                placeholder="dd/mm/yy"
                type="date"
                value={formData.dob}
                onChange={handleChange}
              />
            </LabelInputContainer>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                placeholder="18"
                type="number"
                value={formData.age}
                onChange={handleChange}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="gender">Gender</Label>
              <Input
                id="gender"
                type="text"
                placeholder="M/F"
                value={formData.gender}
                onChange={handleChange}
              />
            </LabelInputContainer>
          </div>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              placeholder="24-bermingham palace"
              type="text"
              value={formData.address}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                placeholder="london"
                type="text"
                value={formData.city}
                onChange={handleChange}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                placeholder="solid"
                type="text"
                value={formData.state}
                onChange={handleChange}
              />
            </LabelInputContainer>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="image">Image</Label>
              <Input
                id="image"
                placeholder="image"
                type="text"
                value={formData.image}
                onChange={handleChange}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="phoneNo">Phone Number</Label>
              <Input
                id="phoneNo"
                placeholder="9876543210"
                type="text"
                value={formData.phoneNo}
                onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                  event.target.value = event.target.value
                    .replace(/[^0-9.]/g, "")
                    .replace(/(\..*?)\..*/g, "$1");
                }}
                onChange={handleChange}
              />
              {errors.phoneNo && (
                <div className="text-red-500">Invalid Phone Number</div>
              )}
            </LabelInputContainer>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="relName">Relative Name</Label>
              <Input
                id="relativeName"
                placeholder="John"
                type="text"
                value={formData.relativeName}
                onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                  event.target.value = event.target.value
                    .replace(/[^0-9.]/g, "")
                    .replace(/(\..*?)\..*/g, "$1");
                }}
                onChange={handleChange}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="relativeNumber">Relative Phone Number</Label>
              <Input
                id="relativeNumber"
                placeholder="9876543210"
                type="text"
                value={formData.relativeNumber}
                onChange={handleChange}
              />
              {errors.phoneNo && (
                <div className="text-red-500">Invalid Phone Number</div>
              )}
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="relativeAddress">Relative Address</Label>
            <Input
              id="relativeAddress"
              placeholder="24-bermingham palace"
              type="text"
              value={formData.relativeAddress}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <div className="flex font-medium text-white items-center space-x-2 m-3">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
          </div>
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
                  <DialogClose asChild>
                    <button className="relative px-6 py-2 font-medium rounded-lg bg-indigo-500 text-white w-fit transition shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                      Reject &#x2718;
                    </button>
                  </DialogClose>
                  <DialogClose asChild>
                    <button
                      onClick={acceptConditon}
                      className="relative px-6 py-2 font-medium rounded-lg bg-indigo-500 text-white w-fit transition shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                    >
                      Accept &#x2714;
                    </button>
                  </DialogClose>
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

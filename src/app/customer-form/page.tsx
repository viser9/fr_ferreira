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
import { Checkbox } from "@/components/CheckBox";
import { toast } from "sonner";
import { db } from "@/firebase.config";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";

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
    allergy: "",
    healthStatus: "",
    medicine:"",
  });

  const [errors, setErrors] = useState<{
    age: string;
    gender: string;
    dob: string;
    address: string;
    city: string;
    state: string;
    image: string;
    allergy: string;
    phoneNo: string;
    fullname: string;
    healthStatus: string;
    medicine: string;
  }>({
    age: "",
    gender: "",
    fullname: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    phoneNo: "",
    image: "",
    allergy: "",
    healthStatus: "",
    medicine: "",
  });

  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const handleCheckboxChange = () => {
    setIsTermsAccepted(!isTermsAccepted);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "phoneNo") {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({
      age: "",
      gender: "",
      fullname: "",
      dob: "",
      address: "",
      city: "",
      state: "",
      phoneNo: "",
      image: "",
      allergy: "",
      healthStatus: "",
      medicine: "",
    });
    if (formData.fullname.length === 0) {
      setErrors({ ...errors, fullname: "Invalid Name" });
      return;
    }
    if (formData.dob.length === 0) {
      setErrors({ ...errors, dob: "Invalid DOB" });
      return;
    }
    if (formData.age.length === 0) {
      setErrors({ ...errors, age: "Invalid Age" });
      return;
    }
    if (formData.gender.length === 0) {
      setErrors({ ...errors, gender: "Invalid gender" });
      return;
    }
    if (formData.address.length === 0) {
      setErrors({ ...errors, address: "Invalid Address" });
      return;
    }
    if (formData.city.length === 0) {
      setErrors({ ...errors, city: "Invalid City" });
      return;
    }
    if (formData.state.length === 0) {
      setErrors({ ...errors, state: "Invalid State" });
      return;
    }
    if (formData.image.length === 0) {
      setErrors({ ...errors, image: "Invalid Image" });
      return;
    }
    if (formData.phoneNo.length != 10) {
      setErrors({ ...errors, phoneNo: "Invalid Phone Number" });
      return;
    }
    
    if (formData.allergy.length === 0) {
      setErrors({ ...errors, allergy: "Please enter none if not any" });
      return;
    }
    if (formData.healthStatus.length == 10) {
      setErrors({ ...errors, phoneNo: "Please enter fine if no health conditions" });
      return;
    }
    if (formData.medicine.length === 0) {
      setErrors({ ...errors, medicine: "Please enter none if not under any mediciation" });
      return;
    }
    if (!isTermsAccepted) {
      toast("Please accept the terms and conditions", {
        description:
          "By accepting the terms and conditions you are agreeing to share the details with the institution",
      });
    }
    // await setDoc(doc(db, 'USERS',formData.phoneNo), formData);
    console.log("Form Submitted", formData);
    console.log(isTermsAccepted);
  };

  return (
    <div className="flex justify-center items-center sm:h-screen m-2 sm:m-0">
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
              {errors.fullname && (
                <div className="text-red-500">Invalid Name</div>
              )}
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
              {errors.dob && (
                <div className="text-red-500">Invalid Dob</div>
              )}
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
              {errors.age && (
                <div className="text-red-500">Invalid age</div>
              )}
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
              {errors.gender && (
                <div className="text-red-500">enter gender</div>
              )}
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
            {errors.address && (
                <div className="text-red-500">Enter address</div>
              )}
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
              {errors.city && (
                <div className="text-red-500">Enter city</div>
              )}
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
              {errors.state && (
                <div className="text-red-500">Enter state</div>
              )}
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
              {errors.image && (
                <div className="text-red-500">Enter image uri</div>
              )}
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
              <Label htmlFor="allergy">Allergy</Label>
              <Input
                id="allergy"
                placeholder="None"
                type="text"
                value={formData.allergy}
                onChange={handleChange}
              />
              {errors.allergy && (
                <div className="text-red-500">Enter relative name</div>
              )}
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="healthStatus">Health Status</Label>
              <Input
                id="healthStatus"
                placeholder="healthy"
                type="text"
                value={formData.healthStatus}
                onChange={handleChange}
              />
              {errors.healthStatus && (
                <div className="text-red-500">Invalid Phone Number</div>
              )}
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="medicine">Medicine Prescription</Label>
            <Input
              id="medicine"
              placeholder="Metformin"
              type="text"
              value={formData.medicine}
              onChange={handleChange}
            />
            {errors.medicine && (
                <div className="text-red-500">Enter relative address</div>
              )}
          </LabelInputContainer>
          <div className="flex font-medium text-white items-center space-x-2 m-3">
            <Dialog>
              <Checkbox id="terms" onCheckedChange={handleCheckboxChange} />
              <DialogTrigger asChild>
                <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 hover:text-gray-400">
                  Accept terms and conditions
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px] w-[400px] backdrop-blur-sm">
                <DialogHeader>
                  <DialogTitle className="text-slate-200">Ferrier</DialogTitle>
                  <DialogDescription className="text-slate-400">
                    By submitting the details you are accepting to agree to
                    share the details with the institution
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <div className="flex justify-around">
                    <DialogClose asChild>
                      <button className="relative px-6 py-2 font-medium rounded-lg bg-indigo-500 text-white w-fit transition shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                        Close &#x2718;
                      </button>
                    </DialogClose>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <button
            type="submit"
            className="relative px-6 py-2 font-medium rounded-lg bg-indigo-500 text-white w-fit transition shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
          >
            Sign up &rarr;
            <BottomGradient />
          </button>
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

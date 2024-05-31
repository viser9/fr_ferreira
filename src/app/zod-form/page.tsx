"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, useForm } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/shadcnInput";

const formSchema = z.object({
  fullname: z.string().min(2),
  //   phoneNo: z.string().regex(/^\d{10}$/),
  //   relativeNumber: z.string().regex(/^\d{10}$/),
});

export default function () {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
    },
  });

  const handleSubmit = () => {};
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}> 
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="fullname" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </form>
        </Form>
      </div>
    </>
  );
}

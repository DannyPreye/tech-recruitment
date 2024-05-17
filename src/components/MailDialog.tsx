"use client";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface Props {
    open: boolean;
    onClose: () => void;
}

export function MailDialog({ open, onClose }: Props) {
    const { toast } = useToast();

    const formik = useFormik({
        initialValues: {
            email: "",
            subject: "",
            message: "",
            first_name: "",
            last_name: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            subject: Yup.string().required("Required"),
            message: Yup.string().required("Required"),
            first_name: Yup.string().required("Required"),
            last_name: Yup.string().required("Required"),
        }),
        onSubmit: async (values) => {
            try {
                const response = await fetch("/api/contact", {
                    method: "POST",
                    body: JSON.stringify({
                        email: values.email,
                        subject: values.subject,
                        message: values.message,
                        name: `
                        ${values.first_name} ${values.last_name}`,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (response.status === 200) {
                    toast({
                        title: "Success",
                        description:
                            "Thank you for your message. We will get back to you soon.",
                    });
                    onClose();
                } else {
                    throw new Error("Failed to send message");
                }
            } catch (error) {
                console.log("This is the error", error);
                //@ts-ignore
                toast({
                    title: "Error",
                    description: "Something went wrong. Please try again",
                    variant: "destructive",
                });
            }
        },
    });

    return (
        <Dialog data-state={open ? "open" : "closed"} open={open}>
            <DialogContent className=''>
                <DialogHeader>
                    <DialogTitle>Send us a message</DialogTitle>
                    {/* <DialogDescription>
                        S
                    </DialogDescription> */}
                </DialogHeader>
                <form onSubmit={formik.handleSubmit}>
                    <div className='grid grid-cols-12  gap-4 py-4'>
                        <div className='flex flex-col col-span-6 w-full  gap-2'>
                            <Label htmlFor='first_name' className='text-left'>
                                First Name
                            </Label>
                            <Input
                                id='first_name'
                                placeholder='First Name'
                                className='w-full'
                                {...formik.getFieldProps("first_name")}
                            />
                            {formik.touched.first_name &&
                                formik.errors.first_name && (
                                    <small className='text-red-500 text-sm'>
                                        {formik.errors.first_name}
                                    </small>
                                )}
                        </div>
                        <div className='flex flex-col col-span-6 w-full  gap-2'>
                            <Label htmlFor='last_name' className='text-left'>
                                Last Name
                            </Label>
                            <Input
                                id='last_name'
                                placeholder='Last Name'
                                className='col-span-3'
                                {...formik.getFieldProps("last_name")}
                            />
                            {formik.touched.last_name &&
                                formik.errors.last_name && (
                                    <small className='text-red-500 text-sm'>
                                        {formik.errors.last_name}
                                    </small>
                                )}
                        </div>
                        <div className='grid col-span-12 gap-2'>
                            <Label htmlFor='email' className='text-left'>
                                Email
                            </Label>
                            <Input
                                id='email'
                                type='email'
                                placeholder='email'
                                className='col-span-3'
                                {...formik.getFieldProps("email")}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <small className='text-red-500 text-sm'>
                                    {formik.errors.email}
                                </small>
                            )}
                        </div>
                        <div className='grid col-span-12 gap-2'>
                            <Label htmlFor='subject' className='text-left'>
                                Subject
                            </Label>
                            <Input
                                id='subject'
                                placeholder='Subject'
                                className='col-span-3'
                                {...formik.getFieldProps("subject")}
                            />
                            {formik.touched.subject &&
                                formik.errors.subject && (
                                    <small className='text-red-500 text-sm'>
                                        {formik.errors.subject}
                                    </small>
                                )}
                        </div>
                        <div className='grid col-span-12 gap-2'>
                            <Label htmlFor='username'>Message</Label>
                            <Textarea
                                id='message'
                                placeholder='Message'
                                {...formik.getFieldProps("message")}
                            />
                            {formik.touched.message &&
                                formik.errors.message && (
                                    <small className='text-red-500 text-sm'>
                                        {formik.errors.message}
                                    </small>
                                )}
                        </div>
                    </div>
                    <DialogFooter className='flex justify-between items-center'>
                        <Button
                            type='button'
                            onClick={onClose}
                            variant={"outline"}
                        >
                            Close
                        </Button>
                        <Button disabled={formik.isSubmitting} type='submit'>
                            {formik.isSubmitting ? (
                                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                            ) : (
                                "Send"
                            )}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

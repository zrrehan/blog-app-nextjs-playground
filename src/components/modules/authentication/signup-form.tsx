"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/modules/authentication/card"
import * as z from "zod";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/modules/authentication/field"
import { Input } from "@/components/ui/input"
import { formOptions, useForm } from "@tanstack/react-form"
import { CardFooter } from "@/components/ui/card"
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(1, {error: "Name can not be empty"}), 
  email: z.email(), 
  password: z.string().min(6, {error: "Too Short! Min: 6 characters"}), 
})

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  console.log("HEllo world from registration")
  const formOpts = formOptions({
    defaultValues: {
      name: "", 
      email: "", 
      password: ""
    }
  })
  
  const form = useForm({
    ...formOpts, 
    validators: {
      onSubmit: formSchema
    },
    onSubmit: async({value}) => {
      const toastId = toast.loading("Please Wait!", { position: "top-right" })
      try {
        const { data, error } = await authClient.signUp.email({
            name: value.name,
            email: value.email,
            password: value.password
        });
        console.log("data:", data);
        if(error) {
          toast.error(error.message || "Something went wrong", { position: "top-right", id: toastId },)
        } else {
          toast.success("User has been created", { position: "top-right", id: toastId },)
        }

      } catch(error: any) {
        toast.error(error.message || "Something went wrong", { position: "top-right", id: toastId },)
      }
    }
  })

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id = "register-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit()
          }}
        >
          <FieldGroup>
            <form.Field
              name="name"
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid = {isInvalid}>
                    <FieldLabel>Name</FieldLabel>
                    <Input
                      type = "text"
                      id = {field.name}
                      name = {field.name}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />

            <form.Field
              name="email"
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid = {isInvalid}>
                    <FieldLabel>Email</FieldLabel>
                    <Input
                      type = "email"
                      id = {field.name}
                      name = {field.name}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />

            <form.Field
              name="password"
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid = {isInvalid}>
                    <FieldLabel>Password</FieldLabel>
                    <Input
                      type = "password"
                      id = {field.name}
                      name = {field.name}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />


          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter>
        <Button form = "register-form">Submit</Button>
      </CardFooter>
    </Card>
  )
}

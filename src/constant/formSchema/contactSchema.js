import { z } from "zod";

export const contactFormSchema = z.object({
    name: z
        .string().nonempty("Name is requried")
        .min(3, "Name must be at least 3 characters")
        .max(50, "Name must be less than 50 characters"),

    email: z
        .string().nonempty("Email is requried").regex(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Enter a valid email address"
        ),

    subject: z
        .string().nonempty("Subject is requried"),

    projectDescription: z
        .string().nonempty("Project Description is requried")
        .min(10, "Project description must be at least 10 characters")
        .max(1000, "Project description must be under 1000 characters"),
});

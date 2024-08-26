import { z } from "zod"


export const AuthCredentialsValidator = z.object({
    email: z.string().email(),
    password: z
        .string()
        .min(10, {
            message:
                "password must be 10 characters long.",
        }),
})
export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>
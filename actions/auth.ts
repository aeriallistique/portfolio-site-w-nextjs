"use server"
import { signIn, signOut } from "@/auth"
import { revalidatePath } from "next/cache"
import { db } from "@/db"
import { AnyARecord } from "dns"
import { AuthError } from "next-auth"
import { redirect } from "next/navigation"

const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      }
    })
    return user;
  } catch (error) {
    console.log(error);
    return null

  }
}

export const login = async (provider: string) => {
  await signIn(provider, { redirectTo: "/server" })
  // revalidatePath("/")
}

export const logout = async () => {
  await signOut({ redirectTo: "/" })
  revalidatePath("/")
}

export const loginWithCred = async (formData: FormData) => {

  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  }
  // these 2 lines are not required, they are here just for debbuging purposes
  // const existingUser = getUserByEmail(formData.get("email") as string)
  // console.log(existingUser);

  try {
    await signIn("credentials", { ...rawFormData, redirect: false })
    redirect('/server')
  } catch (error: any) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong!" }
      }
    }
    throw error;
  }
  revalidatePath("/server")

}
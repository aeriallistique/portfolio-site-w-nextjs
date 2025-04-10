
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { FormEvent } from "react";
import PostBlogForm from "../components/PostBlogForm";

const Server = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect('/sign-in')
  }

  return (
    <main className="flex h-full items-center justify-center flex-col gap-2 bg-gray-200 ">
      {/* <p className="text-lg">{session?.user?.email}</p> */}
      <h1
        className="text-3xl w-6/12 mx-auto">
        Welcome
        <span className="text-blue-600 ml-2">
          {session?.user?.name}
        </span>
      </h1>
      <PostBlogForm />
    </main>
  )
}
export default Server


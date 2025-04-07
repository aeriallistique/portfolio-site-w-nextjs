
import { loginWithCred } from "@/actions/auth"
import AuthButton from "./AutButton"
import Form from "next/form";
import prisma from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const PostBlogForm = () => {

  const handleSubmit = async (formData: FormData) => {
    "use server"
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    await prisma.blog.create({
      data: {
        blogTitle: title,
        blogContent: content,
        userEmail: "web.aeriallistique@gmail.com",
        blogImg: ''
      }
    });
    revalidatePath('/blog')
    redirect('/blog')

  }

  return (
    <Form
      action={handleSubmit}
      className="flex flex-col w-6/12"
    >
      <label htmlFor="title">Title:</label>
      <input
        name="title"
        type="text"
        id="title"
        placeholder="Blog Title"
        className="bg-white p-1 rounded-lg mb-2"
      />
      <label htmlFor="content">Blog Content </label>
      <textarea
        name="content"
        id="content"
        rows={10}
        className="bg-white p-1 rounded-lg mt-1"
        placeholder="your content here..."
      >
      </textarea>
      <button
        className="w-full sm:w-4/12 border px-4 py-1 rounded-lg bg-blue-600 mx-auto text-white mt-4 cursor-pointer "
        type="submit"
      >
        Post Blog</button>
    </Form>
  )
}

export default PostBlogForm
import { auth } from "@/auth";
import prisma from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import Link from "next/link";
import { formatDistanceToNow } from 'date-fns';

async function deletePost(formData: FormData): Promise<void> {
  "use server";
  const cookie = await cookies()
  const id = formData.get("id") as string;
  try {
    await prisma.blog.delete({
      where: { id }
    });

    revalidatePath("/blog");
    redirect("/blog");
  } catch (error) {
    console.error("Failed to delete post:", error);
    cookie.set('errorMessage', 'Failed to delete post. Please try again');
    redirect(`/blog/${id}`);
  }
}

async function clearErrorMessage(): Promise<void> {
  "use server";
  const cookie = await cookies()
  cookie.delete("errorMessage");
  revalidatePath(".");
}

const BlogId = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const session = await auth();
  const altImgLink = "https://images.pexels.com/photos/31492171/pexels-photo-31492171/free-photo-of-a-red-beetle-on-a-leaf.jpeg?auto=compress&cs=tinysrgb&w=1200";
  const cookie = await cookies()

  const post = await prisma.blog.findUnique({
    where: { id }
  });

  if (!post) {
    redirect("/blog");
  }
  const timeAgo = formatDistanceToNow(post.addedAt, { addSuffix: true })
  const rawError = cookie.get("errorMessage")?.value || null;


  const errorMessage = rawError

  return (
    <>
      <Link
        href='/blog'
        className="text-gray-500 ml-4 p-2 hover:text-gray-800"
      >
        &lArr; Go back
      </Link>
      <main className="w-11/12 rounded-2xl my-8 overflow-hidden mx-auto md:w-8/12 bg-gray-200 pb-4">
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded my-4">
            {errorMessage}
            {/* Form to clear the error message */}
            <form action={clearErrorMessage} className="inline ml-2">
              <button type="submit" className="text-sm underline cursor-pointer">Dismiss</button>
            </form>
          </div>
        )}
        <figure>
          <img
            src={post?.blogImg || altImgLink} alt={post.blogTitle}
            className="mx-auto max-h-60"
          />
        </figure>
        <h1 className="text-3xl text-center py-4">
          {post.blogTitle}
        </h1>
        <span className="block w-full text-center text-gray-500">Created: {timeAgo}</span>
        <article className="px-2 w-full text-center">
          {post.blogContent}
        </article>
        {session?.user ? (
          <form action={deletePost} className="mt-8 text-center">
            <input type="hidden" name="id" value={id} />
            <button
              type="submit"
              className="bg-blue-400 hover:bg-blue-600 rounded-md px-6 py-1 font-medium text-white mx-auto block cursor-pointer"
            >
              Delete Post
            </button>
          </form>
        ) : null}
      </main>
    </>
  );
};

export default BlogId;
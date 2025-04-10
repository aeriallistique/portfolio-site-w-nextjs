import Link from 'next/link';
import globe from '../../public/globe.svg'
import Image from "next/image"
import prisma from '@/db';

interface Blog {
  id: string;
  blogTitle: string;
  blogContent: string;
  blogImg: string;
  // other properties as needed
}


const Blog = async () => {
  const blogs = await prisma.blog.findMany()

  return (
    <div className='text-center bg-gray-200  h-auto pt-2'>
      <Link
        href={'/server'}
        className='bg-blue-600 rounded-md px-6 py-1
         font-medium text-white mx-auto mt-8 text-center'
      >
        Dashboard
      </Link>
      <main className="relative text-gray-700 pb-8 mt-8 text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {blogs.map((blog: Blog) => (
          <section
            key={`${Math.random() * blogs.length} ${blog.blogTitle}`}
            className="w-11/12 flex flex-col justify-center items-center border shadow-xl hover:shadow-2xl rounded-2xl overflow-hidden mx-auto cursor-pointer"
          >
            <figure className='mx-auto'>
              <img
                src={`${blog.blogImg === '' ? globe : blog.blogImg}`}
                alt={blog.blogImg === '' ? 'svg vector image of a globe' : blog.blogTitle}
                className="block w-full max-h-40 object-cover mt-8"
              />
            </figure>
            <h1 className='text-2xl mt-4'>{blog.blogTitle}</h1>
            <article className='w-11/12 h-25 relative overflow-hidden mb-10'>
              <div className=''>
                {blog.blogContent}
              </div>
              <div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-200 to-transparent flex justify-center items-end'>
                <Link href={`/blog/${blog.id}`} className='bg-blue-500 text-white px-4 py-1 rounded-md mb-2 hover:bg-blue-600 transition-colors'>
                  Read More...
                </Link>
              </div>
            </article>
          </section>
        ))}
      </main>
    </div>
  )
}

export default Blog;
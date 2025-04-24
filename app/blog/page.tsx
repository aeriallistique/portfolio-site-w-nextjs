import Link from 'next/link';
import globe from '../../public/globe.svg'
import Image from "next/image"
import prisma from '@/db';

interface Blog {
  id: string;
  blogTitle: string;
  blogContent: string;
  blogImg: string;

}


const Blog = async () => {
  const blogs = await prisma.blog.findMany()

  return (
    <div className='text-center  h-auto pt-2 bg-gray-200'>
      <Link
        href={'/server'}
        className='bg-blue-600 rounded-md px-6 py-1 font-medium text-white mx-auto my-8 text-center'
      >
        Dashboard
      </Link>
      <main className="relative min-h-screen text-gray-700 pb-8 px-2 mt-8 text-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {blogs.map((blog: Blog) => (
          <section
            key={blog.id}
            className="max-w-xs w-full flex flex-col justify-center items-center border shadow-xl hover:shadow-2xl rounded-2xl overflow-hidden cursor-pointer h-100 mx-auto bg-gray-200"
          >
            <figure className='w-full'>
              <img
                src={`${blog.blogImg === '' ? globe : blog.blogImg}`}
                alt={blog.blogImg === '' ? 'svg vector image of a globe' : blog.blogTitle}
                className="block w-full h-50 object-cover"
              />
            </figure>
            <h1 className='text-2xl text-blue-900 mt-4 px-4'>{blog.blogTitle}</h1>
            <article className='w-full px-4 h-25 relative overflow-hidden mb-10 flex-grow'>
              <div className='text-gray-600'>
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
import Link from 'next/link';
import globe from '../../public/globe.svg'
import Image from "next/image"

const Blog = () => {

  return (
    <main className="relative text-gray-700 pb-8 mt-8 text-center flex flex-col justify-center items-center after:content-[''] after:block after:w-11/12 after:border-b after:mt-8">
      <Link
        href={'/server'}
        className='bg-blue-600 rounded-md w-3/12 px-6 py-1 
         font-medium text-white'
      >
        Post a Blog
      </Link>
      <figure >
        <Image
          src={globe}
          alt={'svg vector image of a globe'}
          width={300}
          height={300}
          className="object-fit mt-8"
        ></Image>
      </figure>
      <h1 className='text-4xl mt-4'>Article title</h1>
      <article className='w-11/12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo sapiente cum repudiandae consequuntur ipsa eos minus atque. At, ratione aperiam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem adipisci in dicta maiores facilis accusamus laborum obcaecati dignissimos, omnis fugit vel voluptatem quas aspernatur dolores non voluptas nemo minima. Fugiat nulla officiis deserunt. Tempora numquam, non cum dignissimos quas ut!
      </article>
    </main>
  )
}
export default Blog;
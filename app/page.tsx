import Link from "next/link";
import { GithubIcon, InstaIcon } from "./components/SocialsIcons";

export default async function Home() {


  return (
    <main className="w-full h-full mx-auto bg-gray-100 text-gray-600 font-extralight">
      <div className="bg-gray-100 w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto">
        <div className="bg-gray-100 mt-8 text-3xl text-black font-normal leading-10">
          <h1>Who am I ?
            <br></br>
            I am an <Link href="" className="title-anchor">[acrobat]</Link>,
            a <br></br>
            <Link href="" className="title-anchor">[Guinness World Record holder]</Link>,
            full stack developer, prototyper, CSS animator, HTLM5 banner developer,
            canvas game developer, JavaScript bug fixer [...]<br></br>
            A full time acrobat turned web developer.
          </h1>

          <h3 className="flex items-center my-6">Find me on:
            <GithubIcon></GithubIcon>
            <InstaIcon></InstaIcon>
          </h3>
        </div>

        <p className="mb-4">I am a creative guy from Romania.</p>

        <p className="mb-4"> I arrived in Manchester
          <script>document.write(new Date().getFullYear() - 2015);</script> years ago.
          I possess an abundance of passion, perseverance and great
          apetite for learning.
        </p>

        <p className="mb-4"> My strength are in front-end, animations, UX, problem solving, interactive JavaScript. I adapt myself
          to my clients needs and way of working.</p>

        <p> I use CSS pre-processors (SASS, LESS), JavaScript (jQuery, OOP, APIs, vanilla
          JavaScript), Git version management.
          I have experience with package managers such as Parcel and NPM.
          I easily adapt myself to the project needs.</p>

      </div>
    </main>
  );
}

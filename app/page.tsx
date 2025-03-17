import GithubIcon from "./components/GithubIcon";

export default async function Home() {


  return (
    <main className="w-full h-full mx-auto bg-gray-100">
      <div className="bg-gray-100 w-10/12 mx-auto">
        <div className="bg-gray-100 mt-8 text-2xl">
          <h1>Who am I ?
            <br></br>
            An <a href="../Acro-Site/index.html" className="title-anchor">[acrobat]</a>,
            a <br></br>
            <a href="../Acro-Site/index.html" className="title-anchor">[Guinness World Record holder]</a>,
            full stack developer, prototyper, CSS animator, HTLM5 banner developer,
            canvas game developer, JavaScript bug fixer [...]<br></br>
            A full time acrobat turned web developer.
          </h1>

          <h3 className="flex items-center my-6">Find me on GitHub:
            <GithubIcon></GithubIcon>
          </h3>
        </div>
        <p>I am a creative guy from Romania.</p>

        <p> I arrived in Manchester
          <script>document.write(new Date().getFullYear() - 2015);</script> years ago.
          I possess an abundance of passion, perseverance and great
          apetite for learning.
        </p>

        <p> My strength are in front-end, animations, UX, problem solving, interactive JavaScript. I adapt myself
          to my clients needs and way of working.</p>

        <p> I use CSS pre-processors (SASS, LESS), JavaScript (jQuery, OOP, APIs, vanilla
          JavaScript), Git version management.
          I have experience with package managers such as Parcel and NPM.
          I easily adapt myself to the project needs.</p>
      </div>
    </main>
  );
}

import { OpeningStatement } from "./OpeningStatement"


export const Description = () => {
  return (
    <div className="bg-gray-100 w-11/12 md:w-8/12 lg:w-6/12  mx-auto">
      <OpeningStatement />

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
  )
}

const WorkPage = () => {
  return (
    <main className="w-full h-full flex flex-col overflow-hidden">
      <section className="w-full border h-full">
        <figure className="w-full h-9/12">
          <img className="w-full h-full object-cover" src="/oneArm.jpg" alt="Hand stand on one arm" />
        </figure>
        <aside className="w-full h-3/12 pt-4 px-4 bg-gray-700 text-amber-50">
          <h2 className=" my-2 text-lg">Hi, I am a professional acrobat turned full stack web developer.</h2>
          <p className="text-sm font-extralight mb-1">I'm available for work.</p>
          <p className="text-sm font-extralight mb-1">Check out my <a href="lab.html" className="lab-experiment" id="lab_exp">lab projects.</a></p>
          <p className="text-sm font-extralight">Scroll down to see a few projects I have had the pleasure to produce.</p>
        </aside>
      </section>
    </main>
  )
}

export default WorkPage;
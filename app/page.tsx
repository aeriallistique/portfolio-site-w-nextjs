import { Description } from "./components/Description";
import { Footer } from "./components/Footer";

export default async function Home() {
  return (
    <>
      <main className="w-full h-full mx-auto bg-gray-100 text-gray-600 font-extralight">
        <Description />
      </main>
      <Footer></Footer>
    </>
  );
}

import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Projects from "./components/Projects";
import ScrollContainer from "./components/ScrollContainer";

export default function Home() {
  return (
    <main className="text-ttn-orange">
      <Hero />
      <Partners />
      {/* <Projects /> */}
      <section className="-translate-y-8 xl:-translate-y-40 ">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="font-heading font-bold px-4 mb-4 pl-8 text-2xl md:text-4xl  xl:text-6xl py-4 xl:py-14 text-ttn-light">
            OUR WORK
          </h1>
        </div>
        <ScrollContainer />
      </section>
    </main>
  );
}

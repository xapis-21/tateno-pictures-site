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
      <section className="-translate-y-40">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="font-heading font-bold text-6xl py-14 text-ttn-light">
            Our Work
          </h1>
        </div>
        <ScrollContainer />
      </section>
    </main>
  );
}

import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Projects from "./components/Projects";
import ScrollContainer from "./components/ScrollContainer";
import ServiceGrid from "./components/ServiceGrid";

export default function Home() {
  return (
    <main className="text-ttn-orange">
      <Hero />
      <Partners />
      {/* <Projects /> */}
      <section className="-translate-y-8 xl:-translate-y-20 ">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="font-heading font-bold px-4 pl-8 text-2xl md:text-4xl  xl:text-4xl py-2 xl:pt-14 text-ttn-light grid place-items-center">
            RECENT WORK
          </h1>
          <p className="mx-auto w-fit mb-14 text-xs xl:text-sm max-w-[300px]">
            Creative production based in Kampala, Uganda
          </p>
        </div>
        <ScrollContainer />
      </section>

      <section className="mt-20">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="font-heading font-bold px-4 pl-8 text-2xl md:text-4xl  xl:text-4xl py-2 xl:py-t text-ttn-light grid place-items-center">
            SERVICES
          </h1>
          <p className="mx-auto w-fit text-xs xl:text-sm max-w-[300px] px-4 text-center mb-14">
            Tateno Pictures specialises in producing visuals that builds brands. 
          </p>
        </div>

        <ServiceGrid />
      </section>
    </main>
  );
}

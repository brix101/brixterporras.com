import { Separator } from "@/components/ui/separator";

function AboutSection() {
  return (
    <section id="section-about" className="bg-background2">
      <div className="container h-screen space-y-8 ">
        <div className="w-full">
          <h2 className="text-3xl font-bold sm:text-4xl">About me</h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <Separator className="bg-primary" />
      </div>
    </section>
  );
}

export default AboutSection;

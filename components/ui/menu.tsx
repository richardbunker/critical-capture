"use client";

export const Menu = () => {
  return (
    <section className="text-center w-full py-2 mt-4 space-y-2">
      <h1 className="font-brand md:text-6xl text-4xl tracking-wide text-yellow-100 font-bold">
        Critical Captures
      </h1>
      <h3 className="text-lg text-yellow-200">Real feedback from real photographers.</h3>
      <article className="pt-2 text-base text-white flex items-center justify-center flex-wrap space-x-1 px-6">
        <a href={"/"}>recent</a>
        <span className="">|</span>
        <a href={"/landscape"}>landscape</a>
        <span className="">|</span>
        <a href={"/street"}>street</a>
        <span className="">|</span>
        <a href={"/portraiture"}>portraiture</a>
        <span className="">|</span>
        <a href={"/fine-art"}>fine art</a>
        <span className="">|</span>
        <a href={"/astro"}>astro</a>
        <span className="">|</span>
        <a href={"/black-and-white"}>b&w</a>
        <span className="">|</span>
        <a href={"/minimal"}>minimal</a>
        <span className="">|</span>
        <a href={"/abstract"}>abstract</a>
      </article>
    </section>
  );
};

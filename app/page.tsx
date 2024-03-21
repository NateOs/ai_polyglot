import Image from "next/image";

export default function Home() {
  return (
    <main className="">
    

      <div className="flex justify-center pt-10">
        <div className="relative bg-[url('/public/hero-background">
        <Image
          className=""
          src="/worldmap.png"
          alt=""
            width={500}
            height={100}
          />
          <div className="">
            <h1 className="">Pollyglot</h1>
            <h2>Perfect Translation Everytime</h2>
          </div>
        </div>
      
      </div>

    
    </main>
  );
}

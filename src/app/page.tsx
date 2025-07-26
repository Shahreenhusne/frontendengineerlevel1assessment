import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IELTSPage from "@/components/IELTSPage";
import Image from "next/image";

export default async function Home() {

   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/ielts`, {
    cache: "no-store",
  });

  const data = await res.json();

  console.log(data)

  return (
   <>
  <main>
     <Hero title={data.title} description={data.description} />
    </main>
   </>
  );
}

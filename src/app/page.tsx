import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InstructorSection from "@/components/InstructorSection"
import CourseLayoutSection from "@/components/CourseLayoutSection"
import LearnByCourseSection from "@/components/LearnByCourse";
import ExclusiveFeatureSection from "@/components/ExclusiveFeature";
import CourseDetailsAccordion from "@/components/CourseDetails";


export default async function Home() {

   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/ielts`, {
    cache: "no-store",
  });

  const data = await res.json();

  console.log(data)

  return (
   <>
   
   <div>
    <Hero title={data.title} description={data.description} media={data.media} cta_text= {data.cta_text} checklist= {data.checklist}/>
     <main className="container flex flex-col gap-4 md:flex-row md:gap-10">
      <section className="order-2 flex-1 md:order-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)] m-5">
          <div>
            <div className="sticky top-[65px] z-20 hidden bg-white md:block">
              {/* Navigation Carousel */}
            </div>
            
            <div className="pt-[140px] -mt-[140px]">
              <InstructorSection sections={data.sections}/>
              <CourseLayoutSection feature={data.sections}/>
              <LearnByCourseSection pointer={data.sections}/>
              <ExclusiveFeatureSection feature_explanations={data.sections}/>
              <CourseDetailsAccordion about={data.sections}/>
        
              {/* Add other sections here */}
            </div>
          </div>
        </section>
      
      {/* Sidebar Section */}
      <section className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white hidden md:block">
        {/* Sidebar content */}
      </section>
    </main>
  
    </div>

   </>
  );
}









import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { IoCheckmark, IoCheckmarkSharp } from "react-icons/io5";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import { FaQuoteLeft } from "react-icons/fa";
import { team } from "@/lib/team";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

export default function Home() {
    return (
        <>
            <section className='container mx-auto px-4'>
                <div className='max-w-[720px] py-12 mx-auto'>
                    <h1 className='font-montserrat text-2xl lg:text-4xl font-bold text-center '>
                        Empower Teams to Create Outstanding Products, Anytime
                    </h1>
                    <p className='font-montserrat text-base  lg:text-xl text-center mt-5'>
                        We&apos;re a global network of elite product and
                        technology experts poised to advance your key software
                        projects.
                    </p>
                    <div className='flex justify-center mt-10 gap-4'>
                        <Button
                            variant={"outline"}
                            className=' flex gap-3 items-center  font-semibold rounded-[18px] '
                        >
                            Get Started
                            <MdOutlineArrowOutward />
                        </Button>
                        <Button className='bg-primary text-secondary  font-semibold flex gap-3 items-center rounded-[18px] '>
                            Learn More
                            <FaArrowRight />
                        </Button>
                    </div>
                </div>
            </section>

            <section className='bg-primary text-secondary'>
                <div className='container mx-auto px-4'>
                    <div className='flex flex-wrap items-start gap-4 lg:mt-12 mt-2 py-6 lg:py-12  px-5 justify-between'>
                        <div className='rounded-md overflow-hidden lg:w-1/2 h-full '>
                            <Image
                                src='/assets/talent.jpeg'
                                width={450}
                                height={450}
                                className='w-full h-full object-cover'
                                alt='talent'
                            />
                        </div>
                        <div className='flex flex-col gap-3 max-w-[550px] w-full'>
                            <h2 className='font-montserrat text-2xl font-bold'>
                                Access Top-Tier Global Expertise
                            </h2>
                            <p className=' montserrat text-base'>
                                As your team&apos;s expert partner, we will
                                collaborate with you to grasp your objectives,
                                technical requirements, and team dynamics.
                                Within days, we&apos;ll connect you with the
                                perfect talent for your project and ensure they
                                are poised for success.
                            </p>
                            <ul className='pl-5 flex-col flex gap-3'>
                                <li className='flex items-start gap-4'>
                                    <span className='rounded-full bg-secondary flex-shrink-0 grid place-items-center size-5 text-primary'>
                                        <IoCheckmark className='' />
                                    </span>
                                    <span>
                                        Collaborate with Industry Leaders
                                    </span>
                                </li>
                                <li className='flex items-start gap-4'>
                                    <span className='rounded-full bg-secondary flex-shrink-0 grid place-items-center size-5 text-primary'>
                                        <IoCheckmark className='' />
                                    </span>
                                    <span>
                                        Partner with Specially-Selected Experts
                                    </span>
                                </li>
                                <li className='flex items-start gap-4'>
                                    <span className='rounded-full bg-secondary flex-shrink-0 grid place-items-center size-5 text-primary'>
                                        <IoCheckmark className='' />
                                    </span>
                                    <span>The Perfect Match, Assured</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex flex-wrap lg:flex-row-reverse items-start lg:mt-12 gap-4 mt-2 py-6 lg:py-12  px-5 justify-between'>
                        <div className='rounded-md overflow-hidden lg:w-1/2 h-full '>
                            <Image
                                src='/assets/network.jpeg'
                                width={450}
                                height={450}
                                className='w-full h-full object-cover'
                                alt='talent'
                            />
                        </div>
                        <div className='flex flex-col gap-3 max-w-[550px] w-full'>
                            <h2 className='font-montserrat text-2xl font-bold'>
                                Crafted by Founders for Agile Entrepreneurs
                            </h2>
                            <p className=' montserrat text-base'>
                                Our applicant network undergoes thorough testing
                                and vetting. Thanks to our meticulous and
                                proactive approach, we achieve a 98% success
                                rate from trial to hire.
                            </p>
                            <Button className='bg-secondary text-primary w-fit font-semibold flex gap-3 items-center rounded-[18px]'>
                                Work with Us
                                <MdOutlineArrowOutward />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container mx-auto px-4 mt-16 flex flex-col items-center'>
                <div className='flex flex-col items-center gap-4'>
                    <div className='max-w-[550px] w-full'>
                        <h2 className='font-montserrat text-2xl lg:text-3xl  font-bold text-center '>
                            Why Choose Us
                        </h2>
                        <p className='montserrat text-base text-center mt-2'>
                            We integrate as an expert within your team,
                            collaborating closely to comprehend your goals,
                            operational requirements, and team dynamics.
                        </p>
                    </div>
                    <div className=' w-full '>
                        <Carousel
                            opts={{
                                align: "start",
                            }}
                            className='w-full '
                        >
                            <CarouselContent className='w-full py-6 px-2'>
                                {team.map((member) => (
                                    <CarouselItem
                                        key={member.name}
                                        className='md:basis-1/2 '
                                    >
                                        <Card className='flex flex-col group relative overflow-hidden justify-end py-2  shadow-md gap-3 lg:w-[450px] h-[450px] w-full'>
                                            <Image
                                                src={member.img}
                                                width={450}
                                                height={450}
                                                className='w-full h-full absolute top-0 left-0  overflow-hidden object-cover'
                                                alt={member.name}
                                            />
                                            <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-t from-gray-100 via-transparent to-transparent'></div>
                                            <div className='flex-col flex relative text-center drop-shadow-sm'>
                                                <h3 className='text-xl font-bold font-montserrat  mt-2'>
                                                    {member.name}
                                                </h3>
                                                <p className='text-base '>
                                                    {member.designation}
                                                </p>
                                            </div>

                                            <div className='absolute w-full h-full overflow-y-auto drop-shadow-sm top-full group-hover:top-0 bg-black/75 p-3 backdrop-blur-md text-base duration-700 left-0'>
                                                <p className='text-secondary text-justify p-4 font-montserrat text-base'>
                                                    {member.content}
                                                </p>
                                            </div>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
            </section>
        </>
    );
}

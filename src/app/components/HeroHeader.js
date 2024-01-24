'use client';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { saveAs } from "file-saver";
export default function HeroHeader() {
    const saveFile = () => {
        saveAs(
            "/document/cv.pdf",
            "cv.pdf"
        );
    };
    return (
        <section id='home'>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center sm:text-left text-center">
                    <h1 className="text-5xl font-extrabold text-white">Hello, Im <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">
                        <TypeAnimation
                            sequence={[
                                'Adrian',
                                1000,
                                'Web Developer',
                                1000,
                                'Cyber Security',
                                1000,
                                'DevOps Engineer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </span></h1>
                    <p className="text-gray-500 text-lg text-justify lg:text-xl mt-5">Hello, I'm Adrian Fahren Setiawan, a web developer who loves creating interesting online experiences.</p>
                    <div className="mt-5">
                        <Link href={'https://www.linkedin.com/in/adrian-fahren-setiawan-34a939278/'}><button className="px-6 py-3 rounded-full text-white sm:mr-2 mb-3 sm:w-fit w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-white hover:to-white hover:text-black transition-all duration-200">Hire Me</button></Link>
                        <button onClick={saveFile} className="px-6 py-3 rounded-full bg-transparent text-white border border-white sm:w-fit w-full hover:bg-gradient-to-tr hover:from-violet-500 hover:to-fuchsia-500 hover:bg-clip-border transition-all duration-200">Download CV</button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-5">
                    <div>
                        {/* <img src="https://assets5.lottiefiles.com/avatars/300_profile-photo-1683838415909.jpeg" alt="" width={300} height={300} className="rounded-full" /> */}
                        <div className='bg-gradient-to-tr from-violet-500 to-fuchsia-500 rounded-full'>
                            <img src="/img/profile.png" alt="" width={300} height={300} className='rounded-full sm:rounded-none' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 
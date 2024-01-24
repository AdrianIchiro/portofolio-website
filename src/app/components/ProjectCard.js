import Link from "next/link"
export default function ProjectCard({ urlImg, title, desc, url }) {
    return (
        <div className="mt-5">
            <Link href={url}>
                <div className=" relative h-52 md:h-72 rounded-t-xl group bg-cover" style={{ background: `url(${urlImg})`, backgroundSize: 'cover' }}>
                    <div className="w-full h-full absolute top-0 right-0 left-0 rounded-t-xl bg-[#181818] bg-opacity-0 hidden group-hover:bg-opacity-55 group-hover:flex  transition-all duration-1000 items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                        </svg>
                    </div>
                </div>
            </Link>
            <div className="text-white bg-[#181818] rounded-b-md  py-6 px-4 md:w-full">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-gray-600 overflow-ellipsis">{desc}</p>
            </div>
        </div>
    )
}
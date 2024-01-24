import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
    return (
        <section className="mb-10" id="project">
            <h2 className="text-center font-semibold text-3xl mb-10">My Project</h2>
            <div className="grid lg:grid-cols-2 md:gap-12">
                <ProjectCard urlImg={'img/project-1.png'} title={'Book Store'} desc={'Description'} url={'https://library-it-website.vercel.app/'}/>
                <ProjectCard urlImg={'https://www.telkomsel.com/sites/default/files/2023-08/aug-3-01.png'} title={'OnProgress'} desc={'Description'} url={'/'} />
            </div>
        </section>
    )
}
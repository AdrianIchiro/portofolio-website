export default function AboutSection() {
    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <img src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?cs=srgb&dl=pexels-designecologist-1779487.jpg&fm=jpg" alt="" width={500} height={500} />
                <div>
                    <h2 className="text-4xl font-bold mb-5">About Me</h2>
                    <p className="text-base lg:text-lg text-justify">I am a student at Telkom University, Bandung, focusing as a website programmer. Aged 20, I have developed skills in web development and enjoy exploring the latest technologies. I am ready to apply my knowledge and skills in the world of work, and contribute to challenging projects.</p>
                    <div className="flex sm:flex-col flex-row sm:mt-8 sm:justify-normal justify-between items-start">
                        <div className="flex sm:flex-row flex-col">
                            <span className="text-gray-500 mt-3 sm:mt-0 sm:text-base text-xl sm:mr-5 hover:text-white sm:border-b sm:border-purple-500">Skill:</span>
                            <span className="mr-3">Web Developer</span>
                            <span className="mr-3">Cyber Security</span>
                            <span className="mr-3">DevOps Engineer</span>
                        </div>
                        <div className="sm:mt-3 flex sm:flex-row flex-col">
                            <span className="text-gray-500 mt-3 sm:mt-0 sm:text-base text-xl sm:mr-5 hover:text-white sm:border-b sm:border-purple-500">Education:</span>
                            <span className="mr-3">Telkom University</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
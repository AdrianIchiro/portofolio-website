'use client'
import { useState } from "react"
import Link from "next/link"
export default function EmailSection() {
    const [done, setDone] = useState(null)
    const [load, setLoad] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault();

        const endPoint = '/api/send';
        setLoad(true)
        try {
            const response = await fetch(endPoint, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    email: e.target.elements.email.value,
                    subject: e.target.elements.subject.value,
                    message: e.target.elements.message.value,
                }),
            }).then((res) => res).catch((err) => console.log(err));;
            console.log(response)

            if (response.status === 200) {
                setLoad(false)
                setDone(true)
            } else {
                setLoad(false)
                setDone(false)
            }
        } catch (error) {
            console.error('Error mengirim data:', error);
        }
    }
    return (
        <section className="grid md:grid-cols-2 gap-10 my-12 py-24" id="contact">
            <div>
                <h2 className="text-xl font-semibold md:text-left text-center mb-5 text-white">Contact Me</h2>
                <p className="text-justify text-white">Interested in collaborating or have questions? Feel free to contact me via LinkedIn or email. I am also active on Instagram, where you can see the latest projects. For convenience, please fill out the form on the right of this page. I will be happy to respond as quickly as possible. Thank You.</p>
                <div className="flex flex-row mt-4 justify-center sm:justify-start gap-5">
                    <Link href={'https://github.com/AdrianIchiro'}>
                        <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="logo" width={50} className="rounded-full" />
                    </Link>
                    <Link href={'https://www.linkedin.com/in/adrian-fahren-setiawan-34a939278/'}>
                        <img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" alt="logo" width={50} className="rounded-full" />
                    </Link>
                    <Link href={'https://www.instagram.com/fahrencta'}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png" alt="logo" width={50} className="rounded-full" />
                    </Link>
                </div>
            </div>
            <div>
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block font-medium text-sm mb-1 text-white">Email:</label>
                        <input type="email" name="email" id="email" placeholder="guest@email.com" required className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] rounded-lg text-sm text-gray-100 block w-full p-2.5" />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block font-medium text-sm mb-1 text-white">Subject</label>
                        <input type="text" name="subject" id="subject" placeholder="Dear..." required className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] rounded-lg text-sm text-gray-100 block w-full p-2.5" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block font-medium text-sm mb-1 text-white">Message</label>
                        <textarea name="message" id="message" placeholder="Hello Lets Talk for bussines" className="w-full rounded-lg border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] p-2.5"></textarea>
                    </div>
                    <button type="submit" className="bg-purple-500 text-lg font-semibold py-2 rounded-md hover:bg-white hover:text-black transition-all duration-500">Submit</button>
                    {
                        (load == true) ? <p>Loading...</p> : ''
                    }
                    {
                        (done == true) ? (<div className="bg-green-400 p-3 rounded-md font-semibold">
                            <p>Send Success!. Thank you for contact me</p>
                        </div>) : (done == false) ? (<div className="bg-red-400 p-3 rounded-md font-semibold">
                            <p>Send not sucess. Server maintenance</p>
                        </div>) : ('')
                    }

                </form>
            </div>
        </section>
    )
}
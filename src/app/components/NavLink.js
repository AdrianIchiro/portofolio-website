import Link from "next/link"
export default function NavLink({ href, title }) {
    return (
        <Link href={href} className="text-xl block text-white py-2 pl-3 pr-4 font-semibold hover:bg-gradient-to-tr hover:from-violet-500 hover:to-fuchsia-500 hover:bg-clip-text hover:text-transparent transition-all duration-200">
            {title}
        </Link>
    )
}
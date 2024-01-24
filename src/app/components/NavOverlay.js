import Link from "next/link"
import NavLink from "./NavLink"
export default function NavOverlay({ links }) {
    console.log(links)
    return (
        <ul className="flex flex-col items-center py-4">
            {links.map((value, i) => (
                <li key={i}>
                    <NavLink href={value.href} title={value.title} />
                </li>
            ))}
        </ul>
    )
}
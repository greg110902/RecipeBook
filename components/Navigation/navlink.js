'use client'

export default function NavLink({ text, link }) {
    return (
        <div>
            <a href={link}><button className="text-white hover:text-gray-400 px-5">{ text }</button></a>
        </div>
    )
}
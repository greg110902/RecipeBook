import NavLink from "./navlink";

export default function NavBar() {
    return (
        <div className="flex bg-slate-900 p-5">
            <NavLink text="Home" link="/"/>
            <NavLink text="Recipes" link="/recipes" />
            <NavLink text="Stock" link="/" />
        </div>
    )
}
import navList from "./navList";

export default function DrawerMenu({ open }) {
    return (
        <nav className={open ? "drawerMenu open" : "drawerMenu"}>
            <ul>
                {navList.map((item) => (
                    <li key={item.id}>{item.list}</li>
                ))}
            </ul>
        </nav>
    );
}

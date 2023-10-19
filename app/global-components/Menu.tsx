import Link from "next/link"

export default function Menu() {
    return (
        <div>
            <ul className="flex gap-2 min-w-screen p-5 absolute right-0">
                <Link href="/">Home</Link>
                <Link href="/patients">Patients</Link>
                <Link href="/orthodontics">Orthodontics</Link>
            </ul>
        </div>
    )
}
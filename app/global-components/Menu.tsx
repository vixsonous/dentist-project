import Link from "next/link"

export default function Menu() {
    return (
        <div>
            <ul className="flex text-white shadow-xl bg-[#88AB8E] gap-2 items-center justify-between w-screen p-2 absolute">
                <div className="flex gap-1 items-center">
                    <img width="40" height="40" src="https://img.icons8.com/clouds/100/tooth-cracked.png" alt="tooth-cracked"/>
                    <h1>Dental Clinic System</h1>
                </div>
                <div className="flex gap-2 p-2">
                    <Link className="hover:text-[#4F4A45]" href="/">Home</Link>
                    |
                    <Link className="hover:text-[#4F4A45]" href="/patients">Patients</Link>
                    |
                    <Link className="hover:text-[#4F4A45]" href="/orthodontics">Orthodontics</Link>
                </div>
            </ul>
        </div>
    )
}
import Link from "next/link";
import Menu from "../global-components/Menu";

export default function Patients() {
    return (
        <div>
            <Menu />
            <div className="min-h-screen flex flex-col justify-center items-center">
                <section className="w-3/4 h-96 border-2">
                    <Link href="/patient">XDDXD</Link>
                </section>
            </div>
        </div>
    )
}
import Link from "next/link";
import Menu from "../global-components/Menu";

export default function Home(){
    return (
        <div>
            <Menu />
            <div className="min-h-screen flex flex-col justify-center items-center">
                <section className="h-96 w-3/4 border-2">
                    <Link href="/patient/odontogram">Odontogram</Link>
                </section>
            </div>
        </div>
    )
}
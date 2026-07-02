import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-[#bd89eb] text-[#13051f] p-3 mx-auto px-4 flex text-xl min-w-screen">
            <div id="header-title" className="text-2xl">Aurora Norlund</div>
            <nav className="max-w-4xl px-4 flex ml-auto text-2xl">
                <ul className="flex gap-6">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
}
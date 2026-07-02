export default function Footer() {
    return (
        <footer className="bg-[#bd89eb] text-[#13051f] p-3">
            <div id="footer-title" className="container mx-auto text-center">
                <p>Copyright &copy; {new Date().getFullYear()} Aurora Norlund. All rights reserved.</p>
            </div>
        </footer>
    );
}
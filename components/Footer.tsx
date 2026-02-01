export default function Footer() {
    return (
        <footer>
            <div className="flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm font-semibold text-white">Sew Zarah</p>
                    <p className="mt-2 text-sm text-white/60">
                        Clothing repairs and alterations.
                    </p>
                </div>

                <div className="flex gap-6 text-sm text-white/60">
                    <a className="hover:text-white" href="#how-it-works">
                        How it works
                    </a>
                    <a className="hover:text-white" href="#contact">
                        Get in touch
                    </a>
                </div>
            </div>
        </footer>
    );
}

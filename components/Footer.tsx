export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Zarah Studio</p>
          <p className="mt-2 text-sm text-white/60">
            Calm, focused brand systems for modern teams.
          </p>
        </div>
        <div className="flex gap-6 text-sm text-white/60">
          <a className="hover:text-white" href="#how-it-works">
            Process
          </a>
          <a className="hover:text-white" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

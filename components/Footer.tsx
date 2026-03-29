export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Sew Zarah</p>
          <p className="mt-2 text-sm text-white/60">
            Klädreparation & ändringar
          </p>
        </div>

        <div className="flex gap-6 text-sm text-white/60">
          <a className="hover:text-white" href="#how-it-works">
            Så fungerar det
          </a>
          <a className="hover:text-white" href="#contact">
            Kontakta mig
          </a>
          <a
            href="https://www.instagram.com/sewzarah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/60 hover:text-white"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

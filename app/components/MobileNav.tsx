export default function MobileNav() {
  return (
    <nav className="fixed bottom-4 left-4 right-4 h-16 glass rounded-2xl border-white/40 shadow-xl md:hidden z-50 flex items-center justify-around px-4">
      <a className="flex flex-col items-center text-primary" href="#">
        <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>
          home
        </span>
      </a>
      <a className="flex flex-col items-center text-slate-400" href="#">
        <span className="material-symbols-outlined text-2xl">directions_car</span>
      </a>
      <a className="flex flex-col items-center text-slate-400" href="#">
        <span className="material-symbols-outlined text-2xl">calculate</span>
      </a>
      <a className="flex flex-col items-center text-slate-400" href="#">
        <span className="material-symbols-outlined text-2xl">chat</span>
      </a>
    </nav>
  );
}

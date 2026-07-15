export default function WhatsAppButton() {
  return (
    <a
      className="fixed bottom-24 md:bottom-8 right-6 md:right-8 w-14 h-14 bg-whatsapp-green text-white rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-transform active:scale-95"
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="material-symbols-outlined text-3xl">chat</span>
    </a>
  );
}

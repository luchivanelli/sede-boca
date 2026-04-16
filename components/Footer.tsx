import Link from "next/link";
import { Instagram, Facebook, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#090910] border-t border-[#1e1e2a] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display font-bold text-sm text-white uppercase tracking-wide">
          Arroyo Seco es de Boca
        </p>
        <p className="text-gray-500 text-xs text-center">
          © 2026 Arroyo Seco es de Boca <br /> by Luciana Vanelli
        </p>
        <div className="flex items-center gap-4">
          <Link href="https://www.instagram.com/arroyosecoesdeboca12/" target="_blank" className="text-gray-400 hover:text-[#FFD700] transition-colors text-xs font-display tracking-wider uppercase">
            Instagram
          </Link>
          <Link href="https://www.facebook.com/ARROYOSECOESDEBOCA" target="_blank" className="text-gray-400 hover:text-[#FFD700] transition-colors text-xs font-display tracking-wider uppercase">
            Facebook
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=543402658558&amp;" target="_blank" className="text-gray-400 hover:text-[#FFD700] transition-colors text-xs font-display tracking-wider uppercase">
            WhatsApp
          </Link>
        </div>
      </div>
    </footer>
  );
}

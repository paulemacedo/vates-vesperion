import { FaInstagram, FaWhatsapp, FaTiktok, FaYoutube, FaEnvelope } from "react-icons/fa";
import Button from "./ui/Button";
import { motion } from 'framer-motion'



const socialLinks = [
  {
    href: "https://www.instagram.com/vatesvesperion/",
    label: "Instagram",
    icon: <FaInstagram size={20} />,
  },
  {
    href: "https://wa.me/5521969079474",
    label: "WhatsApp",
    icon: <FaWhatsapp size={20} />,
  },
  {
    href: "https://tiktok.com/",
    label: "TikTok",
    icon: <FaTiktok size={20} />,
  },
  {
    href: "https://youtube.com/",
    label: "YouTube",
    icon: <FaYoutube size={20} />,
  },
  {
    href: "mailto:contato@email.com",
    label: "Email",
    icon: <FaEnvelope size={20} />,
  },
];

const Footer = () => (
<footer className="w-full px-6 py-8 bg-midnight text-gold flex flex-col items-center gap-6">
  <motion.div
    className="flex gap-4"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >
    {socialLinks.map(({ href, label, icon }) => (
      <Button
        key={label}
        variant="default"
        size="xl"
        className="rounded-full p-3 border-2 border-gold bg-transparent hover:bg-gold-gradient hover:text-midnight transition"
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        {icon}
      </Button>
    ))}
  </motion.div>
  <div className="text-xs text-center font-montserrat">
    © 2025 Todos os direitos reservados. Desenvolvido por Paule macedo
  </div>
</footer>
);

export default Footer;
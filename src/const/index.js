import { HomeIcon, BankAccountIcon, BuildIcon, DollarIcon, MapMarkerIcon, OfficeIcon } from "evergreen-ui";
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export const cardData = [
  {
    title: "Adquisición de vivienda",
    description:
      "Compra tu casa con nosotros. Te acompañaremos en todo el proceso, eligiendo el mejor banco y producto financiero para ti.",
    icon: HomeIcon
  },
  {
    title: "Cambio de hipoteca",
    description:
      "¿Pagas una hipoteca? Envíanos tu estado de cuenta y te diremos si puedes ahorrar o mejorar tu crédito actual sin compromiso.",
    icon: BankAccountIcon
  },
  {
    title: "Crédito para construcción o remodelación",
    description:
      "¿Quieres construir o remodelar tu casa? Tenemos el crédito ideal y nuestros expertos te ayudarán a elegir la mejor opción.",
    icon: BuildIcon
  },
  {
    title: "Crédito de liquidez",
    description:
      "¿Necesitas financiamiento? Deja tu casa en garantía y accede al crédito de liquidez más económico, incluso si está hipotecada.",
    icon: DollarIcon
  },
  {
    title: "Adquisición de terreno urbano",
    description:
      "Compra un terreno urbano como inversión. Nuestros expertos buscarán el financiamiento ideal para que tomes la mejor decisión.",
    icon: MapMarkerIcon
  },
  {
    title: "Crédito PyME",
    description:
      "¿Buscas comprar un local o nave industrial? Ofrecemos el mejor crédito comercial con asesoría en cada paso del proceso.",
    icon: OfficeIcon
  },
];

export const partnerships = [
  { name: "BBVA", logoUrl: "/img/bbva.png" },
  { name: "Santander", logoUrl: "/img/santander.png" },
  { name: "Banorte", logoUrl: "/img/banorte.png" },
  { name: "HSBC", logoUrl: "/img/hsbc.png" },
  { name: "Scotiabank", logoUrl: "/img/scotiabank.png" },
  { name: "Afirme", logoUrl: "/img/afirme.png" },
  { name: 'Yave' , logoUrl: "/img/yave.png" },
  { name: 'Hey Banco' , logoUrl: "/img/hey-banco.jpg" },
  { name: 'Banca Mifel', logoUrl: "/img/banca-mifel.webp" },
  { name: 'Kredi', logoUrl: "/img/kredi.png" },
  {name: 'ION', logoUrl: "/img/ion.webp" },
  
  // Add more banks as needed
];

export const socialMedia = [
  { name: "Facebook", icon: FaFacebook, link: import.meta.env.VITE_FA_LINK },
  { name: "Instagram", icon: FaInstagram, link: import.meta.env.VITE_IG_LINK },
  { name: "Whatsapp", icon: FaWhatsapp, link:  import.meta.env.VITE_WA_LINK },
  { name: "Email", icon: FaEnvelope, link: import.meta.env.VITE_EMAIL },
];
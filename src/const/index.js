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
  { name: "BBVA", logoUrl: "src/assets/img/bbva.png" },
  { name: "Santander", logoUrl: "src/assets/img/santander.png" },
  { name: "Banorte", logoUrl: "src/assets/img/banorte.png" },
  { name: "HSBC", logoUrl: "src/assets/img/hsbc.png" },
  { name: "Scotiabank", logoUrl: "src/assets/img/scotiabank.png" },
  { name: "Afirme", logoUrl: "src/assets/img/afirme.png" },
  { name: 'Yave' , logoUrl: "src/assets/img/yave.png" },
  { name: 'Hey Banco' , logoUrl: "src/assets/img/hey-banco.jpg" },
  { name: 'Banca Mifel', logoUrl: "src/assets/img/banca-mifel.webp" },
  { name: 'Kredi', logoUrl: "src/assets/img/kredi.png" },
  {name: 'ION', logoUrl: "src/assets/img/ion.webp" },
  
  // Add more banks as needed
];

export const socialMedia = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/capitalbrokerssaltillo" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/capital.brokersfg" },
  { name: "Whatsapp", icon: FaWhatsapp, link: "https://wa.me/+528442899086" },
  { name: "Email", icon: FaEnvelope, link: "mailto:capitalbrokers.saltillo@gmail.com" },
];
import { Pane, Text, majorScale, Link } from "evergreen-ui";
import { socialMedia } from "../../const";

const Footer = () => {
  return (
    <Pane
      background="#101840"
      padding={majorScale(4)}
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      {/* Main Row with Social Media, Contact, and Legal Sections */}
      <Pane
        display="flex"
        flexDirection={{ base: "row", lg: "column" }} // Change flexDirection based on screen size
        justifyContent="space-around" // Space out the sections on mobile
        alignItems="center" // Center items on mobile
        width="100%"
        maxWidth="800px"
        color="white"
        marginBottom={majorScale(3)}
        gap={majorScale(4)} // Adds space between sections
        flexWrap="wrap" // Allows wrapping of items on small screens
      >
        {/* Social Media Section */}
        <Pane display="flex" alignItems="center" gap={16} justifyContent="center">
          {socialMedia.map((item) => (
            <Link href={item.link} target="_blank" key={item.name} color="white">
              <item.icon size={24} />
            </Link>
          ))}
        </Pane>

        {/* Contact Information Section */}
        <Pane display="flex" flexDirection="column" alignItems="center" gap={8}>
          <Text color="white">Teléfono: +52 844 289 9086</Text>
          <Text color="white">Ubicación: Saltillo, Coahuila. México</Text>
        </Pane>

        {/* Legal Section */}
        <Pane display="flex" flexDirection="column" alignItems="center" gap={8}>
          <Link href="/terminos-y-condiciones" color="white" marginBottom={4}>
            Términos y Condiciones
          </Link>
          <Link href="/aviso-de-privacidad" color="white">
            Aviso de Privacidad
          </Link>
        </Pane>
      </Pane>

      {/* Branding Section */}
      <Pane>
        <Text size={400} color="white">
          &copy; {new Date().getFullYear()} Capital Brokers Financial Group. Todos los derechos reservados.
        </Text>
        <Text size={300} color="white" marginTop={majorScale(1)}>
          Author: <Link href="http://www.ntechsolucionesit.com" target="_blank" color="white">Daniel Alanis</Link>
        </Text>
      </Pane>
    </Pane>
  );
};

export default Footer;

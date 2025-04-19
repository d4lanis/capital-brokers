import { Pane, Text, majorScale, Link, Heading } from "evergreen-ui";
import { socialMedia } from "../../const";
import { useMediaQuery, breakpoints } from "../../hooks/useMediaQuery";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const isMobile = useMediaQuery(breakpoints.small);
  
/*  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
*/

  return (
    <Pane
      as="footer"
      role="contentinfo"
      aria-label="Footer"
      background="#101840"
      paddingY={majorScale(6)}
      paddingX={majorScale(3)}
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      {/* Logo & Slogan Section */}
      <Pane marginBottom={majorScale(4)} maxWidth="600px">
        <Heading size={600} color="white" marginBottom={majorScale(2)}>
          Capital Brokers
        </Heading>
        <Text color="white" fontStyle="italic" size={400}>
          &quot;Tu patrimonio, tu seguridad, nuestra misión.&quot;
        </Text>
      </Pane>
      
      
      {/* Main Footer Content Grid */}
      <Pane
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        justifyContent="space-around"
        alignItems={isMobile ? "center" : "flex-start"}
        width="100%"
        maxWidth="1200px"
        color="white"
        marginBottom={majorScale(4)}
        gap={majorScale(4)}
        textAlign={isMobile ? "center" : "left"}
      >
        {/* Company Info Section */}
        <Pane 
          display="flex" 
          flexDirection="column"
          alignItems={isMobile ? "center" : "flex-start"}
          width={isMobile ? "100%" : "33%"}
        >
          <Heading size={300} color="white" marginBottom={majorScale(2)} textTransform="uppercase" letterSpacing="1px">
            Nuestra Empresa
          </Heading>
          <Link href="#inicio" color="white" marginBottom={majorScale(1)}>
            Acerca de nosotros
          </Link>
          <Link href="#servicios" color="white" marginBottom={majorScale(1)}>
            Servicios
          </Link>
          <Link href="#porqueElegirnos" color="white" marginBottom={majorScale(1)}>
            ¿Por qué elegirnos?
          </Link>
          <Link href="#testimonios" color="white" marginBottom={majorScale(1)}>
            Testimonios
          </Link>
        </Pane>

        {/* Contact Information Section */}
        <Pane 
          display="flex" 
          flexDirection="column"
          alignItems={isMobile ? "center" : "flex-start"}
          width={isMobile ? "100%" : "33%"}
        >
          <Heading size={300} color="white" marginBottom={majorScale(2)} textTransform="uppercase" letterSpacing="1px">
            Contacto
          </Heading>
          <Text color="white" marginBottom={majorScale(1)}>
            Teléfono: +52 844 289 9086
          </Text>
          <Text color="white" marginBottom={majorScale(1)}>
            Ubicación: Saltillo, Coahuila. México
          </Text>
          <Text color="white" marginBottom={majorScale(1)}>
            Email: info@capitalbrokers.mx
          </Text>
          <Text color="white" marginBottom={majorScale(1)}>
            Horarios: Lunes a Viernes, 9:00 - 18:00
          </Text>
        </Pane>

        {/* Social Media Section */}
        <Pane 
          display="flex" 
          flexDirection="column"
          alignItems={isMobile ? "center" : "flex-start"}
          width={isMobile ? "100%" : "33%"}
        >
          <Heading size={300} color="white" marginBottom={majorScale(2)} textTransform="uppercase" letterSpacing="1px">
            Síguenos
          </Heading>
          <Pane display="flex" gap={majorScale(2)} justifyContent={isMobile ? "center" : "flex-start"}>
            {socialMedia.map((item) => (
              <Link 
                href={item.link} 
                target="_blank" 
                key={item.name} 
                aria-label={`Visita nuestro perfil de ${item.name}`}
              >
                <Pane
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width={38}
                  height={38}
                  borderRadius="50%"
                  backgroundColor="rgba(255,255,255,0.1)"
                  transition="all 0.2s ease"
                  _hover={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  <item.icon size={20} color="white" />
                </Pane>
              </Link>
            ))}
          </Pane>
          
          <Heading size={300} color="white" marginTop={majorScale(3)} marginBottom={majorScale(2)} textTransform="uppercase" letterSpacing="1px">
            Legal
          </Heading>
          <Link href="/terminos-y-condiciones" color="white" marginBottom={majorScale(1)}>
            Términos y Condiciones
          </Link>
          <Link href="/aviso-de-privacidad" color="white">
            Aviso de Privacidad
          </Link>
        </Pane>
      </Pane>

      {/* Copyright Section */}
      <Pane>
        <Text size={300} color="white">
          &copy; {currentYear} Capital Brokers Financial Group. Todos los derechos reservados.
        </Text>
        <Text size={300} color="rgba(255,255,255,0.6)" marginTop={majorScale(1)}>
          Desarrollado por: <Link href="http://www.ntechsolucionesit.com" target="_blank" color="white">Daniel Alanis</Link>
        </Text>
      </Pane>
    </Pane>
  );
};

export default Footer;

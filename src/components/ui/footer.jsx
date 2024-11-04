import { Pane, Text, majorScale, Link } from "evergreen-ui";

const Footer = () => {
  return (
    <Pane
      // Removed position: fixed
      bottom={0} // This can be removed as well
      left={0} // This can be removed as well
      width="100%" // Makes it span the full width
      background="#101840" // Dark background color
      padding={majorScale(2)} // Adds padding
      display="flex"
      flexDirection="column"
      justifyContent="center" // Center-aligns content
      alignItems="center"
      zIndex={1} // Keeps it above other elements
    >
      <Text size={400} color="white" marginBottom={majorScale(1)}>
        &copy; {new Date().getFullYear()} BrandName. Todos los derechos reservados. | Author: N-TECH Soluciones IT
      </Text>
      <Pane display="flex" marginTop={majorScale(1)}>
        <Link href="/aviso-de-privacidad" color="white" marginRight={majorScale(2)}>
          Aviso de Privacidad
        </Link>
        <Link href="/terminos-y-condiciones" color="white">
          Términos y Condiciones
        </Link>
      </Pane>
    </Pane>
  );
};

export default Footer;
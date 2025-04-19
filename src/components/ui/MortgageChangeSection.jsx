import PropTypes from "prop-types";
import { Pane, Heading, Text, Button, majorScale, Link } from "evergreen-ui";


/**
 * A reusable component for displaying mortgage change information
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.reversed - Whether the layout should be reversed (image on right)
 * @param {React.ReactNode} props.children - Additional content to render
 * @returns {React.ReactElement} The MortgageChangeSection component
 */
const MortgageChangeSection = ({ className, backgroundColor = "#f5f7fa", reversed = false, children, ...props }) => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5218442899086", "_blank");
  };

  return (
    <Pane
      className={className}
      display="flex"
      flexDirection={{ default: "column", medium: reversed ? "row-reverse" : "row" }}
      alignItems="center"
      justifyContent="center"
      padding={majorScale(4)}
      gap={majorScale(4)}
      backgroundColor={backgroundColor}
      borderRadius={8}
      {...props}
    >
      {/* Content Column */}
      <Pane 
        display="flex" 
        flexDirection="column" 
        width={{ default: "100%", medium: "60%" }}
        paddingX={majorScale(2)}
      >
        <Pane display="flex" flexDirection={{ default: "column", medium: "row" }} alignItems={{ default: "flex-start", medium: "center" }} justifyContent="space-between" marginBottom={majorScale(2)}>
          <Heading size={700} marginBottom={{ default: majorScale(2), medium: 0 }}>
            🔁 Cambio de Hipoteca (Mejoras)
          </Heading>
          
          <Button 
            appearance="primary"
            size="large"
            onClick={handleWhatsAppClick}
            marginLeft={{ default: 0, medium: majorScale(2) }}
            marginTop={{ default: majorScale(2), medium: 0 }}
          >
            Solicita tu estudio gratuito
          </Button>
        </Pane>
        
        <Heading size={600} marginBottom={majorScale(2)}>
          ¿Ya tienes una hipoteca? Ahorra miles con nosotros
        </Heading>
        <Text marginBottom={majorScale(3)}>
          Envíanos tu último estado de cuenta y haremos un análisis sin compromiso.<br />
          Podrías reducir tu tasa y <strong>ahorrar miles de pesos</strong> al cambiar tu crédito actual.
        </Text>
        <Pane marginBottom={majorScale(3)}>
          <Text>
            📩 <Link href="https://wa.me/5218442899086" onClick={handleWhatsAppClick}>
              Haz clic aquí
            </Link> para solicitar tu estudio gratuito
          </Text>
        </Pane>
        
        {children}
      </Pane>
    </Pane>
  );
};

MortgageChangeSection.propTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  reversed: PropTypes.bool,
  children: PropTypes.node,
};

export default MortgageChangeSection;
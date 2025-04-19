import { Pane, Heading, Text, Button, majorScale, Card } from "evergreen-ui";
import PropTypes from "prop-types";
import { FaWhatsapp } from "react-icons/fa";
import { FaHardHat, FaCoins, FaHandshake } from "react-icons/fa";

/**
 * A reusable component for displaying construction loan information
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.reversed - Whether the layout should be reversed (image on right)
 * @param {React.ReactNode} props.children - Additional content to render
 * @returns {React.ReactElement} The ConstructionLoanSection component
 */
const ConstructionLoanSection = ({ className,backgroundColor = "#f5f7fa", reversed = false, children, ...props }) => {
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
            🛠️ Crédito para Construcción o Remodelación
          </Heading>
          
          <Button 
            appearance="primary"
            size="large"
            iconBefore={FaWhatsapp}
            onClick={handleWhatsAppClick}
            marginLeft={{ default: 0, medium: majorScale(2) }}
            marginTop={{ default: majorScale(2), medium: 0 }}
          >
            Consulta con nuestros expertos
          </Button>
        </Pane>
        
        <Heading size={600} marginBottom={majorScale(2)}>
          Construye o renueva con respaldo financiero
        </Heading>
        <Text marginBottom={majorScale(3)}>
          Ya sea que tengas un terreno propio o quieras remodelar tu vivienda actual, te ayudamos a encontrar el mejor crédito de construcción.
        </Text>
        
        {/* Feature cards */}
        <Pane 
          display="flex" 
          flexDirection={{ default: "column", medium: "row" }}
          flexWrap="wrap"
          gap={majorScale(2)}
          marginBottom={majorScale(3)}
        >
          <Card 
            elevation={1}
            background="tint1"
            padding={majorScale(2)}
            flex={1}
            minWidth={{ default: "100%", medium: "30%" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
          >
            <FaHardHat size={24} color="#34b1e6" style={{ marginBottom: '8px' }} />
            <Text fontWeight="bold">
              🏗️ Ideal para casas en terreno propio
            </Text>
          </Card>
          
          <Card 
            elevation={1}
            background="tint1"
            padding={majorScale(2)}
            flex={1}
            minWidth={{ default: "100%", medium: "30%" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
          >
            <FaCoins size={24} color="#34b1e6" style={{ marginBottom: '8px' }} />
            <Text fontWeight="bold">
              🎯 Financiamiento ajustado a tu presupuesto
            </Text>
          </Card>
          
          <Card 
            elevation={1}
            background="tint1"
            padding={majorScale(2)}
            flex={1}
            minWidth={{ default: "100%", medium: "30%" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
          >
            <FaHandshake size={24} color="#34b1e6" style={{ marginBottom: '8px' }} />
            <Text fontWeight="bold">
              👷 Trato directo con expertos hipotecarios
            </Text>
          </Card>
        </Pane>
        
        {children}
      </Pane>
    </Pane>
  );
};
ConstructionLoanSection.propTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  reversed: PropTypes.bool,
  children: PropTypes.node,
};

export default ConstructionLoanSection;
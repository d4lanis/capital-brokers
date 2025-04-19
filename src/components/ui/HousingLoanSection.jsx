import PropTypes from "prop-types";
import { Pane, Heading, Text, Button, majorScale, ListItem, UnorderedList, Badge, Tooltip, Card } from "evergreen-ui";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";

/**
 * A reusable component for displaying housing loan information
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.reversed - Whether the layout should be reversed (image on right)
 * @param {React.ReactNode} props.children - Additional content to render
 * @returns {React.ReactElement} The HousingLoanSection component
 */
const HousingLoanSection = ({ className,backgroundColor = "#f5f7fa", reversed = false, children, ...props }) => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5218442899086", "_blank");
  };

  return (
    <Pane
      as="section"
      className={`${className} animate-fadeIn`}
      display="flex"
      flexDirection={{ default: "column", medium: reversed ? "row-reverse" : "row" }}
      alignItems="center"
      justifyContent="center"
      padding={majorScale(4)}
      gap={majorScale(4)}
      backgroundColor={backgroundColor}
      borderRadius={8}
      elevation={1}
      id="vivienda"
      aria-labelledby="vivienda-heading"
      {...props}
    >
      {/* Content Column */}
      <Pane 
        display="flex" 
        flexDirection="column" 
        width={{ default: "100%", medium: "60%" }}
        paddingX={majorScale(2)}
      >
        <Badge color="blue" marginBottom={majorScale(1)}>Más Popular</Badge>
        
        <Pane display="flex" flexDirection={{ default: "column", medium: "row" }} alignItems={{ default: "flex-start", medium: "center" }} justifyContent="space-between" marginBottom={majorScale(2)}>
          <Heading id="vivienda-heading" size={700}>
            🏠 Crédito para Adquisición de Vivienda
          </Heading>
          
          <Button 
            appearance="primary"
            intent="success"
            size="large"
            height={44}
            iconBefore={FaWhatsapp}
            onClick={handleWhatsAppClick}
            marginLeft={{ default: 0, medium: majorScale(2) }}
            marginTop={{ default: majorScale(2), medium: 0 }}
            className="cta-button"
          >
            Agenda tu asesoría gratuita
          </Button>
        </Pane>
        
        <Heading size={600} marginBottom={majorScale(2)}>
          Compra tu casa con la mejor hipoteca del mercado
        </Heading>
        <Text marginBottom={majorScale(2)} lineHeight={1.6}>
          ¿Buscas comprar casa en Saltillo?<br />
          Te guiamos paso a paso y comparamos por ti entre más de 15 bancos para encontrar el <strong>crédito hipotecario más conveniente</strong>.
        </Text>
        
        <Card 
          backgroundColor="tint1" 
          padding={16} 
          marginBottom={majorScale(3)}
          borderLeft="3px solid #47B881"
        >
          <UnorderedList marginBottom={0} paddingLeft={majorScale(2)}>
            <ListItem icon={FaCheckCircle} iconColor="#47B881">
              <Text fontWeight={500}>Atención personalizada</Text>
            </ListItem>
            <ListItem icon={FaCheckCircle} iconColor="#47B881">
              <Text fontWeight={500}>Sin costo por asesoría</Text>
            </ListItem>
            <ListItem icon={FaCheckCircle} iconColor="#47B881">
              <Text fontWeight={500}>Aprobación rápida</Text>
            </ListItem>
          </UnorderedList>
        </Card>
        
        <Pane 
          display="flex" 
          justifyContent="space-between" 
          backgroundColor="tint2" 
          padding={16} 
          borderRadius={4}
        >
          <Tooltip content="Las tasas pueden variar según tu perfil y situación crediticia">
            <Pane>
              <Text fontWeight="bold" size={300}>Tasa desde:</Text>
              <Text fontSize={24} fontWeight="bold" color="#47B881">8.90%</Text>
            </Pane>
          </Tooltip>
          
          <Tooltip content="Generalmente se requiere entre 10-20% del valor del inmueble">
            <Pane>
              <Text fontWeight="bold" size={300}>Enganche desde:</Text>
              <Text fontSize={24} fontWeight="bold" color="#47B881">10%</Text>
            </Pane>
          </Tooltip>
          
          <Tooltip content="Los plazos pueden ajustarse a tus necesidades y capacidad de pago">
            <Pane>
              <Text fontWeight="bold" size={300}>Plazo hasta:</Text>
              <Text fontSize={24} fontWeight="bold" color="#47B881">20 años</Text>
            </Pane>
          </Tooltip>
        </Pane>
        
        {children}
      </Pane>
    </Pane>
  );
};

HousingLoanSection.propTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  reversed: PropTypes.bool,
  children: PropTypes.node,
};

export default HousingLoanSection;
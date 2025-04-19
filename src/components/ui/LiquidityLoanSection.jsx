import PropTypes from "prop-types";
import { Pane, Heading, Text, Button, majorScale, Card, Strong, Alert } from "evergreen-ui";
import { FaWhatsapp, FaHome, FaMoneyBillWave, FaClock } from "react-icons/fa";

/**
 * A reusable component for displaying liquidity loan information (using house as collateral)
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.reversed - Whether the layout should be reversed (image on right)
 * @param {React.ReactNode} props.children - Additional content to render
 * @returns {React.ReactElement} The LiquidityLoanSection component
 */
const LiquidityLoanSection = ({ className, backgroundColor = "#f5f7fa", reversed = false, children, ...props }) => {
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
            💰 Crédito de Liquidez con Garantía Hipotecaria
          </Heading>
          
          <Button 
            appearance="primary"
            size="large"
            iconBefore={FaWhatsapp}
            onClick={handleWhatsAppClick}
            marginLeft={{ default: 0, medium: majorScale(2) }}
            marginTop={{ default: majorScale(2), medium: 0 }}
          >
            Consulta tu capacidad de crédito
          </Button>
        </Pane>
        
        <Heading size={600} marginBottom={majorScale(2)}>
          Obtén dinero utilizando tu casa como respaldo
        </Heading>
        <Text marginBottom={majorScale(3)}>
          Aprovecha el valor de tu propiedad para obtener financiamiento con las tasas más competitivas del mercado. 
          Te ayudamos a convertir el patrimonio de tu vivienda en efectivo para los proyectos que necesites.
        </Text>
        
        {/* Benefits with Callouts */}
        <Pane marginBottom={majorScale(3)}>
          <Alert
            intent="success"
            title="¿Por qué elegir un crédito con garantía hipotecaria?"
            marginBottom={majorScale(2)}
          >
            Obtén tasas de interés significativamente más bajas que préstamos personales o tarjetas de crédito, 
            gracias al respaldo que ofrece tu propiedad.
          </Alert>
          
          <Pane 
            display="flex" 
            flexDirection={{ default: "column", medium: "row" }}
            flexWrap="wrap"
            gap={majorScale(2)}
            marginY={majorScale(3)}
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
              <FaHome size={24} color="#34b1e6" style={{ marginBottom: '8px' }} />
              <Text fontWeight="bold">
                🏠 Respaldo seguro
              </Text>
              <Text size={300}>
                Tu propiedad respalda el préstamo, permitiendo mejores condiciones
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
              <FaMoneyBillWave size={24} color="#34b1e6" style={{ marginBottom: '8px' }} />
              <Text fontWeight="bold">
                💸 Montos mayores
              </Text>
              <Text size={300}>
                Accede a cantidades superiores a las de un préstamo personal convencional
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
              <FaClock size={24} color="#34b1e6" style={{ marginBottom: '8px' }} />
              <Text fontWeight="bold">
                ⏱️ Plazos extensos
              </Text>
              <Text size={300}>
                Períodos de pago más largos para cuotas mensuales más cómodas
              </Text>
            </Card>
          </Pane>
          
          <Alert
            intent="warning"
            title="Usos comunes del crédito de liquidez"
            marginBottom={majorScale(2)}
            hasIcon={false}
          >
            <Strong>• Consolidación de deudas</Strong>: Unifica tus deudas de alto interés en un solo pago mensual<br />
            <Strong>• Remodelaciones mayores</Strong>: Invierte en mejoras que aumenten el valor de tu propiedad<br />
            <Strong>• Educación</Strong>: Financia estudios universitarios o de posgrado<br />
            <Strong>• Emergencias médicas</Strong>: Cubre gastos médicos importantes<br />
            <Strong>• Inversiones</Strong>: Capital para negocios o inversiones estratégicas
          </Alert>
        </Pane>
        
        {children}
      </Pane>
    </Pane>
  );
};

LiquidityLoanSection.propTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  reversed: PropTypes.bool,
  children: PropTypes.node,
};

export default LiquidityLoanSection;
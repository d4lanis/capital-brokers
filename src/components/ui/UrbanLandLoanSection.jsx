import PropTypes from "prop-types";
import { Pane, Heading, Text, Button, majorScale, Card, Strong, Alert } from "evergreen-ui";
import { FaWhatsapp, FaMapMarkedAlt, FaChartLine, FaHome } from "react-icons/fa";

/**
 * A reusable component for displaying urban land acquisition loan information
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.reversed - Whether the layout should be reversed (image on right)
 * @param {React.ReactNode} props.children - Additional content to render
 * @returns {React.ReactElement} The UrbanLandLoanSection component
 */
const UrbanLandLoanSection = ({ className, backgroundColor = "#f5f7fa", reversed = false, children, ...props }) => {
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
            🏗️ Crédito para Adquisición de Terreno Urbano
          </Heading>
          
          <Button 
            appearance="primary"
            size="large"
            iconBefore={FaWhatsapp}
            onClick={handleWhatsAppClick}
            marginLeft={{ default: 0, medium: majorScale(2) }}
            marginTop={{ default: majorScale(2), medium: 0 }}
          >
            Consulta opciones de financiamiento
          </Button>
        </Pane>
        
        <Heading size={600} marginBottom={majorScale(2)}>
          Invierte en tu futuro: Adquiere tu lote urbano hoy
        </Heading>
        <Text marginBottom={majorScale(3)}>
          Financiamos la compra de tu terreno urbano con las mejores condiciones del mercado. 
          Tener tu propio lote es el primer paso para construir tu patrimonio y asegurar una 
          inversión que incrementará su valor con el tiempo.
        </Text>
        
        {/* Benefits with Callouts */}
        <Pane marginBottom={majorScale(3)}>
          <Alert
            intent="success"
            title="¿Por qué financiar la compra de un terreno?"
            marginBottom={majorScale(2)}
          >
            Asegura hoy tu patrimonio a precios actuales, con la posibilidad de construir en el futuro cuando tu economía lo permita.
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
              <FaMapMarkedAlt size={24} color="#34b1e6" style={{ marginBottom: '8px' }} />
              <Text fontWeight="bold">
                📍 Ubicación estratégica
              </Text>
              <Text size={300}>
                El valor de un terreno urbano depende principalmente de su ubicación y servicios
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
              <FaChartLine size={24} color="#34b1e6" style={{ marginBottom: '8px' }} />
              <Text fontWeight="bold">
                📈 Apreciación constante
              </Text>
              <Text size={300}>
                Los terrenos urbanos generalmente aumentan su valor con el paso del tiempo
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
              <FaHome size={24} color="#34b1e6" style={{ marginBottom: '8px' }} />
              <Text fontWeight="bold">
                🏡 Construye a tu ritmo
              </Text>
              <Text size={300}>
                Planifica la construcción de tu vivienda según tus posibilidades y necesidades
              </Text>
            </Card>
          </Pane>
          
          <Alert
            intent="warning"
            title="Ventajas de nuestros créditos para terrenos"
            marginBottom={majorScale(2)}
            hasIcon={false}
          >
            <Strong>• Enganche accesible</Strong>: Desde el 20% del valor del terreno<br />
            <Strong>• Plazos flexibles</Strong>: Hasta 15 años para pagar<br />
            <Strong>• Sin penalizaciones</Strong>: Por pagos anticipados<br />
            <Strong>• Proceso simplificado</Strong>: Menos requisitos que un crédito tradicional<br />
            <Strong>• Asesoría completa</Strong>: Te orientamos en todo el proceso de compra
          </Alert>
        </Pane>
        
        {children}
      </Pane>
    </Pane>
  );
};

UrbanLandLoanSection.propTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  reversed: PropTypes.bool,
  children: PropTypes.node,
};

export default UrbanLandLoanSection;
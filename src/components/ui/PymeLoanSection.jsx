import PropTypes from "prop-types";
import { Pane, Heading, Text, Button, majorScale, Card, Strong, Alert } from "evergreen-ui";
import { FaWhatsapp, FaBuilding, FaChartLine, FaUserTie } from "react-icons/fa";

/**
 * A reusable component for displaying PYME (small and medium business) loan information
 * for commercial real estate acquisition
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.reversed - Whether the layout should be reversed (image on right)
 * @param {React.ReactNode} props.children - Additional content to render
 * @returns {React.ReactElement} The PymeLoanSection component
 */
const PymeLoanSection = ({ className, backgroundColor = "#f5f7fa", reversed = false, children, ...props }) => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5218442899086", "_blank");
  };

  const handlePymePortalClick = () => {
    window.open("https://capitalbrokers.creditaria.com.mx/index-pyme.php", "_blank");
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
            🏢 Crédito PYME para Bienes Raíces Comerciales
          </Heading>
          
          <Pane display="flex" flexDirection={{ default: "column", medium: "row" }} gap={majorScale(2)}>
            <Button 
              appearance="primary"
              size="large"
              onClick={handlePymePortalClick}
              marginLeft={{ default: 0, medium: majorScale(2) }}
              marginTop={{ default: majorScale(2), medium: 0 }}
            >
              Solicitar crédito PYME
            </Button>
            
            <Button 
              appearance="default"
              size="large"
              iconBefore={FaWhatsapp}
              onClick={handleWhatsAppClick}
              marginLeft={{ default: 0, medium: 0 }}
              marginTop={{ default: majorScale(2), medium: 0 }}
            >
              Asesoría personalizada
            </Button>
          </Pane>
        </Pane>
        
        <Heading size={600} marginBottom={majorScale(2)}>
          Impulsa tu negocio con el local comercial ideal
        </Heading>
        <Text marginBottom={majorScale(3)}>
          Financiamiento especializado para la adquisición de bienes inmuebles comerciales 
          diseñado exclusivamente para emprendedores y empresarios que buscan expandir sus 
          operaciones o establecer un nuevo punto de venta.
        </Text>
        
        {/* Benefits with Callouts */}
        <Pane marginBottom={majorScale(3)}>
          <Alert
            intent="success"
            title="Soluciones flexibles para pequeñas y medianas empresas"
            marginBottom={majorScale(2)}
          >
            Ofrecemos financiamiento a la medida para impulsar el crecimiento de tu PYME, con planes
            adaptados a tus flujos de ingreso y necesidades específicas.
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
              <FaBuilding size={24} color="#34b1e6" style={{ marginBottom: '8px' }} />
              <Text fontWeight="bold">
                🏢 Ubicación comercial
              </Text>
              <Text size={300}>
                Adquiere propiedades en zonas estratégicas para maximizar el tráfico de clientes
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
                📈 Patrimonio empresarial
              </Text>
              <Text size={300}>
                Construye activos para tu empresa y obtén beneficios fiscales
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
              <FaUserTie size={24} color="#34b1e6" style={{ marginBottom: '8px' }} />
              <Text fontWeight="bold">
                💼 Imagen profesional
              </Text>
              <Text size={300}>
                Consolida la presencia de tu marca con un espacio propio y profesional
              </Text>
            </Card>
          </Pane>
          
          <Alert
            intent="warning"
            title="¿Cómo utilizar el financiamiento para PYMES?"
            marginBottom={majorScale(2)}
            hasIcon={false}
          >
            <Strong>• Capital de trabajo</Strong>: Mantén tu operación diaria con liquidez<br />
            <Strong>• Expansión</Strong>: Abre nuevas sucursales o amplía tus instalaciones<br />
            <Strong>• Maquinaria y equipo</Strong>: Actualiza tu tecnología y capacidad productiva<br />
            <Strong>• Inventario</Strong>: Aumenta tu stock para temporadas altas<br />
            <Strong>• Digitalización</Strong>: Invierte en transformación digital y presencia online
          </Alert>
        </Pane>
        
        {children}
      </Pane>
    </Pane>
  );
};

PymeLoanSection.propTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  reversed: PropTypes.bool,
  children: PropTypes.node,
};

export default PymeLoanSection;
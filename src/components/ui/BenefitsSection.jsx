import { useState } from "react";
import PropTypes from "prop-types";
import { Pane, Heading, Text, Button, majorScale, Card, Tooltip } from "evergreen-ui";
import { FaWhatsapp, FaClipboardCheck, FaChartLine, FaHandshake, FaRegFilePdf, FaCogs, FaThumbsUp } from "react-icons/fa";
import { useMediaQuery, breakpoints } from "../../hooks/useMediaQuery";

/**
 * A section component displaying the benefits of choosing Capital Brokers in a checklist format
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.backgroundColor - Background color of the section
 * @param {React.ReactNode} props.children - Additional content to render
 * @returns {React.ReactElement} The BenefitsSection component
 */
const BenefitsSection = ({ className, backgroundColor = "#f5f7fa", children, ...props }) => {
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const isMobile = useMediaQuery(breakpoints.small);
  const isTablet = useMediaQuery(breakpoints.medium);
  const isDesktop = useMediaQuery(breakpoints.large);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5218442899086", "_blank");
  };

  const benefits = [
    {
      id: "experts",
      title: "Expertos en hipotecas",
      description: "Más de 10 años de experiencia en el mercado hipotecario de Saltillo",
      icon: FaChartLine,
      color: "#34b1e6"
    },
    {
      id: "free",
      title: "Asesoría gratuita",
      description: "Todos nuestros servicios de asesoría son 100% gratuitos",
      icon: FaHandshake,
      color: "#47B881"
    },
    {
      id: "compare",
      title: "Comparamos entre bancos",
      description: "Analizamos las opciones de más de 15 instituciones financieras",
      icon: FaClipboardCheck,
      color: "#D9822B"
    },
    {
      id: "rates",
      title: "Mejores tasas",
      description: "Conseguimos condiciones preferenciales gracias a nuestras alianzas",
      icon: FaChartLine,
      color: "#735DD0"
    },
    {
      id: "support",
      title: "Acompañamiento completo",
      description: "Te guiamos en cada paso del proceso, desde la solicitud hasta la firma",
      icon: FaHandshake,
      color: "#EC4C47"
    },
    {
      id: "simple",
      title: "Trámites simplificados",
      description: "Nos encargamos de la gestión documental para agilizar tu proceso",
      icon: FaRegFilePdf,
      color: "#1070CA"
    },
    {
      id: "options",
      title: "Opciones para todos",
      description: "Soluciones personalizadas según tu perfil y necesidades específicas",
      icon: FaCogs,
      color: "#F7D154"
    },
    {
      id: "post",
      title: "Servicio post-venta",
      description: "Seguimos a tu disposición después de concretada la operación",
      icon: FaThumbsUp,
      color: "#E4E7EB"
    }
  ];

  // Calculate the width of benefit cards based on screen size
  const getBenefitCardWidth = () => {
    if (isMobile) return "100%";
    if (isTablet && !isDesktop) return "calc(50% - 16px)";
    return "calc(25% - 16px)";
  };

  return (
    <Pane
      as="section"
      role="region"
      aria-labelledby="benefits-heading"
      className={className}
      background={backgroundColor}
      padding={majorScale(5)}
      display="flex"
      flexDirection="column"
      alignItems="center"
      borderRadius={8}
      {...props}
    >
      <Pane display="flex" flexDirection={isMobile || isTablet ? "column" : "row"} alignItems={isMobile || isTablet ? "flex-start" : "center"} justifyContent="space-between" marginBottom={majorScale(2)} width="100%" maxWidth="1200px">
        <Heading id="benefits-heading" size={800} marginBottom={majorScale(2)} textAlign={isMobile || isTablet ? "center" : "left"}>
          ¿Por qué elegir Capital Brokers Saltillo?
        </Heading>
        
        <Tooltip content="Te responderemos en menos de 24 horas">
          <Button
            appearance="primary"
            intent="success"
            size="large"
            iconBefore={FaWhatsapp}
            onClick={handleWhatsAppClick}
            className="cta-button"
            marginLeft={isMobile || isTablet ? 0 : majorScale(2)}
            marginTop={isMobile || isTablet ? majorScale(2) : 0}
          >
            Agenda tu asesoría personalizada
          </Button>
        </Tooltip>
      </Pane>
      
      <Text size={500} marginBottom={majorScale(4)} textAlign="center" maxWidth="800px" lineHeight={1.6}>
        Somos especialistas en créditos hipotecarios y financiamiento inmobiliario, 
        enfocados en encontrar la mejor solución para cada cliente.
      </Text>
      
      <Pane 
        display="flex" 
        flexDirection={isMobile || isTablet ? "column" : "row"}
        flexWrap="wrap"
        width="100%"
        marginBottom={majorScale(4)}
        maxWidth="1200px"
        gap={majorScale(3)}
      >
        {benefits.map((benefit) => (
          <Card 
            key={benefit.id}
            elevation={hoveredBenefit === benefit.id ? 2 : 1}
            backgroundColor={hoveredBenefit === benefit.id ? "white" : "tint1"}
            padding={majorScale(3)}
            display="flex"
            alignItems="flex-start"
            width={getBenefitCardWidth()}
            cursor="default"
            transition="all 0.2s ease"
            position="relative"
            overflow="hidden"
            onMouseEnter={() => setHoveredBenefit(benefit.id)}
            onMouseLeave={() => setHoveredBenefit(null)}
            borderTop={`3px solid ${benefit.color}`}
            className="animate-fadeIn"
          >
            {/* Decorative circle in the background */}
            <Pane
              position="absolute"
              top={-20}
              right={-20}
              width={100}
              height={100}
              borderRadius="50%"
              backgroundColor={benefit.color}
              opacity={0.1}
              zIndex={0}
            />
            
            <Pane
              display="flex"
              alignItems="center"
              justifyContent="center"
              width={48}
              height={48}
              borderRadius="50%"
              backgroundColor={benefit.color}
              marginRight={majorScale(2)}
              flexShrink={0}
              zIndex={1}
            >
              <benefit.icon size={24} color="white" />
            </Pane>
            
            <Pane flex={1} zIndex={1}>
              <Heading size={500} marginBottom={majorScale(1)}>
                {benefit.title}
              </Heading>
              <Text color="muted" lineHeight={1.5}>
                {benefit.description}
              </Text>
            </Pane>
          </Card>
        ))}
      </Pane>      
      {children}
    </Pane>
  );
};

BenefitsSection.propTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node
};

export default BenefitsSection;
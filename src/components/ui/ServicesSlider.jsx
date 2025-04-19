import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Pane, Heading, Text, Button, majorScale, Card, Badge } from "evergreen-ui";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHome, FaTools, FaExchangeAlt, FaDollarSign, FaMapMarkedAlt, FaBuilding } from "react-icons/fa";

/**
 * A slider component to showcase all services
 * @param {Object} props - Component props
 * @param {Array} props.services - Array of service components to display
 * @returns {React.ReactElement} The ServicesSlider component
 */
const ServicesSlider = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getIconForType = (type) => {
    switch (type) {
      case "housing": return <FaHome size={24} color="#3366FF" />;
      case "construction": return <FaTools size={24} color="#3366FF" />;
      case "mortgage": return <FaExchangeAlt size={24} color="#3366FF" />;
      case "liquidity": return <FaDollarSign size={24} color="#3366FF" />;
      case "urban": return <FaMapMarkedAlt size={24} color="#3366FF" />;
      case "pyme": return <FaBuilding size={24} color="#3366FF" />;
      default: return <FaHome size={24} color="#3366FF" />;
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: windowWidth < 768 ? 1 : windowWidth < 1024 ? 2 : 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const serviceCards = [
    {
      id: "vivienda",
      title: "Crédito para Adquisición de Vivienda",
      description: "Compra tu casa con la mejor hipoteca del mercado. Comparamos entre más de 15 bancos.",
      icon: "housing",
      badge: "Más Popular",
      stats: [
        { label: "Tasa desde", value: "8.90%" },
        { label: "Enganche desde", value: "10%" },
        { label: "Plazo hasta", value: "20 años" }
      ]
    },
    {
      id: "construccion",
      title: "Crédito para Construcción",
      description: "Financia la construcción de tu hogar. Te asesoramos durante todo el proceso.",
      icon: "construction",
      badge: "Flexible",
      stats: [
        { label: "Tasa desde", value: "9.25%" },
        { label: "Enganche desde", value: "20%" },
        { label: "Plazo hasta", value: "15 años" }
      ]
    },
    {
      id: "cambio",
      title: "Cambio de Hipoteca",
      description: "Reduce tu mensualidad cambiando tu hipoteca con mejores condiciones.",
      icon: "mortgage",
      badge: "Ahorro",
      stats: [
        { label: "Tasa desde", value: "8.50%" },
        { label: "Reducción", value: "Hasta 30%" },
        { label: "Plazo hasta", value: "20 años" }
      ]
    },
    {
      id: "liquidez",
      title: "Crédito con Garantía Hipotecaria",
      description: "Obtén liquidez poniendo como garantía un inmueble de tu propiedad.",
      icon: "liquidity",
      badge: "Rápido",
      stats: [
        { label: "Tasa desde", value: "10.50%" },
        { label: "Préstamo hasta", value: "70%" },
        { label: "Plazo hasta", value: "15 años" }
      ]
    },
    {
      id: "terrenos",
      title: "Crédito para Terrenos",
      description: "Adquiere un terreno para construir tu casa en el futuro.",
      icon: "urban",
      badge: "Oportunidad",
      stats: [
        { label: "Tasa desde", value: "11.90%" },
        { label: "Enganche desde", value: "30%" },
        { label: "Plazo hasta", value: "10 años" }
      ]
    },
    {
      id: "pyme",
      title: "Crédito PyME",
      description: "Impulsamos tu negocio con financiamiento que se adapta a tus necesidades.",
      icon: "pyme",
      badge: "Negocios",
      stats: [
        { label: "Tasa desde", value: "12.50%" },
        { label: "Monto hasta", value: "$5M" },
        { label: "Plazo hasta", value: "5 años" }
      ]
    }
  ];

  const handleServiceCardClick = (serviceId) => {
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Pane width="100%" maxWidth="1200px" marginX="auto" marginBottom={majorScale(6)}>
      <Heading is="h2" size={700} marginBottom={majorScale(4)} textAlign="center">
        Nuestros Servicios
      </Heading>
      
      <Pane className="services-slider" marginX={majorScale(2)}>
        <Slider {...sliderSettings}>
          {serviceCards.map((service) => (
            <Pane key={service.id} padding={majorScale(1)}>
              <Card
                elevation={1}
                backgroundColor="white"
                padding={majorScale(3)}
                minHeight={380}
                display="flex"
                flexDirection="column"
                cursor="pointer"
                onClick={() => handleServiceCardClick(service.id)}
                className="service-card"
                hoverElevation={2}
                transition="all 0.2s ease"
                borderRadius={8}
                position="relative"
              >
                <Pane position="absolute" top={16} right={16}>
                  <Badge color="blue">{service.badge}</Badge>
                </Pane>
                
                <Pane marginBottom={majorScale(2)} display="flex">
                  {getIconForType(service.icon)}
                </Pane>
                
                <Heading size={600} marginBottom={majorScale(2)}>
                  {service.title}
                </Heading>
                
                <Text marginBottom={majorScale(3)} color="muted" flex={1}>
                  {service.description}
                </Text>
                
                <Pane 
                  display="flex" 
                  justifyContent="space-between" 
                  backgroundColor="tint1" 
                  padding={16} 
                  borderRadius={4}
                  marginBottom={majorScale(3)}
                >
                  {service.stats.map((stat, index) => (
                    <Pane key={index} textAlign="center">
                      <Text fontWeight="bold" size={300}>{stat.label}:</Text>
                      <Text fontSize={18} fontWeight="bold" color="#47B881">{stat.value}</Text>
                    </Pane>
                  ))}
                </Pane>
                
                <Button 
                  appearance="primary" 
                  intent="success" 
                  width="100%"
                  justifyContent="center"
                >
                  Ver más detalles
                </Button>
              </Card>
            </Pane>
          ))}
        </Slider>
      </Pane>
    </Pane>
  );
};

ServicesSlider.propTypes = {
  services: PropTypes.array
};

export default ServicesSlider;
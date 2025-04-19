import { useState } from "react";
import PropTypes from "prop-types";
import { Pane, Heading, Text, Card, majorScale, Avatar, Button } from "evergreen-ui";
import { FaQuoteLeft, FaQuoteRight, FaStar, FaAngleLeft, FaAngleRight, FaWhatsapp } from "react-icons/fa";
import { useMediaQuery, breakpoints } from "../../hooks/useMediaQuery";
/**
 * A section component displaying client testimonials with custom styling
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.backgroundColor - Background color of the section
 * @param {React.ReactNode} props.children - Additional content to render
 * @returns {React.ReactElement} The TestimonialsSection component
 */
const TestimonialsSection = ({ className, backgroundColor = "#f5f7fa", children, ...props }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredControl, setHoveredControl] = useState(null);
  const isMobile = useMediaQuery(breakpoints.small);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5218442899086", "_blank");
  };

  const testimonials = [
    {
      id: "claudia",
      name: "Claudia R.",
      position: "Propietaria de vivienda",
      text: "Capital Brokers me ayudó a encontrar la mejor opción de crédito hipotecario para mi casa. El proceso fue muy sencillo y rápido, su asesoría fue fundamental para entender todas las opciones disponibles y elegir la que mejor se adaptaba a mis necesidades. ¡Recomiendo ampliamente sus servicios!",
      avatarInitials: "CR",
      avatarColor: "#34b1e6",
      rating: 5,
      location: "Saltillo, Coahuila"
    },
    {
      id: "jorge",
      name: "Jorge M.",
      position: "Empresario",
      text: "Excelente servicio y atención. Gracias a su asesoría pude refinanciar mi crédito hipotecario con una tasa mucho más baja, lo que me permitió ahorrar significativamente. Su conocimiento del mercado y su profesionalismo hacen que cualquier trámite sea sencillo y sin contratiempos.",
      avatarInitials: "JM",
      avatarColor: "#47B881",
      rating: 5,
      location: "Saltillo, Coahuila"
    },
    {
      id: "ana",
      name: "Ana P.",
      position: "Inversionista inmobiliaria",
      text: "He trabajado con Capital Brokers en varias ocasiones para financiar propiedades de inversión. Su equipo siempre encuentra las mejores condiciones y me mantiene informada durante todo el proceso. La diferencia entre trabajar con ellos o directamente con un banco es realmente notable.",
      avatarInitials: "AP",
      avatarColor: "#D9822B",
      rating: 5,
      location: "Torreón, Coahuila"
    }
  ];

  const goToPrevious = () => {
    setActiveIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Pane
      as="section"
      role="region"
      aria-labelledby="testimonials-heading"
      className={className}
      background={backgroundColor}
      padding={majorScale(5)}
      display="flex"
      flexDirection="column"
      alignItems="center"
      borderRadius={8}
      position="relative"
      overflow="hidden"
      {...props}
    >
      {/* Decorative background elements */}
      <Pane
        position="absolute"
        top={-100}
        left={-100}
        width={300}
        height={300}
        borderRadius="50%"
        backgroundColor="#34b1e6"
        opacity={0.05}
        zIndex={0}
      />
      <Pane
        position="absolute"
        bottom={-100}
        right={-100}
        width={300}
        height={300}
        borderRadius="50%"
        backgroundColor="#34b1e6"
        opacity={0.05}
        zIndex={0}
      />
      
      <Pane display="flex" flexDirection={isMobile ? "column" : "row"} alignItems={isMobile ? "flex-start" : "center"} justifyContent="space-between" marginBottom={majorScale(2)} width="100%" maxWidth="1000px">
        <Heading id="testimonials-heading" size={800} marginBottom={majorScale(2)} textAlign={isMobile ? "center" : "left"} position="relative" zIndex={1}>
          Lo que dicen nuestros clientes
        </Heading>
        
        <Button 
          appearance="primary"
          intent="success"
          size="large"
          iconBefore={FaWhatsapp}
          onClick={handleWhatsAppClick}
          marginLeft={isMobile ? 0 : majorScale(2)}
          marginTop={isMobile ? majorScale(2) : 0}
          position="relative"
          zIndex={1}
        >
          Solicita tu asesoría ahora
        </Button>
      </Pane>
      
      <Text size={500} marginBottom={majorScale(4)} textAlign="center" maxWidth="800px" position="relative" zIndex={1}>
        Testimonios de quienes ya han confiado en nosotros para sus necesidades de financiamiento
      </Text>
      
      {/* Desktop testimonial slider */}
      {!isMobile && (
        <Pane 
          display="flex"
          flexDirection="row"
          alignItems="center"
          width="100%"
          maxWidth="1000px"
          position="relative"
          zIndex={1}
        >
          {/* Previous button */}
          <Pane
            display="flex"
            alignItems="center"
            justifyContent="center"
            width={40}
            height={40}
            borderRadius="50%"
            backgroundColor={hoveredControl === 'prev' ? 'rgba(52, 177, 230, 0.2)' : 'rgba(52, 177, 230, 0.1)'}
            marginRight={majorScale(2)}
            cursor="pointer"
            onClick={goToPrevious}
            onMouseEnter={() => setHoveredControl('prev')}
            onMouseLeave={() => setHoveredControl(null)}
            transition="all 0.2s ease"
            aria-label="Testimonio anterior"
          >
            <FaAngleLeft size={20} color="#34b1e6" />
          </Pane>
          
          {/* Testimonial card */}
          <Card
            elevation={1}
            background="white"
            padding={majorScale(4)}
            flex={1}
            display="flex"
            flexDirection="column"
            position="relative"
            borderTop="3px solid #34b1e6"
            minHeight="300px"
            transition="all 0.3s ease"
            className="animate-fadeIn"
            aria-live="polite"
          >
            {/* Quote Icon Top Left */}
            <Pane position="absolute" top={16} left={16} opacity={0.15}>
              <FaQuoteLeft size={32} color="#34b1e6" />
            </Pane>
            
            {/* Quote Icon Bottom Right */}
            <Pane position="absolute" bottom={16} right={16} opacity={0.15}>
              <FaQuoteRight size={32} color="#34b1e6" />
            </Pane>
            
            {/* Content with proper padding to avoid overlapping with icons */}
            <Pane marginX={majorScale(3)} display="flex" flexDirection="column" height="100%">
              <Pane display="flex" marginBottom={majorScale(2)}>
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <FaStar key={i} color="#FFB400" />
                ))}
              </Pane>
              
              <Text size={400} marginBottom={majorScale(3)} fontStyle="italic" flex={1}>
                {testimonials[activeIndex].text}
              </Text>
              
              <Pane display="flex" alignItems="center" marginTop="auto">
                <Avatar
                  name={testimonials[activeIndex].name}
                  size={50}
                  backgroundColor={testimonials[activeIndex].avatarColor}
                  color="white"
                />
                <Pane marginLeft={majorScale(2)}>
                  <Text fontWeight="bold">{testimonials[activeIndex].name}</Text>
                  <Text size={300} color="muted">{testimonials[activeIndex].position}</Text>
                  <Text size={300} color="muted">{testimonials[activeIndex].location}</Text>
                </Pane>
              </Pane>
            </Pane>
          </Card>
          
          {/* Next button */}
          <Pane
            display="flex"
            alignItems="center"
            justifyContent="center"
            width={40}
            height={40}
            borderRadius="50%"
            backgroundColor={hoveredControl === 'next' ? 'rgba(52, 177, 230, 0.2)' : 'rgba(52, 177, 230, 0.1)'}
            marginLeft={majorScale(2)}
            cursor="pointer"
            onClick={goToNext}
            onMouseEnter={() => setHoveredControl('next')}
            onMouseLeave={() => setHoveredControl(null)}
            transition="all 0.2s ease"
            aria-label="Testimonio siguiente"
          >
            <FaAngleRight size={20} color="#34b1e6" />
          </Pane>
        </Pane>
      )}
      
      {/* Mobile view: Single card */}
      {isMobile && (
        <Pane 
          display="flex"
          flexDirection="column"
          width="100%"
          maxWidth="500px"
          marginBottom={majorScale(3)}
        >
          <Card
            elevation={1}
            background="white"
            padding={majorScale(4)}
            display="flex"
            flexDirection="column"
            position="relative"
            borderTop="3px solid #34b1e6"
          >
            {/* Quote Icon Top Left */}
            <Pane position="absolute" top={16} left={16} opacity={0.15}>
              <FaQuoteLeft size={24} color="#34b1e6" />
            </Pane>
            
            {/* Content */}
            <Pane marginX={majorScale(2)}>
              <Pane display="flex" marginBottom={majorScale(2)}>
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <FaStar key={i} color="#FFB400" size={16} />
                ))}
              </Pane>
              
              <Text size={300} marginBottom={majorScale(3)} fontStyle="italic">
                {testimonials[activeIndex].text}
              </Text>
              
              <Pane display="flex" alignItems="center" marginTop={majorScale(2)}>
                <Avatar
                  name={testimonials[activeIndex].name}
                  size={40}
                  backgroundColor={testimonials[activeIndex].avatarColor}
                  color="white"
                />
                <Pane marginLeft={majorScale(2)}>
                  <Text fontWeight="bold" size={400}>{testimonials[activeIndex].name}</Text>
                  <Text size={300} color="muted">{testimonials[activeIndex].position}</Text>
                </Pane>
              </Pane>
            </Pane>
          </Card>
          
          {/* Mobile navigation dots */}
          <Pane display="flex" justifyContent="center" marginTop={majorScale(2)}>
            {testimonials.map((_, index) => (
              <Pane
                key={index}
                width={index === activeIndex ? 24 : 8}
                height={8}
                borderRadius={4}
                backgroundColor={index === activeIndex ? "#34b1e6" : "#E4E7EB"}
                marginX={4}
                cursor="pointer"
                onClick={() => setActiveIndex(index)}
                transition="all 0.2s ease"
              />
            ))}
          </Pane>
        </Pane>
      )}
      
      {children}
    </Pane>
  );
};

TestimonialsSection.propTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
};

export default TestimonialsSection;
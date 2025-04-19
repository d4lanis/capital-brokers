import { Pane, Text, Button, Heading, majorScale, Strong, Card, Badge } from "evergreen-ui";
import { useDialogContext } from "../context/Dialog";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
import WhatsAppButton from "../components/ui/whatsappButton";
import ContactForm from "../forms/contact";
//import { partnerships } from "../const";
import HousingLoanSection from "../components/ui/HousingLoanSection";
import ConstructionLoanSection from "../components/ui/ConstructionLoanSection";
import MortgageChangeSection from "../components/ui/MortgageChangeSection";
import LiquidityLoanSection from "../components/ui/LiquidityLoanSection";
import UrbanLandLoanSection from "../components/ui/UrbanLandLoanSection";
import PymeLoanSection from "../components/ui/PymeLoanSection";
import BenefitsSection from "../components/ui/BenefitsSection";
import TestimonialsSection from "../components/ui/TestimonialsSection";
//import ServicesSlider from "../components/ui/ServicesSlider";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const { callDialog, handleClose } = useDialogContext();
  const [isVisible, setIsVisible] = useState(false);

  // Animation effect for hero content
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openContactForm = () => {
    callDialog({
      component: <ContactForm handleClose={handleClose} />,
      open: true,
      title: "Contacto",
    });
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5218442899086", "_blank");
  };

  return (
    <Pane role="main" aria-label="Capital Brokers Saltillo">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Pane
        id="inicio"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        paddingY={majorScale(6)}
        paddingX={majorScale(2)}
        height={{ default: "auto", medium: "100vh" }}
        minHeight="90vh"
        textAlign="center"
        backgroundImage="url('/background.jpeg')"
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
        marginTop={64} // Adjust for fixed navbar
      >
        <Pane
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="rgba(0, 0, 0, 0.7)"
          zIndex={1}
        />
        <Pane
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          zIndex={2}
          width="100%"
          maxWidth="900px"
          padding={majorScale(2)}
          opacity={isVisible ? 1 : 0}
          transform={isVisible ? "translateY(0)" : "translateY(20px)"}
          transition="opacity 0.7s ease-out, transform 0.7s ease-out"
        >
          <Badge color="blue" marginBottom={majorScale(2)}>
            Brokers Hipotecarios Certificados
          </Badge>
          <Heading 
            is="h1" 
            size={900} 
            color="white" 
            marginBottom={majorScale(2)}
            lineHeight={1.2}
          >
            Capital Brokers - Créditos Hipotecarios y PyME en Saltillo
          </Heading>
          <Text 
            size={500} 
            color="white" 
            marginBottom={majorScale(3)}
            lineHeight={1.5}
          >
            <Strong>Tu mejor opción para financiar tu hogar, terreno o negocio en Saltillo.</Strong>
            <br />Asesoría profesional, comparativas de bancos y trámites simplificados.
          </Text>
          <Card 
            elevation={0} 
            backgroundColor="rgba(255,255,255,0.1)" 
            paddingX={majorScale(3)} 
            paddingY={majorScale(2)} 
            marginBottom={majorScale(4)}
            borderRadius={8}
            width="auto"
          >
            <Pane 
              display="flex" 
              flexDirection={{ default: "column", medium: "row" }}
              alignItems="center"
              justifyContent="center"
              gap={majorScale(3)}
            >
              <Text color="white" fontWeight={500} fontSize={16}>
                <Strong>Rápido ✅</Strong>
              </Text>
              <Text color="white" fontWeight={500} fontSize={16}>
                <Strong>Seguro ✅</Strong>
              </Text>
              <Text color="white" fontWeight={500} fontSize={16}>
                <Strong>Sin costo inicial ✅</Strong>
              </Text>
            </Pane>
          </Card>
          <Pane 
            display="flex" 
            flexDirection={{ default: "column", medium: "row" }}
            gap={majorScale(2)}
            width={{ default: "100%", medium: "auto" }}
          >
            <Button
              appearance="primary"
              intent="success"
              size="large"
              height={48}
              onClick={openContactForm}
              width={{ default: "100%", medium: "auto" }}
              paddingX={majorScale(3)}
              fontSize={16}
              boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
              className="cta-button"
            >
              Agenda tu asesoría
            </Button>
            <Button
              appearance="default"
              size="large"
              height={48}
              onClick={handleWhatsAppClick}
              iconBefore="social-media"
              width={{ default: "100%", medium: "auto" }}
              paddingX={majorScale(3)}
              fontSize={16}
              className="cta-button"
            >
              WhatsApp
            </Button>
          </Pane>
        </Pane>
      </Pane>

      {/* Services Section Header */}
      <Pane
        id="servicios"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        paddingY={majorScale(5)}
        paddingX={majorScale(2)}
        backgroundColor="white"
      >
        <Heading is="h2" size={800} marginBottom={majorScale(2)} textAlign="center">
          Explora Nuestras Opciones de Crédito
        </Heading>
        <Text textAlign="center" maxWidth={700} marginBottom={majorScale(5)} color="muted">
          Encuentra el crédito adecuado para tus necesidades, ya sea para
          adquirir una vivienda, remodelar, o hacer crecer tu negocio.
        </Text>
        
        {/* Add the Services Slider */}
        {/*<ServicesSlider />*/}

        {/* Loan Section Components */}
      <Pane 
        display="flex" 
        flexDirection="column" 
        alignItems="center"
        width="100%"
        paddingX={majorScale(3)}
        paddingBottom={majorScale(5)}
        backgroundColor="white"
      >
        <Pane maxWidth="1200px" width="100%">
          {/* Housing Loan Section */}
          <Pane marginBottom={majorScale(4)}>
            <HousingLoanSection />
          </Pane>
          
          {/* Construction Loan Section */}
          <Pane marginBottom={majorScale(4)}>
            <ConstructionLoanSection reversed={true} />
          </Pane>
          
          {/* Mortgage Change Section */}
          <Pane marginBottom={majorScale(4)}>
            <MortgageChangeSection />
          </Pane>
          
          {/* Liquidity Loan Section */}
          <Pane marginBottom={majorScale(4)}>
            <LiquidityLoanSection reversed={true} />
          </Pane>
          
          {/* Urban Land Loan Section */}
          <Pane marginBottom={majorScale(4)}>
            <UrbanLandLoanSection />
          </Pane>
          
          {/* PYME Loan Section */}
          <Pane marginBottom={majorScale(4)}>
            <PymeLoanSection reversed={true} />
          </Pane>
        </Pane>

        {/* Benefits Section */}
      <Pane id="porqueElegirnos" marginY={majorScale(2)}>
        <BenefitsSection />
      </Pane>

      {/* Testimonials Section */}
      <Pane id="testimonios" marginY={majorScale(2)}>
        <TestimonialsSection />
      </Pane>
      </Pane>
      </Pane>
      <Footer />
      <WhatsAppButton />
    </Pane>
  );
};

export default LandingPage;

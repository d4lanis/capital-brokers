import { Pane, Tooltip } from "evergreen-ui";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPulse, setShowPulse] = useState(false);

  // Effect for initial animation and periodic pulse effect
  useEffect(() => {
    // Show button after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    
    // Set up pulse animation interval
    const pulseInterval = setInterval(() => {
      setShowPulse(true);
      setTimeout(() => setShowPulse(false), 1000);
    }, 5000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(pulseInterval);
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open(import.meta.env.VITE_WA_LINK, "_blank");
  };

  return (
    <Tooltip
      content="¿Necesitas ayuda? Contáctanos por WhatsApp"
      position="top-left"
    >
      <Pane
        role="button"
        aria-label="Contactar por WhatsApp"
        position="fixed"
        bottom={16}
        right={16}
        backgroundColor="#25D366"
        width={60}
        height={60}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="50%"
        boxShadow="0px 4px 12px rgba(0, 0, 0, 0.4)"
        cursor="pointer"
        onClick={handleWhatsAppClick}
        opacity={isVisible ? 1 : 0}
        transform={isVisible ? "scale(1)" : "scale(0.8)"}
        transition="all 0.3s ease-out"
        _hover={{
          transform: "scale(1.1)",
          boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.5)"
        }}
        className={showPulse ? "pulse" : ""}
      >
        <FaWhatsapp color="white" size={36} />
        
        {/* Ripple effect overlay */}
        {showPulse && (
          <Pane
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            borderRadius="50%"
            backgroundColor="rgba(255, 255, 255, 0.3)"
            animation="pulse 1s ease-out"
            zIndex={-1}
          />
        )}
      </Pane>
    </Tooltip>
  );
};

export default WhatsAppButton;

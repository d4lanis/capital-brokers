import { Button, Heading, Link, Pane, majorScale, Menu, IconButton, Position, Popover } from "evergreen-ui";
import { useDialogContext } from "../../context/Dialog";
import ContactForm from "../../forms/contact";
import { useState, useEffect } from "react";
import { useMediaQuery, breakpoints } from "../../hooks/useMediaQuery";

const Navbar = () => {
  const { callDialog, handleClose } = useDialogContext();
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMediaQuery(breakpoints.small);

  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openContactForm = () => {
    callDialog({
      component: <ContactForm handleClose={handleClose} />,
      open: true,
      title: "Contacto",
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <Pane
      role="navigation"
      aria-label="Main Navigation"
      position="fixed"
      top={0}
      left={0}
      width="100%"
      zIndex={10}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      paddingY={scrolled ? majorScale(1) : majorScale(2)}
      paddingX={majorScale(3)}
      background={scrolled ? "rgba(16, 24, 64, 0.95)" : "rgba(16, 24, 64, 0.8)"}
      backdropFilter="blur(8px)"
      boxShadow={scrolled ? "0 2px 10px rgba(0, 0, 0, 0.3)" : "none"}
      transition="all 0.3s ease"
    >
      <Heading 
        size={800} 
        color="white" 
        cursor="pointer" 
        onClick={() => scrollToSection('inicio')}
        userSelect="none"
      >
        Capital Brokers
      </Heading>

      {isMobile ? (
        <Popover
          position={Position.BOTTOM_RIGHT}
          content={
            <Menu>
              <Menu.Group>
                <Menu.Item onSelect={() => scrollToSection('inicio')}>Inicio</Menu.Item>
                <Menu.Item onSelect={() => scrollToSection('servicios')}>Servicios</Menu.Item>
                <Menu.Item onSelect={() => scrollToSection('porqueElegirnos')}>¿Por qué elegirnos?</Menu.Item>
                <Menu.Item onSelect={() => scrollToSection('testimonios')}>Testimonios</Menu.Item>
                <Menu.Item onSelect={() => scrollToSection('alianzas')}>Alianzas</Menu.Item>
                <Menu.Divider />
                <Menu.Item onSelect={openContactForm} intent="success">Contacto</Menu.Item>
              </Menu.Group>
            </Menu>
          }
        >
          <IconButton icon="menu" appearance="minimal" color="white" />
        </Popover>
      ) : (
        <Pane display="flex" alignItems="center">
          <Link
            href="#inicio"
            marginRight={majorScale(3)}
            color="white"
            textDecoration="none"
            fontWeight={500}
            fontSize={15}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('inicio');
            }}
            _hover={{ color: "#34b1e6" }}
            transition="color 0.3s ease"
          >
            Inicio
          </Link>
          <Link
            href="#servicios"
            marginRight={majorScale(3)}
            color="white"
            textDecoration="none"
            fontWeight={500}
            fontSize={15}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('servicios');
            }}
            _hover={{ color: "#34b1e6" }}
            transition="color 0.3s ease"
          >
            Servicios
          </Link>
          <Link
            href="#porqueElegirnos"
            marginRight={majorScale(3)}
            color="white"
            textDecoration="none"
            fontWeight={500}
            fontSize={15}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('porqueElegirnos');
            }}
            _hover={{ color: "#34b1e6" }}
            transition="color 0.3s ease"
          >
            ¿Por qué elegirnos?
          </Link>
          <Link
            href="#testimonios"
            marginRight={majorScale(3)}
            color="white"
            textDecoration="none"
            fontWeight={500}
            fontSize={15}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('testimonios');
            }}
            _hover={{ color: "#34b1e6" }}
            transition="color 0.3s ease"
          >
            Testimonios
          </Link>

          <Button
            appearance="primary"
            intent="success"
            onClick={openContactForm}
            height={36}
            paddingX={majorScale(2)}
          >
            Contacto
          </Button>
        </Pane>
      )}
    </Pane>
  );
};

export default Navbar;

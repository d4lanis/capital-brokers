import { Pane } from "evergreen-ui";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890", "_blank"); // Replace with your WhatsApp link
  };

  return (
    <Pane
      position="fixed"
      bottom={16}
      right={16}
      backgroundColor="#25D366"
      width={56}
      height={56}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="50%"
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.3)"
      cursor="pointer"
      onClick={handleWhatsAppClick}
    >
      <FaWhatsapp color="white" size={32} />
    </Pane>
  );
};

export default WhatsAppButton;

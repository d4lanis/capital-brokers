
import { Button, Heading, Link, Pane, majorScale } from "evergreen-ui";
import { useDialogContext } from "../../context/Dialog";
import ContactForm from "../../forms/contact";

const Navbar = () => {
  const { callDialog, handleClose } = useDialogContext();
  return (
    <Pane
      position="fixed" // Fixes the navbar at the top
      top={0} // Positions it at the top
      left={0} // Positions it at the left
      width="100%" // Makes it span the full width
      zIndex={1} // Keeps it above other elements
      display="flex"
      flexDirection="row" // Stacks items in column on smaller screens
      justifyContent="space-between"
      alignItems="center"
      paddingY={majorScale(2)}
      paddingX={16}
      background="dark" // Background color for visibility
    >
      <Heading size={800} color="white">
        Capital Brokers
      </Heading>
      <Pane display="flex" alignItems="center">
        <Link
          href="#inicio"
          marginRight={16}
          style={{
            transition: "color 0.3s ease",
          }}
        >
          Inicio
        </Link>
        <Link
          href="#servicios"
          marginRight={16}
          style={{
            transition: "color 0.3s ease",
          }}
        >
          Servicios
        </Link>

        <Button
          appearance="primary"
          color="white"
          onClick={() => {
            callDialog({
              component: <ContactForm handleClose={handleClose} />,
              open: true,
              title: "Contacto",
            });
          }}
        >
          Contacto
        </Button>
      </Pane>
    </Pane>
  );
};

export default Navbar;

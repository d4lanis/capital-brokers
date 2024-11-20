import { Pane, Text, Button, Heading, Card, majorScale } from "evergreen-ui";
import { useDialogContext } from "../context/Dialog";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
import WhatsAppButton from "../components/ui/whatsappButton";
import ContactForm from "../forms/contact";
import { cardData, partnerships } from "../const";

const LandingPage = () => {
  const { callDialog, handleClose } = useDialogContext();

  return (
    <Pane top={0} left={0} width="100%">
      {/* Navbar */}
      <Navbar />

      {/* Home Section */}
      <Pane
        id="inicio"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        paddingY={majorScale(6)}
        height="100vh"
        textAlign="center"
      >
        <Heading size={900} color="white" marginBottom={majorScale(2)}>
          Bienvenido a Capital Brokers Financial Group
        </Heading>
        <Text size={500} color="white" marginBottom={majorScale(4)}>
          Tu socio ideal para obtener el crédito adecuado, mejorar tus
          condiciones, y alcanzar tus metas financieras.
        </Text>
        <Button
          appearance="primary"
          size="large"
          color="white"
          onClick={() => {
            callDialog({
              component: <ContactForm handleClose={handleClose} />,
              open: true,
              title: "Contacto",
            });
          }}
        >
          Agenda tu asesoria
        </Button>
      </Pane>

      {/* Services Section */}
      <Pane
        id="servicios"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="auto"
        textAlign="center"
        paddingY={majorScale(6)}
      >
        <Heading size={800} color="white" marginBottom={8}>
          Explora Nuestras Opciones de Crédito
        </Heading>
        <Text color="white" textAlign="center" maxWidth={600} marginBottom={16}>
          Encuentra el crédito adecuado para tus necesidades, ya sea para
          adquirir una vivienda, remodelar, o hacer crecer tu negocio.
        </Text>

        <Pane
          display="flex"
          flexWrap="wrap"
          flexDirection="row"
          justifyContent="center"
          gap={16}
        >
          {cardData.map((item, index) => (
            <Card
              key={index}
              elevation={2}
              backgroundColor="white"
              padding={16}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              maxWidth="300px"
              width="100%"
              margin="10px"
              // Ensure each card takes full width on mobile
            >
              <Pane display="flex" flexDirection="column" alignItems="center">
                <item.icon color="default" size={32} paddingBottom={4} />
                <Heading size={600}>{item.title}</Heading>
                <Text color="muted" marginTop={8}>
                  {item.description}
                </Text>
              </Pane>
              <Button appearance="primary" marginTop={16}>
                Más información
              </Button>
            </Card>
          ))}
        </Pane>

        {/* Partnership Logos Section */}
        <Pane
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap={16}
          marginTop={majorScale(2)}
        >
          {partnerships.map((bank, index) => (
            <Pane
              key={index}
              className="bank-card"
              elevation={2}
              backgroundColor="white"
              padding={8}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              border="1px solid #ddd"
              borderRadius={8}
              maxWidth="200px"
              width="100%"
              margin="10px"
            >
              <img
                src={bank.logoUrl}
                alt={`Logo de ${bank.name}`}
                style={{
                  width: "100px",
                  height: "80px",
                  objectFit: "contain",
                  filter: "grayscale(100%)",
                  transition: "filter 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.filter = "none")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.filter = "grayscale(100%)")
                }
              />
            </Pane>
          ))}
        </Pane>
      </Pane>

      <Footer />
      <WhatsAppButton />
    </Pane>
  );
};

export default LandingPage;

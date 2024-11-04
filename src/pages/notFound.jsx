import { Pane, Text, Button } from "evergreen-ui";
import { useNavigate } from "react-router-dom"; // Assuming you are using react-router-dom for navigation

function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <Pane
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100vw"
        height="100vh"
        background="dark"
      >
        <Text size={900} color="white" marginBottom={16} fontWeight={700}>
          404 - Pagina No Encontrada
        </Text>
        <Button appearance="primary" onClick={() => navigate("/")}>
          Volver al Inicio
        </Button>
      </Pane>
    </div>
  );
}

export default NotFound;

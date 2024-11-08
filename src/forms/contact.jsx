import {
  Button,
  Text,
  TextInputField,
  TextareaField,
  Pane,
} from "evergreen-ui";
import { useState } from "react";


// eslint-disable-next-line react/prop-types
const ContactForm = ({ handleClose }) => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    // Close the dialog after form submission
    handleClose(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Pane display="flex" gap={16}>
        <TextInputField
          label={<Text color="white">Nombre Completo</Text>}
          placeholder="Ingrese su nombre completo"
          style={{ color: "white", backgroundColor: "#2a2d3b" }}
          value={data.name}
          name="name"
          onChange={handleChange}
          required
          flex={1}
        />
        <TextInputField
          label={<Text color="white">Teléfono</Text>}
          placeholder="Ingrese su número de teléfono"
          style={{ color: "white", backgroundColor: "#2a2d3b" }}
          value={data.phone}
          name="phone"
          onChange={handleChange}
          required
          flex={1}
        />
      </Pane>

      <TextInputField
        label={<Text color="white">Correo Electrónico</Text>}
        placeholder="Ingrese su correo electrónico"
        type="email"
        style={{ color: "white", backgroundColor: "#2a2d3b" }}
        value={data.email}
        name="email"
        onChange={handleChange}
        required
      />

      <TextareaField
        label={<Text color="white">Mensaje</Text>}
        placeholder="Escriba su mensaje aquí"
        style={{ color: "white", backgroundColor: "#2a2d3b" }}
        value={data.message}
        name="message"
        onChange={handleChange}
        required
      />

      <Pane display="flex" justifyContent="flex-end" marginTop={20}>
        <Button
          appearance="default"
          onClick={() => handleClose(false)}
          marginRight={10}
        >
          Cancelar
        </Button>
        <Button type="submit" appearance="primary">
          Enviar
        </Button>
      </Pane>
    </form>
  );
};

export default ContactForm;

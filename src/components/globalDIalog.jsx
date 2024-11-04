/* eslint-disable no-unused-vars */
import { Button, Dialog, Pane, Text } from "evergreen-ui";
import { useDialogContext } from "../context/Dialog";

const GlobalDialog = () => {
  const { dialogState, handleClose } = useDialogContext();
  const { component, open, title } = dialogState;

  return (
    <Dialog
      isShown={open}
      title={
        <Text color="white" fontSize={24} fontWeight="bold">
          {title}
        </Text>
      }
      onCloseComplete={() => handleClose(false)}
      shouldCloseOnOverlayClick={false}
      hasFooter={false}
      width="50%"
      containerProps={{
        backgroundColor: "#101840", // Dark background for the dialog
      }}
    >
      {component}
    </Dialog>
  );
};

export default GlobalDialog;
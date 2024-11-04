import { createContext, useState, useCallback, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

const DialogContext = createContext({
    dialogState: {
        open: false,
        component: <></>,
        title: '',
        subtitle: '',
        update: false,
        tooltipText: '',
        disableEscapeKeyDown: false
    },
    callDialog: () => {},
    handleClose: () => {}
});

DialogContext.displayName = 'DialogContext';

const DialogContextProvider = ({ children }) => {
    const [dialogState, setDialogState] = useState({
        open: false,
        component: <></>,
        title: '',
        subtitle: '',
        update: false,
        tooltipText: '',
        backgroundColor: 'white',
        disableEscapeKeyDown: false
    });

    const callDialog = ({
        component,
        open = true,
        title = '',
        subtitle = '',
        tooltipText = '',
        update = false,
        backgroundColor = 'white',
        disableEscapeKeyDown = false
    }) => {
        setDialogState({
            component,
            open,
            title,
            subtitle,
            tooltipText,
            update,
            backgroundColor,
            disableEscapeKeyDown
        });
    };

    const handleClose = useCallback((update = false) => {
        setDialogState((prevState) => ({
            ...prevState,
            open: false,
            update
        }));
    }, []);

    const value = useMemo(
        () => ({
            dialogState,
            callDialog,
            handleClose
        }),
        [dialogState, handleClose]
    );

    return <DialogContext.Provider value={value}>{children}</DialogContext.Provider>;
};

const useDialogContext = () => {
    const context = useContext(DialogContext);
    if (!context) {
        throw new Error('useDialogContext must be used within a DialogContextProvider');
    }
    return context;
};

DialogContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};

// eslint-disable-next-line react-refresh/only-export-components
export { DialogContext, DialogContextProvider, useDialogContext };

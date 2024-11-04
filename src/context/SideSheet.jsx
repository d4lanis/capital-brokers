import { createContext, useState, useCallback, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

const SideSheetContext = createContext({
    sideSheetState: {
        open: false,
        component: <></>,
        title: '',
        subtitle: '',
        update: false,
        tooltipText: '',
        disableEscapeKeyDown: false
    },
    callSideSheet: () => {},
    handleClose: () => {}
});

SideSheetContext.displayName = 'SideSheetContext';

const SideSheetContextProvider = (props) => {
    const [sideSheetState, setSideSheetState] = useState({
        open: false,
        component: <></>,
        title: '',
        subtitle: '',
        update: false,
        tooltipText: '',
        backgroundColor: 'white',
        disableEscapeKeyDown: false
    });

    const callSideSheet = ({
        component,
        open,
        subtitle = '',
        title = '',
        tooltipText = '',
        update = false,
        backgroundColor = 'white',
        disableEscapeKeyDown = false
    }) => {
        setSideSheetState({ component, open, subtitle, title, tooltipText, update, backgroundColor, disableEscapeKeyDown });
    };

    const handleClose = useCallback(
        (update) => {
            setSideSheetState({
                open: false,
                component: <></>,
                title: '',
                subtitle: '',
                update,
                tooltipText: '',
                disableEscapeKeyDown: false
            });
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [sideSheetState]
    );

    const value = useMemo(
        () => ({
            sideSheetState,
            callSideSheet,
            handleClose
        }),
        [sideSheetState, handleClose]
    );

    return <SideSheetContext.Provider value={value} {...props} />;
};

const useSideSheetContext = () => {
    const context = useContext(SideSheetContext);

    if (!context) {
        throw new Error('SideSheetContext must be used within a SideSheetContextProvider');
    }

    return context;
};

// Ensure that PropTypes are used to validate props in JavaScript
SideSheetContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};

// eslint-disable-next-line react-refresh/only-export-components
export { SideSheetContext, SideSheetContextProvider, useSideSheetContext };

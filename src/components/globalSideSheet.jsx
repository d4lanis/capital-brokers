/* eslint-disable no-unused-vars */
import { SideSheet, Pane, Heading, IconButton, Tooltip, Text, majorScale, InfoSignIcon } from 'evergreen-ui';
import { useSideSheetContext } from '../context/SideSheet';

const GlobalSideSheet = () => {
    const { sideSheetState, handleClose } = useSideSheetContext();
    const { component, open, subtitle, title, tooltipText } = sideSheetState;

    return (
        <SideSheet
            position='right'
            isShown={open}
            onCloseComplete={() => handleClose(false)}
            preventBodyScrolling
            containerProps={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#fff'
            }}
        >
            <Pane
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                padding={majorScale(2)}
                borderBottom="muted"
                backgroundColor="#101840"
            >
                <Pane>
                    <Heading size={600} color="white">{title}</Heading>
                    {subtitle && <Text size={400} color="white">{subtitle}</Text>}
                </Pane>
                <Pane display="flex" alignItems="center">
                    {tooltipText && (
                        <Tooltip content={tooltipText}>
                            <InfoSignIcon color="white" marginLeft={majorScale(2)} />
                        </Tooltip>
                    )}
                </Pane>
            </Pane>
            <Pane flex="1" overflowY="auto" padding={majorScale(2)} backgroundColor={'#fff'}>
                {component}
            </Pane>
        </SideSheet>
    );
};

export default GlobalSideSheet;

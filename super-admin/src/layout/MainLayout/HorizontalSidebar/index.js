import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Drawer, useMediaQuery } from '@mui/material';

// third-party
import { BrowserView, MobileView } from 'react-device-detect';

// project imports
import MenuList from '../HorizontalSidebar/MenuList';
import { drawerWidth } from 'store/constant';

// ==============================|| SIDEBAR DRAWER ||============================== //

const HorizontalSidebar = ({ drawerOpen, drawerToggle, window }) => {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    const drawer = (
        <>
            <BrowserView>
                <MenuList sx={{ display: 'inline-flex' }} />
            </BrowserView>
            <MobileView>
                <MenuList />
            </MobileView>
        </>
    );

    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <Box
            component="nav"
            sx={{ flexShrink: { md: 0 }, width: matchUpMd ? (!drawerOpen ? drawerWidth : '-260px') : 'auto' }}
            aria-label="mailbox folders"
        >
            <Drawer
                container={container}
                variant={matchUpMd ? 'persistent' : 'temporary'}
                anchor="top"
                open={drawerOpen}
                onClose={drawerToggle}
                sx={{
                    '& .MuiDrawer-paper': {
                        background: theme.palette.background.default,
                        color: theme.palette.text.primary,
                        borderRight: 'none',
                        [theme.breakpoints.up('md')]: {
                            top: '88px'
                        }
                    }
                }}
                ModalProps={{ keepMounted: true }}
                color="inherit"
            >
                {drawer}
            </Drawer>
        </Box>
    );
};

HorizontalSidebar.propTypes = {
    drawerOpen: PropTypes.bool,
    drawerToggle: PropTypes.func,
    window: PropTypes.object
};

export default HorizontalSidebar;

import { useSelector } from 'react-redux';

// ** MUI Imports
import Box from '@mui/material/Box';

// ** Footer Content Component
import FooterContent from './FooterContent';

const Footer = () => {
    // ** Props
    const customization = useSelector((state) => state.customization);

    // ** Vars
    if (customization.footer === 'hidden') {
        return null;
    }

    return (
        <Box
            component="footer"
            className="layout-footer footer-content-container"
            sx={{
                zIndex: 10,
                py: 1,
                px: 1,
                width: '100%',
                borderTopLeftRadius: 14,
                borderTopRightRadius: 14,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ...(customization.footer === 'fixed' && {
                    bottom: 0,
                    px: [1, 1],
                    right: 0,
                    position: 'fixed',
                    width: 'calc(100% - 260px)',
                    backgroundColor: (theme) => theme.palette.background.default
                })
            }}
        >
            <FooterContent />
        </Box>
    );
};

export default Footer;

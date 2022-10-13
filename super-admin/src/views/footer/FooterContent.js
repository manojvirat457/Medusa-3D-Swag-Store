// ** MUI Imports
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const FooterContent = () => {
    // ** Var
    const hidden = useMediaQuery((theme) => theme.breakpoints.down('md'));

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={{ mr: 2 }}>
                {`© ${new Date().getFullYear()}, Made with `}
                <Box component="span" sx={{ color: 'error.main' }}>
                    ❤️
                </Box>
                {` by `}
                <Link target="_blank" href="https://shloklabs.com/">
                    Shloklabs
                </Link>
            </Typography>
        </Box>
    );
};

export default FooterContent;

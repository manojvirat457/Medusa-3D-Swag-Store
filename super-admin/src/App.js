import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';

// for rtl
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@mui/styles';
// ==============================|| APP ||============================== //

const App = () => {
    const customization = useSelector((state) => state.customization);
    // Configure JSS
    const jss = create({
        plugins: [...jssPreset().plugins, rtl()]
    });

    return (
        <StylesProvider jss={jss}>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>
                    <Routes />
                </NavigationScroll>
            </ThemeProvider>
        </StylesProvider>
    );
};

export default App;

import { createTheme } from '@mui/material/styles';

// assets
import colors from 'assets/scss/_themes-vars.module.scss';
import theme1 from 'assets/scss/_theme1.module.scss';
import theme2 from 'assets/scss/_theme2.module.scss';
import theme3 from 'assets/scss/_theme3.module.scss';
import theme4 from 'assets/scss/_theme4.module.scss';
import theme5 from 'assets/scss/_theme5.module.scss';
import theme6 from 'assets/scss/_theme6.module.scss';
import theme7 from 'assets/scss/_theme7.module.scss';
// project imports
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';
/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

export const theme = (customization) => {
    let color;
    switch (customization.paletteColor) {
        case 'theme1':
            color = theme1;
            break;
        case 'theme2':
            color = theme2;
            break;
        case 'theme3':
            color = theme3;
            break;
        case 'theme4':
            color = theme4;
            break;
        case 'theme5':
            color = theme5;
            break;
        case 'theme6':
            color = theme6;
            break;
        case 'theme7':
            color = theme7;
            break;
        default:
            color = colors;
    }

    const themeOption = {
        colors: color,
        heading: color.grey900,
        paper: color.paper,
        backgroundDefault: color.paper,
        background: color.primaryLight,
        darkTextPrimary: color.grey700,
        darkTextSecondary: color.grey500,
        textDark: color.grey900,
        menuSelected: color.secondaryDark,
        menuSelectedBack: color.secondaryLight,
        divider: color.grey200,
        customization
    };

    switch (customization.mode) {
        case 'dark':
            themeOption.heading = color.darkTextTitle;
            themeOption.paper = color.darkPaper;
            themeOption.backgroundDefault = color.darkPaper;
            themeOption.background = color.darkBackground;
            themeOption.darkTextPrimary = color.darkTextPrimary;
            themeOption.darkTextSecondary = color.darkTextSecondary;
            themeOption.menuSelected = color.darkSecondaryDark;
            themeOption.menuSelectedBack = color.darkSecondaryLight;
            break;
        case 'light':
            themeOption.paper = color.paper;
            break;
        default:
            themeOption.paper = color.paper;
            break;
    }

    const themeOptions = {
        direction: customization.direction,
        palette: themePalette(themeOption),
        mixins: {
            toolbar: {
                minHeight: '48px',
                padding: '16px',
                '@media (min-width: 600px)': {
                    minHeight: '48px'
                }
            }
        },
        typography: themeTypography(themeOption)
    };

    const themes = createTheme(themeOptions);
    themes.components = componentStyleOverrides(themeOption);

    return themes;
};

export default theme;

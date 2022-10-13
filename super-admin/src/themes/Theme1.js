import { createTheme, styled } from '@mui/material/styles';
const BoxShadowDiv = styled('div')(
    ({ theme }) => `
  margin: ${theme.spacing(2)};
  padding: ${theme.spacing(2)};
  border: 1px solid black;
  box-shadow: ${theme.shadows[12]};`
);
const lighttheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#ad2207'
        },
        secondary: {
            main: '#ff3d00'
        },
        error: {
            main: '#f44336'
        },
        warning: {
            main: '#ffa726'
        },
        info: {
            main: '#64b5f6'
        },
        success: {
            main: '#81c784'
        }
    },
    direction: 'rtl',
    typography: {
        fontFamily: 'Poppins'
    },
    overrides: {
        MuiSwitch: {
            root: {
                width: 42,
                height: 26,
                padding: 0,
                margin: 8
            },
            switchBase: {
                padding: 1,
                '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
                    transform: 'translateX(16px)',
                    color: '#fff',
                    '& + $track': {
                        opacity: 1,
                        border: 'none'
                    }
                }
            },
            thumb: {
                width: 24,
                height: 24
            },
            track: {
                borderRadius: 13,
                border: '1px solid #bdbdbd',
                backgroundColor: '#fafafa',
                opacity: 1,
                transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
            }
        }
    },
    shape: {
        borderRadius: 0
    }
});
const darktheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ad2207'
        },
        secondary: {
            main: '#ff3d00'
        },
        error: {
            main: '#f44336'
        },
        warning: {
            main: '#ffa726'
        },
        info: {
            main: '#64b5f6'
        },
        success: {
            main: '#81c784'
        }
    },
    direction: 'rtl',
    typography: {
        fontFamily: 'Poppins'
    },
    overrides: {
        MuiSwitch: {
            root: {
                width: 42,
                height: 26,
                padding: 0,
                margin: 8
            },
            switchBase: {
                padding: 1,
                '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
                    transform: 'translateX(16px)',
                    color: '#fff',
                    '& + $track': {
                        opacity: 1,
                        border: 'none'
                    }
                }
            },
            thumb: {
                width: 24,
                height: 24
            },
            track: {
                borderRadius: 13,
                border: '1px solid #bdbdbd',
                backgroundColor: '#fafafa',
                opacity: 1,
                transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
            }
        }
    },
    shape: {
        borderRadius: 0
    }
});
export { lighttheme, darktheme };

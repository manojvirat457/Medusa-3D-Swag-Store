import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Check from 'mdi-material-ui/Check';

// material-ui
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { styled, useTheme } from '@mui/material/styles';
import {
    Box,
    Drawer,
    Fab,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    Radio,
    RadioGroup,
    Slider,
    Switch,
    Tooltip,
    Typography
} from '@mui/material';
import { IconSettings } from '@tabler/icons';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import {
    SET_THEME_MODE,
    SET_BORDER_RADIUS,
    SET_FONT_FAMILY,
    SET_THEME_PALETTE,
    SET_THEME_DIR,
    SET_FOOTER,
    SET_MENU_TYPE
} from 'store/actions';
import { gridSpacing } from 'store/constant';

// concat 'px'
function valueText(value) {
    return `${value}px`;
}

// ==============================|| LIVE CUSTOMIZATION ||============================== //

const Customization = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const customization = useSelector((state) => state.customization);

    // drawer on/off
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };

    const ColorBox = styled(Box)(({ theme }) => ({
        width: 40,
        height: 40,
        display: 'flex',
        borderRadius: 8,
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'center',
        margin: theme.spacing(0, 1.5),
        color: theme.palette.common.white,
        transition: 'box-shadow .25s ease'
    }));

    const [paletteColor, setThemeColor] = useState(customization.paletteColor);
    // palette onChanges
    const handleChange = (field, value) => {
        setThemeColor(value);
    };

    useEffect(() => {
        dispatch({ type: SET_THEME_PALETTE, paletteColor: paletteColor });
    }, [dispatch, paletteColor]);

    // state - border radius
    const [borderRadius, setBorderRadius] = useState(customization.borderRadius);
    const handleBorderRadius = (event, newValue) => {
        setBorderRadius(newValue);
    };

    useEffect(() => {
        dispatch({ type: SET_BORDER_RADIUS, borderRadius });
    }, [dispatch, borderRadius]);

    let initialFont;
    switch (customization.fontFamily) {
        case `'Inter', sans-serif`:
            initialFont = 'Inter';
            break;
        case `'Poppins', sans-serif`:
            initialFont = 'Poppins';
            break;
        case `'Roboto', sans-serif`:
        default:
            initialFont = 'Roboto';
            break;
    }

    // state - font family
    const [fontFamily, setFontFamily] = useState(initialFont);
    useEffect(() => {
        let newFont;
        switch (fontFamily) {
            case 'Inter':
                newFont = `'Inter', sans-serif`;
                break;
            case 'Poppins':
                newFont = `'Poppins', sans-serif`;
                break;
            case 'Roboto':
            default:
                newFont = `'Roboto', sans-serif`;
                break;
        }
        dispatch({ type: SET_FONT_FAMILY, fontFamily: newFont });
    }, [dispatch, fontFamily]);

    // state - footer
    const [footer, setFooter] = useState(customization.footer);
    useEffect(() => {
        dispatch({ type: SET_FOOTER, footer: footer });
    }, [dispatch, footer]);

    // state - Menu Type
    const [menuType, setMenuType] = useState(customization.menuType);
    useEffect(() => {
        dispatch({ type: SET_MENU_TYPE, menuType: menuType });
    }, [dispatch, menuType]);

    // state - direction
    const [checked, setChecked] = useState(false);
    const [direction, setDirection] = useState(customization.direction);

    const handleDirectionChange = (event) => {
        setChecked(event.target.checked);
        if (event.target.checked) {
            setDirection('rtl');
        } else {
            setDirection('ltr');
        }
    };

    useEffect(() => {
        document.dir = direction;
        dispatch({ type: SET_THEME_DIR, direction: direction });
    }, [dispatch, direction]);

    // state - ThemeMode
    const [themeMode, setThemeMode] = useState(customization.mode);
    const handleThemeMode = () => {
        console.log(themeMode);
        setThemeMode(customization.mode == 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        dispatch({ type: SET_THEME_MODE, mode: themeMode });
    }, [dispatch, themeMode]);

    return (
        <>
            {/* toggle button */}
            <Tooltip title="Live Customize">
                <Fab
                    component="div"
                    onClick={handleToggle}
                    size="medium"
                    variant="circular"
                    color="secondary"
                    sx={{
                        borderRadius: 0,
                        borderTopLeftRadius: '50%',
                        borderBottomLeftRadius: '50%',
                        borderTopRightRadius: '50%',
                        borderBottomRightRadius: '4px',
                        top: '25%',
                        position: 'fixed',
                        right: 10,
                        zIndex: theme.zIndex.speedDial
                    }}
                >
                    <AnimateButton type="rotate">
                        <IconButton color="inherit" size="large" disableRipple>
                            <IconSettings />
                        </IconButton>
                    </AnimateButton>
                </Fab>
            </Tooltip>

            <Drawer
                anchor="right"
                onClose={handleToggle}
                open={open}
                PaperProps={{
                    sx: {
                        width: 280
                    }
                }}
            >
                <PerfectScrollbar component="div">
                    <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
                        <Grid item xs={12}>
                            <SubCard title="Right to Left">
                                <Switch checked={checked} onChange={handleDirectionChange} inputProps={{ 'aria-label': 'controlled' }} />
                            </SubCard>
                        </Grid>
                        <Grid item xs={12}>
                            <IconButton sx={{ snackbar: 1400 }} onClick={() => handleThemeMode()} color="inherit">
                                {customization.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                                <Typography variant="h6" color="primary.text">
                                    {' '}
                                    Light / Dark Mode{' '}
                                </Typography>
                            </IconButton>
                        </Grid>
                        <Grid item xs={12}>
                            {/* font family */}
                            <SubCard title="Font Family">
                                <FormControl>
                                    <RadioGroup
                                        aria-label="font-family"
                                        value={fontFamily}
                                        onChange={(e) => setFontFamily(e.target.value)}
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel value="Roboto" control={<Radio />} label="Roboto" />
                                        <FormControlLabel value="Poppins" control={<Radio />} label="Poppins" />
                                        <FormControlLabel value="Inter" control={<Radio />} label="Inter" />
                                    </RadioGroup>
                                </FormControl>
                            </SubCard>
                        </Grid>
                        <Grid item xs={12}>
                            {/* footer */}
                            <SubCard title="Footer">
                                <FormControl>
                                    <RadioGroup
                                        aria-label="footer"
                                        value={footer}
                                        onChange={(e) => setFooter(e.target.value)}
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel value="fixed" control={<Radio />} label="Fixed" />
                                        <FormControlLabel value="static" control={<Radio />} label="Static" />
                                        <FormControlLabel value="hidden" control={<Radio />} label="Hidden" />
                                    </RadioGroup>
                                </FormControl>
                            </SubCard>
                        </Grid>
                        <Grid item xs={12}>
                            {/* Menu Type */}
                            <SubCard title="Menu Type">
                                <FormControl>
                                    <RadioGroup
                                        aria-label="menuType"
                                        value={menuType}
                                        onChange={(e) => setMenuType(e.target.value)}
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel value="vertical" control={<Radio />} label="Vertical" />
                                        <FormControlLabel value="horizontal" control={<Radio />} label="Horizontal" />
                                    </RadioGroup>
                                </FormControl>
                            </SubCard>
                        </Grid>
                        <Grid item xs={12}>
                            {/* border radius */}
                            <SubCard title="Border Radius">
                                <Grid item xs={12} container spacing={2} alignItems="center" sx={{ mt: 2.5 }}>
                                    <Grid item>
                                        <Typography variant="h6" color="secondary">
                                            4px
                                        </Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Slider
                                            size="small"
                                            value={borderRadius}
                                            onChange={handleBorderRadius}
                                            getAriaValueText={valueText}
                                            valueLabelDisplay="on"
                                            aria-labelledby="discrete-slider-small-steps"
                                            marks
                                            step={2}
                                            min={4}
                                            max={24}
                                            color="secondary"
                                            sx={{
                                                '& .MuiSlider-valueLabel': {
                                                    color: 'secondary.light'
                                                }
                                            }}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h6" color="secondary">
                                            24px
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </SubCard>
                        </Grid>
                        <Grid item xs={12}>
                            {/* border radius */}
                            <SubCard title="Primary Color">
                                <Box>
                                    <Box sx={{ display: 'flex' }}>
                                        <ColorBox
                                            onClick={() => handleChange('themeColor', 'default')}
                                            sx={{
                                                ml: 0,
                                                backgroundColor: '#673ab7',
                                                ...(paletteColor === 'default' ? { boxShadow: 9 } : { '&:hover': { boxShadow: 4 } })
                                            }}
                                        >
                                            {paletteColor === 'default' ? <Check fontSize="small" /> : null}
                                        </ColorBox>
                                        <ColorBox
                                            onClick={() => handleChange('themeColor', 'theme1')}
                                            sx={{
                                                backgroundColor: '#009688',
                                                ...(paletteColor === 'theme1' ? { boxShadow: 9 } : { '&:hover': { boxShadow: 4 } })
                                            }}
                                        >
                                            {paletteColor === 'theme1' ? <Check fontSize="small" /> : null}
                                        </ColorBox>
                                        <ColorBox
                                            onClick={() => handleChange('themeColor', 'theme2')}
                                            sx={{
                                                backgroundColor: '#EC407A',
                                                ...(paletteColor === 'theme2' ? { boxShadow: 9 } : { '&:hover': { boxShadow: 4 } })
                                            }}
                                        >
                                            {paletteColor === 'theme2' ? <Check fontSize="small" /> : null}
                                        </ColorBox>
                                        <ColorBox
                                            onClick={() => handleChange('themeColor', 'theme3')}
                                            sx={{
                                                backgroundColor: '#C77E23',
                                                ...(paletteColor === 'theme3' ? { boxShadow: 9 } : { '&:hover': { boxShadow: 4 } })
                                            }}
                                        >
                                            {paletteColor === 'theme3' ? <Check fontSize="small" /> : null}
                                        </ColorBox>
                                    </Box>
                                    <Box sx={{ display: 'flex', marginTop: '10px' }}>
                                        <ColorBox
                                            onClick={() => handleChange('themeColor', 'theme4')}
                                            sx={{
                                                backgroundColor: '#3FB0AC',
                                                ...(paletteColor === 'theme4' ? { boxShadow: 9 } : { '&:hover': { boxShadow: 4 } })
                                            }}
                                        >
                                            {paletteColor === 'theme4' ? <Check fontSize="small" /> : null}
                                        </ColorBox>
                                        <ColorBox
                                            onClick={() => handleChange('themeColor', 'theme5')}
                                            sx={{
                                                backgroundColor: '#2CA58D',
                                                ...(paletteColor === 'theme5' ? { boxShadow: 9 } : { '&:hover': { boxShadow: 4 } })
                                            }}
                                        >
                                            {paletteColor === 'theme5' ? <Check fontSize="small" /> : null}
                                        </ColorBox>
                                        <ColorBox
                                            onClick={() => handleChange('themeColor', 'theme6')}
                                            sx={{
                                                backgroundColor: '#3F51B5',
                                                ...(paletteColor === 'theme6' ? { boxShadow: 9 } : { '&:hover': { boxShadow: 4 } })
                                            }}
                                        >
                                            {paletteColor === 'theme6' ? <Check fontSize="small" /> : null}
                                        </ColorBox>
                                        <ColorBox
                                            onClick={() => handleChange('themeColor', 'theme7')}
                                            sx={{
                                                backgroundColor: '#b03f3f',
                                                ...(paletteColor === 'theme7' ? { boxShadow: 9 } : { '&:hover': { boxShadow: 4 } })
                                            }}
                                        >
                                            {paletteColor === 'theme7' ? <Check fontSize="small" /> : null}
                                        </ColorBox>
                                    </Box>
                                </Box>
                            </SubCard>
                        </Grid>
                    </Grid>
                </PerfectScrollbar>
            </Drawer>
        </>
    );
};

export default Customization;

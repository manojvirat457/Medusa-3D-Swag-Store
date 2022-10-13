// project imports
import config from 'config';

// action - state management
import * as actionTypes from './actions';

export const initialState = {
    isOpen: [], // for active default menu
    fontFamily: config.fontFamily,
    borderRadius: config.borderRadius,
    opened: true,
    mode: config.mode,
    paletteColor: config.primary,
    direction: config.direction,
    footer: config.footer,
    menuType: config.menuType
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const customizationReducer = (state = initialState, action) => {
    let id;
    switch (action.type) {
        case actionTypes.MENU_OPEN:
            id = action.id;
            return {
                ...state,
                isOpen: [id]
            };
        case actionTypes.SET_MENU:
            return {
                ...state,
                opened: action.opened
            };
        case actionTypes.SET_FONT_FAMILY:
            return {
                ...state,
                fontFamily: action.fontFamily
            };
        case actionTypes.SET_BORDER_RADIUS:
            return {
                ...state,
                borderRadius: action.borderRadius
            };
        case actionTypes.SET_THEME_MODE:
            return {
                ...state,
                mode: action.mode
            };
        case actionTypes.SET_THEME_PALETTE:
            return {
                ...state,
                paletteColor: action.paletteColor
            };
        case actionTypes.SET_THEME_DIR:
            return {
                ...state,
                direction: action.direction
            };
        case actionTypes.SET_FOOTER:
            return {
                ...state,
                footer: action.footer
            };
        case actionTypes.SET_MENU_TYPE:
            return {
                ...state,
                menuType: action.menuType
            };
        default:
            return state;
    }
};

export default customizationReducer;

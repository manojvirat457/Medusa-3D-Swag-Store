// material-ui
import { Typography } from '@mui/material';

// project imports
import menuItem from 'menu-items';
import NavGroup from './NavGroup';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
    const navItems = menuItem.items.map((item) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} menu={item} level={1} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    return <>{navItems}</>;
};

export default MenuList;

// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Stores',
    caption: 'Store Management',
    type: 'group',
    children: [
        {
            id: 'sellers',
            title: 'Sellers',
            type: 'item',
            url: '/pages/page/employeePage'
        }
        // {
        //     id: 'store',
        //     title: 'Employee Data',
        //     type: 'collapse',
        //     icon: icons.IconKey,

        //     children: [
        //         {
        //             id: 'addEmp',
        //             title: 'Add',
        //             type: 'item',
        //             url: '/pages/page/addEmp'
        //         },
        //         {
        //             id: 'listEmp',
        //             title: 'List',
        //             type: 'item',
        //             url: '/pages/page/employeePage'
        //         }
        //     ]
        // }
    ]
};

export default pages;

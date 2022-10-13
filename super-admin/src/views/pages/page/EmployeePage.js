import React, { useEffect } from 'react';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import EnhancedTable from './EmployeeTable';
import NestedModal from './AddPopup';
import { loadPost } from '../../../services/planner/plannerAction';
import { useSelector } from 'react-redux';
import Loader from 'ui-component/Loader';

export default function EmployeePage() {
    const data = useSelector((state) => state.planner.data);
    const isLoading = useSelector((state) => state.planner.isLoading);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await loadPost();
    };

    return (
        <>
            <Box
                sx={{
                    height: 1,
                    minWidth: 275
                }}
            >
                <Card variant="outlined" sx={{ height: 1 }}>
                    <React.Fragment>
                        <CardContent>
                            <NestedModal />
                            {isLoading ? <Loader /> : <EnhancedTable data={data} />}
                        </CardContent>
                    </React.Fragment>
                </Card>
            </Box>
        </>
    );
}

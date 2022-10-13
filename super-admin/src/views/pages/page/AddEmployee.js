import React, { useState } from 'react';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import StepperLinearWithValidation from './StepperWizard';

export default function AddEmployee() {
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
                            <StepperLinearWithValidation />
                        </CardContent>
                    </React.Fragment>
                </Card>
            </Box>
        </>
    );
}

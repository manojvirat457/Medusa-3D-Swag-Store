// ** React Imports
import { Fragment, useState } from 'react';

// ** MUI Imports
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Grid, Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import AddIcon from '@mui/icons-material/Add';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { saveData } from '../../../services/planner/plannerService';

const DialogForm = () => {
    // ** State
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSave = () => {
        saveData(allValues);
        setOpen(false);
    };

    const [allValues, setAllValues] = useState({
        empName: '',
        empId: '',
        empDesig: '',
        empDoj: ''
    });

    const changeHandler = (e) => {
        setAllValues({ ...allValues, [e.target.name]: e.target.value });
    };

    return (
        <Fragment>
            <Button onClick={handleOpen} variant="outlined" startIcon={<AddIcon />}>
                Add
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Employee</DialogTitle>
                <DialogContent>
                    <Box sx={{ paddingTop: '20px' }}>
                        <Grid container>
                            <Grid item xs={12} sm={8}>
                                <TextField
                                    id="outlined-basic"
                                    label="Employee Name"
                                    name="empName"
                                    fullWidth
                                    onChange={changeHandler}
                                    variant="outlined"
                                    sx={{ paddingBottom: '10px' }}
                                />
                                <br />
                                <TextField
                                    id="outlined-basic"
                                    label="Employee ID"
                                    type="number"
                                    name="empId"
                                    fullWidth
                                    onChange={changeHandler}
                                    variant="outlined"
                                    sx={{ paddingBottom: '10px' }}
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Designation"
                                    name="empDesig"
                                    fullWidth
                                    onChange={changeHandler}
                                    variant="outlined"
                                    sx={{ paddingBottom: '10px' }}
                                />
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DesktopDatePicker
                                        label="DOJ"
                                        inputFormat="MM/dd/yyyy"
                                        name="empDoj"
                                        onChange={changeHandler}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                                <br />
                                <br />
                            </Grid>
                        </Grid>
                    </Box>
                </DialogContent>
                <DialogActions className="dialog-actions-dense">
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
};

export default DialogForm;

import React, { Fragment } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import { Box, Grid, TextField, Typography, FormControlLabel, Checkbox, Button } from '@mui/material';
import Logo from '../../../../assets/images/login.png';
import * as Yup from 'yup';

const Login = () => {
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('Username is required')
            .min(6, 'Username must be at least 6 characters')
            .max(20, 'Username must not exceed 20 characters'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters')
    });

    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data) => {
        console.log(JSON.stringify(data, null, 2));
        console.log(data.username);
        localStorage.setItem('Name', data.username);
        localStorage.setItem('Password', data.password);
        window.location.href = '/';
    };

    return (
        <Fragment>
            <Grid item xs={12} height={'100vh'} width={'100%'} display="flex" justifyContent="center">
                <Box display="inherit" sx={{ alignItems: 'center' }}>
                    <Card variant="outlined">
                        <CardContent sx={{ width: '646px' }}>
                            <Grid container spacing={2} columns={16}>
                                <Grid item xs={6}>
                                    <img height={200} src={`${Logo}?w=164&h=164&fit=crop&auto=format`} alt="Login" />
                                </Grid>
                                <Grid item xs={10}>
                                    <Box px={3} py={2}>
                                        <Typography variant="h6" align="left" margin="dense">
                                            Login
                                        </Typography>
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} sm={12}>
                                                <TextField
                                                    variant="outlined"
                                                    required
                                                    id="username"
                                                    name="username"
                                                    label="Username"
                                                    fullWidth
                                                    margin="dense"
                                                    {...register('username')}
                                                    error={errors.username ? true : false}
                                                />
                                                <Typography variant="inherit" color="textSecondary">
                                                    {errors.username?.message}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={12}>
                                                <Controller
                                                    control={control}
                                                    name="acceptTerms"
                                                    defaultValue="false"
                                                    inputRef={register()}
                                                    render={({ field: { onChange } }) => (
                                                        <TextField
                                                            variant="outlined"
                                                            required
                                                            id="password"
                                                            name="password"
                                                            label="Password"
                                                            type="password"
                                                            fullWidth
                                                            margin="dense"
                                                            {...register('password')}
                                                            error={errors.password ? true : false}
                                                        />
                                                    )}
                                                />
                                                <Typography variant="inherit" color="textSecondary">
                                                    {errors.password?.message}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Box mt={3}>
                                            <Button variant="contained" color="primary" onClick={handleSubmit(onSubmit)}>
                                                Login
                                            </Button>
                                        </Box>
                                        <br />
                                        <Grid item container direction="column" alignItems="center" xs={12}>
                                            <Typography
                                                component={Link}
                                                to="/pages/register/register3"
                                                variant="subtitle1"
                                                sx={{ textDecoration: 'none' }}
                                            >
                                                Don&apos;t have an account?
                                            </Typography>
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
        </Fragment>
    );
};

export default Login;

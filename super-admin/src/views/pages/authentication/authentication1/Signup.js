import React, { Fragment } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link, Box, Grid, TextField, Typography, FormControlLabel, Checkbox, Button } from '@mui/material';
import Logo from '../../../../assets/images/login.png';
import * as Yup from 'yup';

const Signup = () => {
    const validationSchema = Yup.object().shape({
        fullname: Yup.string().required('Fullname is required'),
        username: Yup.string()
            .required('Username is required')
            .min(6, 'Username must be at least 6 characters')
            .max(20, 'Username must not exceed 20 characters'),
        email: Yup.string().required('Email is required').email('Email is invalid'),
        phoneno: Yup.string().matches(new RegExp('^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$'), 'Invalid phone number format'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
        acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
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
        window.location.href = '/main';
    };

    return (
        <Fragment>
            <Grid item xs={12} height={'100vh'} width={'100%'} display="flex" justifyContent="center">
                <Box display="inherit" sx={{ alignItems: 'center' }}>
                    <Card variant="outlined" justifyContent="center">
                        <CardContent sx={{ width: '646px' }}>
                            <Grid container spacing={2} columns={16}>
                                <Grid item xs={4}>
                                    <img height={100} src={`${Logo}?w=164&h=164&fit=crop&auto=format`} alt="Login" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Box px={3} py={2}>
                                        <Typography variant="h6" align="left" margin="dense">
                                            Sign Up
                                        </Typography>
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} sm={12}>
                                                <TextField
                                                    variant="outlined"
                                                    required
                                                    id="fullname"
                                                    name="fullname"
                                                    label="Full Name"
                                                    fullWidth
                                                    margin="dense"
                                                    {...register('fullname')}
                                                    error={errors.fullname ? true : false}
                                                />
                                                <Typography variant="inherit" color="textSecondary">
                                                    {errors.fullname?.message}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
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
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    variant="outlined"
                                                    required
                                                    id="email"
                                                    name="email"
                                                    label="Email"
                                                    fullWidth
                                                    margin="dense"
                                                    {...register('email')}
                                                    error={errors.email ? true : false}
                                                />
                                                <Typography variant="inherit" color="textSecondary">
                                                    {errors.email?.message}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
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
                                                <Typography variant="inherit" color="textSecondary">
                                                    {errors.password?.message}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    variant="outlined"
                                                    required
                                                    id="confirmPassword"
                                                    name="confirmPassword"
                                                    label="Confirm Password"
                                                    type="password"
                                                    fullWidth
                                                    margin="dense"
                                                    {...register('confirmPassword')}
                                                    error={errors.confirmPassword ? true : false}
                                                />
                                                <Typography variant="inherit" color="textSecondary">
                                                    {errors.confirmPassword?.message}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControlLabel
                                                    control={
                                                        <Controller
                                                            control={control}
                                                            name="acceptTerms"
                                                            defaultValue="false"
                                                            inputRef={register()}
                                                            render={({ field: { onChange } }) => (
                                                                <Checkbox color="primary" onChange={(e) => onChange(e.target.checked)} />
                                                            )}
                                                        />
                                                    }
                                                    label={
                                                        <Typography color={errors.acceptTerms ? 'error' : 'inherit'}>
                                                            I have read and agree to the Terms *
                                                        </Typography>
                                                    }
                                                />
                                                <br />
                                                <Typography variant="inherit" color="textSecondary">
                                                    {errors.acceptTerms ? '(' + errors.acceptTerms.message + ')' : ''}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Box mt={3}>
                                            <Button variant="contained" color="primary" onClick={handleSubmit(onSubmit)}>
                                                Register
                                            </Button>
                                        </Box>
                                        <br />
                                        <Typography
                                            component={Link}
                                            to="/pages/login/login1"
                                            variant="subtitle1"
                                            sx={{ textDecoration: 'none' }}
                                        >
                                            Already have an account?
                                        </Typography>
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

export default Signup;

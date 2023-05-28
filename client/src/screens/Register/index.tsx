import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useRegisterMutation} from "../../state/usersApiSlice";
import {setCredentials} from "../../state/authSlice";
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel, Grid, Link,
    TextField,
    Typography
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import classes from './index.module.scss';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [register, { isLoading }] = useRegisterMutation();

    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        if (userInfo) {
            navigate('/');
        }
    }, [navigate, userInfo]);

    function Copyright(props: any) {
        return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                    Your Website
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    const submitHandler = async (e: any) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            //toast.error('Passwords do not match');
        } else {
            try {
                console.log({ name, email, password })
                const res: any = await register({ name, email, password }).unwrap();
                dispatch(setCredentials({ ...res }));
                //navigate(redirect);
            } catch (err) {
                //toast.error(err?.data?.message || err.error);
            }
        }
    };
    return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        padding: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxShadow: '15px 15px 20px rgba(0, 0, 0, 0.1), -15px -15px 20px #fffb',
                        borderRadius: '20px',
                        gap: '20px',
                        background: '#edf1f4'
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form"
                         onSubmit={submitHandler}
                         noValidate
                         sx={{ mt: 1 }}
                         className={classes.fieldset}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            onChange={(e) => setName(e.target.value)}
                            sx={{
                                background: 'transparent',
                                borderRadius: '10px',
                                boxShadow: 'inset 5px 5px 10px rgba(0, 0, 0, 0.1), inset -5px -5px 10px #fff',
                                outline: 'none',
                                border: 'none',
                                padding: '0 10px',
                            }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{
                                background: 'transparent',
                                borderRadius: '10px',
                                boxShadow: 'inset 5px 5px 10px rgba(0, 0, 0, 0.1), inset -5px -5px 10px #fff',
                                outline: 'none',
                                border: 'none',
                            }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{
                                background: 'transparent',
                                borderRadius: '10px',
                                boxShadow: 'inset 5px 5px 10px rgba(0, 0, 0, 0.1), inset -5px -5px 10px #fff',
                                outline: 'none',
                                border: 'none',
                            }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="Confirm password"
                            label="Password"
                            type="password"
                            id="confirmPassword"
                            autoComplete="current-password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            sx={{
                                background: 'transparent',
                                borderRadius: '10px',
                                boxShadow: 'inset 5px 5px 10px rgba(0, 0, 0, 0.1), inset -5px -5px 10px #fff',
                                outline: 'none',
                                border: 'none',
                            }}
                        />
                        <button
                            type="submit"
                            className={classes.btn}
                        >Sign In</button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
    );
};

export default Register;

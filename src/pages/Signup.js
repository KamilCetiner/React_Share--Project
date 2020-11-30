import React from 'react';
import {Button, TextField, Grid, Container} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import {useFormik} from 'formik';



const stylesFunc = makeStyles({
    wrapper: {
        marginTop: '10rem'
    }
})

function Signup () {

        const formik = useFormik({
          initialValues: {
            displayName: "",
            email: "",
            password: "",
          },
          onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
          },
        });
    const signupStyles = stylesFunc();

    console.log(formik);
    return(


    <Container className={signupStyles.wrapper} maxWidth='sm'> 
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3} >
                    <Grid item xs={12}>
                        <TextField 
                        id="outlined-basic" 
                        label="Display Name" 
                        variant="outlined" 
                        
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField 
                        id="outlined-basic" 
                        label="Email"
                        variant="outlined" 
                        
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField 
                        id="outlined-basic" 
                        label="Password"
                        variant="outlined" 
                        
                        />
                        </Grid>
                        
                        <Grid item xs={12}>

                        <Button variant="contained" color="primary">
                            Submit
                        </Button>

                        </Grid>
                        <Grid item xs={12}>
                        <Button variant="contained" color="primary">
                            SignUp with Google
                        </Button>
                    </Grid>
                </Grid>
            </form>

    
    </Container>   
       )
}

export default Signup ;
import React, { useState } from 'react';
import './Sidebar.css';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Slider from './Slider';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

function Sidebar() {

    const [brands, setbrands] = useState({
        gilad: false,
        jason: false,
        antoine: false
      });

    const [category,setcategory]=useState({
        Electronics: false,
        Clothes:false,
        FMCG:false
    })  
      const handleChange = (event) => {
        setbrands({ ...brands, [event.target.name]: event.target.checked });
      };
    
      const { gilad, jason, antoine } = brands;

      const handlecategory=(event) => {
          setcategory({...category, [event.target.name]: event.target.checked});
      }

      const {Electronics,Clothes,Toiletries,FMCG}=category;

    const classes = useStyles();
    return (
        <div className="sidebar">
            
             <h5 className="filters__text">Filters</h5>
             <div className="filter">
                 <div className="brands">
                 <div className={classes.root}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel className="brand__heading" component="legend">Brands</FormLabel>
                        <FormGroup className="brand__formgroup">
                        <FormControlLabel className="brand__checkbox"
                            control={<Checkbox checked={gilad}  onChange={handleChange} name="gilad" />}
                            label="Gilad Gray"
                        />
                        <FormControlLabel className="brand__checkbox"
                            control={<Checkbox checked={jason}  onChange={handleChange} name="jason" />}
                            label="Jason Killian"
                        />
                        <FormControlLabel className="brand__checkbox"
                            control={<Checkbox checked={antoine}  onChange={handleChange} name="antoine" />}
                            label="Antoine Llorca"
                        />
                        </FormGroup>
                    
                    </FormControl>
                    </div>
                </div>  
                 
                 <div className="category">
                   <div className={classes.root}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel className="category__heading" component="legend">Category</FormLabel>
                            <FormGroup>
                            <FormControlLabel className="category__checkbox"
                                control={<Checkbox checked={Electronics} onChange={handlecategory} name="Electronics" />}
                                label="Electronics"
                            />
                            <FormControlLabel className="category__checkbox"
                                control={<Checkbox checked={Clothes} onChange={handlecategory} name="Clothes" />}
                                label="Clothes"
                            />
                            <FormControlLabel className="category__checkbox"
                                control={<Checkbox checked={FMCG} onChange={handlecategory} name="FMCG" />}
                                label="FMCG"
                            />
                            </FormGroup>
                            </FormControl>  
                    </div>
                 </div>
             
                <div className="price__slide">
                    <Slider/>
                </div>
             </div>
        </div>
    )
}

export default Sidebar

import React from 'react';
import './Slider.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([100, 2000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="slider">  
    <div className={classes.root}>
      <Typography className="slider__title" id="range-slider" gutterBottom>
        Price
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        max={2000}
        min={100}
        step={100}
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
    </div>
  );
}

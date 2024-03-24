import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import sprite from '../../icons/sprite.svg';
import css from '../Card/Card.module.css';
import { Box } from '@mui/material';

export default function RadioGroupButton() {
  const [value, setValue] = React.useState('van');

  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        sx={{
          marginTop: '24px',
          display: 'flex',
          flexDirection: 'row',
          gap: '10px',
        }}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="van"
        value={value}
        name="radio-buttons-group"
        onChange={handleChange}
      >
        <FormControlLabel
          sx={{
            display: 'flex',
            gap: '8px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100px',
            height: '95px',
            borderRadius: '10px',
            border: '1px solid rgba(16, 24, 40, 0.20)',
            position: 'relative',
            boxShadow: value === 'van' ? '0 0 0 1px red' : 'none',
          }}
          value="van"
          control={<Radio sx={{ display: 'none' }} />}
          label={
            <React.Fragment>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <svg width={40} height={28} className={css.icon_air}>
                  <use href={`${sprite}#icon-van`} />
                </svg>
                Van{' '}
              </Box>
            </React.Fragment>
          }
        />
        <FormControlLabel
          sx={{
            display: 'flex',
            gap: '8px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100px',
            height: '95px',
            borderRadius: '10px',
            border: '1px solid rgba(16, 24, 40, 0.20)',
            position: 'relative',
            boxShadow: value === 'fully' ? '0 0 0 1px red' : 'none',
          }}
          value="fully"
          control={<Radio sx={{ display: 'none' }} />}
          label={
            <React.Fragment>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <svg width={40} height={28} className={css.icon_air}>
                  <use href={`${sprite}#icon-fully`} />
                </svg>
                Fully Integrative{' '}
              </Box>
            </React.Fragment>
          }
        />
        <FormControlLabel
          sx={{
            display: 'flex',
            gap: '8px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100px',
            height: '95px',
            borderRadius: '10px',
            border: '1px solid rgba(16, 24, 40, 0.20)',
            position: 'relative',
            boxShadow: value === 'alcove' ? '0 0 0 1px red' : 'none',
          }}
          value="alcove"
          control={<Radio sx={{ display: 'none' }} />}
          label={
            <React.Fragment>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <svg width={40} height={28} className={css.icon_air}>
                  <use href={`${sprite}#icon-alcove`} />
                </svg>
                Alcove{' '}
              </Box>
            </React.Fragment>
          }
        />
      </RadioGroup>
    </FormControl>
  );
}

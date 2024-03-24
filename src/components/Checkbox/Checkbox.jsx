import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import sprite from '../../icons/sprite.svg';
import css from '../Card/Card.module.css';
import { height } from '@mui/system';

export const CheckboxList = () => {
  const [state, setState] = React.useState({
    ac: true,
    automatic: false,
    kitchen: false,
    tv: false,
    shower: false,
  });

  const handleChange = name => {
    setState({
      ...state,
      [name]: !state[name],
    });
  };

  const { ac, automatic, kitchen, tv, shower } = state;

  return (
    <Box sx={{}}>
      <FormControl sx={{}} component="fieldset" variant="standard">
        <FormGroup
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '10px',
            width: '360px',
            marginTop: '24px',
            marginBottom: '24px',
          }}
        >
          <FormControlLabel
            sx={{
              borderRadius: '10px',
              border: '1px solid rgba(16, 24, 40, 0.20)',
              width: '112px',
              height: '95px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              boxShadow: ac
                ? '0 0 0 1px red'
                : '0 0 0 1px rgba(16, 24, 40, 0.20)',
            }}
            control={
              <Checkbox
                sx={{ display: 'none' }}
                checked={ac}
                onChange={() => handleChange('ac')}
                name="ac"
              />
            }
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
                  <svg
                    width={32}
                    height={32}
                    // className={css.icon_automatic}
                    // style={{ marginRight: '8px' }}
                  >
                    <use href={`${sprite}#icon-ac`} />
                  </svg>
                  AC
                </Box>
              </React.Fragment>
            }
          />
          <FormControlLabel
            sx={{
              borderRadius: '10px',
              border: '1px solid rgba(16, 24, 40, 0.20)',
              width: '112px',
              height: '95px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              boxShadow: automatic
                ? '0 0 0 1px red'
                : '0 0 0 1px rgba(16, 24, 40, 0.20)',
            }}
            control={
              <Checkbox
                sx={{ display: 'none' }}
                checked={automatic}
                onChange={() => handleChange('automatic')}
                name="automatic"
              />
            }
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
                  <svg
                    width={32}
                    height={32}
                    className={css.icon_automatic}
                    style={{ marginRight: '8px' }}
                  >
                    <use href={`${sprite}#icon-automatic`} />
                  </svg>
                  Automatic
                </Box>
              </React.Fragment>
            }
          />
          <FormControlLabel
            sx={{
              borderRadius: '10px',
              border: '1px solid rgba(16, 24, 40, 0.20)',
              width: '112px',
              height: '95px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              boxShadow: kitchen
                ? '0 0 0 1px red'
                : '0 0 0 1px rgba(16, 24, 40, 0.20)',
            }}
            control={
              <Checkbox
                sx={{ display: 'none' }}
                checked={kitchen}
                onChange={() => handleChange('kitchen')}
                name="kitchen"
              />
            }
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
                  <svg
                    width={32}
                    height={32}
                    className={css.icon_kitchen}
                    style={{ marginRight: '8px' }}
                  >
                    <use href={`${sprite}#icon-kitchen`} />
                  </svg>
                  Kitchen
                </Box>
              </React.Fragment>
            }
          />
          <FormControlLabel
            sx={{
              borderRadius: '10px',
              border: '1px solid rgba(16, 24, 40, 0.20)',
              width: '112px',
              height: '95px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              boxShadow: tv
                ? '0 0 0 1px red'
                : '0 0 0 1px rgba(16, 24, 40, 0.20)',
            }}
            control={
              <Checkbox
                sx={{ display: 'none' }}
                checked={tv}
                onChange={() => handleChange('tv')}
                name="tv"
              />
            }
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
                  <svg
                    width={32}
                    height={32}
                    className={css.icon_tv}
                    style={{ marginRight: '8px' }}
                  >
                    <use href={`${sprite}#icon-tv`} />
                  </svg>
                  TV
                </Box>
              </React.Fragment>
            }
          />
          <FormControlLabel
            sx={{
              borderRadius: '10px',
              border: '1px solid rgba(16, 24, 40, 0.20)',
              width: '112px',
              height: '95px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              boxShadow: shower
                ? '0 0 0 1px red'
                : '0 0 0 1px rgba(16, 24, 40, 0.20)',
            }}
            control={
              <Checkbox
                sx={{ display: 'none' }}
                checked={automatic}
                onChange={() => handleChange('shower')}
                name="shower"
              />
            }
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
                  <svg
                    width={32}
                    height={32}
                    className={css.icon_shower}
                    style={{ marginRight: '8px' }}
                  >
                    <use href={`${sprite}#icon-shower`} />
                  </svg>
                  Shower/WC
                </Box>
              </React.Fragment>
            }
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};

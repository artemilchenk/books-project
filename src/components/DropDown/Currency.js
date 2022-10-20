import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {setCurrencySlice, setSkip} from "../../store/app.slice";
import {useDispatch} from "react-redux";

export function BasicSelectCurrency() {
    const [currency, setAge] = React.useState('');
    const dispatch = useDispatch()
    const handleChange = (event) => {
        dispatch(setCurrencySlice(event.target.value))
        dispatch(setSkip(0))
        setAge(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currency}
                    label="Currency"
                    onChange={handleChange}
                >
                    <MenuItem value={'BTC'}>BTC</MenuItem>
                    <MenuItem value={'ETH'}>ETH</MenuItem>
                    <MenuItem value={'LTC'}>LTC</MenuItem>
                    <MenuItem value={'DOG'}>DOG</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

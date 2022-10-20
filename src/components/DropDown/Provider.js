import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {setProviderSlice, setSkip} from "../../store/app.slice";
import {useDispatch} from "react-redux";

export function BasicSelectProvider({getBooks}) {
    const [provider, setProvider] = React.useState('');
    const dispatch = useDispatch()

    const handleChange = (event) => {
        getBooks(event.target.value)
        dispatch(setSkip(0))
        setProvider(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Provider</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={provider}
                    label="Provider"
                    onChange={handleChange}
                >
                    <MenuItem value={'bgaming'}>Bgaming</MenuItem>
                    <MenuItem value={'booming'}>Booming</MenuItem>
                    <MenuItem value={'evolution'}>Evolution</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

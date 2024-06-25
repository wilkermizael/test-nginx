import { Box, TextField, MenuItem } from '@mui/material';
import { useState } from 'react';

export const MuitSelect = () => {
    const [countries, setCountries] = useState<string[]>([]);
    console.log({ countries });

    const listCountry = {
        Brasil: 'BR',
        India: 'IN',
        China: 'CN',
        Russia: 'RU',
       'Estados Unidos': 'USA'
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setCountries(typeof value === 'string' ? value.split(',') : value);
    };

    return (
        <Box width="250px">
            <TextField
                label="Select Country"
                select
                value={countries}
                onChange={handleChange}
                fullWidth
                SelectProps={{
                    multiple: true
                }}
            >
                {Object.entries(listCountry).map(([country, code]) => (
                    <MenuItem key={code} value={code}>
                        {country}
                    </MenuItem>
                ))}
            </TextField>
        </Box>
    );
};

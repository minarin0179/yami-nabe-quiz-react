import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


const AnswerBox = ({ index, value, onChange, isCorrect }) => {
    return (
        <TextField
            label={`Answer ${index + 1}`}
            variant="outlined"
            type="text"
            value={value}
            onChange={(e) => onChange(index, e.target.value)}
            sx={{
                '& fieldset': { borderColor: isCorrect === null ? 'black' : isCorrect ? '#4CAF50' : '#FF5252' },
            }}
        />
    );
};

export default AnswerBox;

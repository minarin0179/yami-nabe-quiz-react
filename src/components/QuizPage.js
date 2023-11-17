import React, { useState } from 'react';
import { Box, Button, ButtonGroup } from '@mui/material';
import Quiz from './Quiz';

const QuizPage = () => {
  const [quizLevel, setQuizLevel] = useState(null);

  const handleButtonClick = (level) => {
    setQuizLevel(level);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {!quizLevel && (
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical outlined button group"
          sx={{ border: '2px solid #yourColor', borderRadius: '8px' }} // Add border style to ButtonGroup
        >
          <Button onClick={() => handleButtonClick(2)} sx={{ fontSize: '1.5rem' }}>
            初級 (具材2つ)
          </Button>
          <Button onClick={() => handleButtonClick(3)} sx={{ fontSize: '1.5rem' }}>
            中級 (具材3つ)
          </Button>
          <Button onClick={() => handleButtonClick(4)} sx={{ fontSize: '1.5rem' }}>
            高級 (具材4つ)
          </Button>
        </ButtonGroup>
      )}

      {quizLevel && <Quiz level={quizLevel} />}
    </Box>
  );
};

export default QuizPage;

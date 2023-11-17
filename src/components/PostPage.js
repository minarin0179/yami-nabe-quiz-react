import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container, TextField, Typography, Link as MuiLink, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const PostPage = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleButtonClick = async () => {
    if (!question || !answer) {
      alert('空欄の項目があります');
      return;
    }
    try {
      const url = 'https://yami-nabe-quiz.com/api';
      const requestData = {
        question,
        answer,
      };

      await axios.post(url, requestData);

      alert('具材が投入されました');
      setQuestion('');
      setAnswer('');
    } catch (error) {
      alert('具材を送るのに失敗しました\n時間を空けてから試してみてください');
      console.error('Error:', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
        }}
      >
        <MuiLink
          component={Link}
          to="/"
          color="primary"
          underline="none"
          sx={{ fontSize: 18, fontWeight: 'bold', textDecoration: 'none', '&:hover': { color: '#0044cc' } }}
        >
          ＜トップに戻る
        </MuiLink>

        <Typography component="h1" variant="h4" sx={{ marginTop: 2 }}>
          具材(クイズ)を入力してください
        </Typography>

        <Box component="form" noValidate sx={{ mt: 3 }}>
          <TextField
            fullWidth
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
            label="問題文"
            variant="outlined"
            margin="normal"
          />

          <TextField
            fullWidth
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
            label="答え"
            variant="outlined"
            margin="normal"
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleButtonClick}
            sx={{ mt: 3 }}
          >
            投入
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PostPage;

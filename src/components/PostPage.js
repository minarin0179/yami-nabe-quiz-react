import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container, TextField, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';


const PostPage = () => {
  // Stateを使用して入力値を管理
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  // APIリクエストを送信する関数
  const handleButtonClick = async () => {

    if (!question || !answer) {
      alert('空欄の項目があるよ');
      return;
    }
    try {
      // ここにAPIエンドポイントを追加
      const url = 'https://yami-nabe-quiz.com/api';


      // POSTリクエストのデータを作成
      const requestData = {
        question,
        answer,
      };

      // POSTリクエストを送信
      await axios.post(url, requestData);

      alert('具材が投入されたよ');
      setQuestion('');
      setAnswer('');
    } catch (error) {
      // エラーの処理
      alert('具材を送るのに失敗したよ\n時間を空けてから試してみてね');
      console.error('Error:', error);
    }
  };

  return (
    <Container maxWidth="70%"> {/* 変更: maxWidthを指定 */}

      <MuiLink
        component={Link}
        to="/"
        color="primary"
        underline="none"
        style={{ fontSize: 18, fontWeight: 'bold', textDecoration: 'none' }}
        sx={{ '&:hover': { color: '#0044cc' } }}
      >
        ＜トップに戻る
      </MuiLink>

      <Typography variant="h4">具材(クイズ)を入力してください</Typography>
      <div>
        <TextField
          fullWidth
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
          label="問題文"
          variant="outlined"
        />
      </div>


      <TextField
        fullWidth
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        required
        label="答え"
        variant="outlined"
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleButtonClick}
      >
        投入
      </Button>
    </Container>
  );
};

export default PostPage;

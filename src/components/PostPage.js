import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const PostPage = () => {
  // Stateを使用して入力値を管理
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  // APIリクエストを送信する関数
  const handleButtonClick = async () => {
    try {
      // ここにAPIエンドポイントを追加
      const url = 'https://yami-nabe-quiz.com/api';


      // POSTリクエストのデータを作成
      const requestData = {
        question,
        answer,
      };

      // POSTリクエストを送信
      const response = await axios.post(url, requestData);

      // レスポンスの処理
      console.log('API Response:', response.data);
    } catch (error) {
      // エラーの処理
      console.error('Error:', error);
    }
  };

  return (
    <Container maxWidth="70%"> {/* 変更: maxWidthを指定 */}
      <Link to="/">＜トップに戻る</Link>
      <Typography variant="h4">具材(クイズ)を入力してください</Typography>
      <div>
        <TextField
          fullWidth
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          label="問題文"
          variant="outlined"
        />
      </div>


      <TextField
        fullWidth
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
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

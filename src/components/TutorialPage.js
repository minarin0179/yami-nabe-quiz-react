import React from 'react';
import Paper from '@mui/material/Paper';
import { Box, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

const Tutorial = () => {
    return (

        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',  // Set the direction to column
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
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
            <Paper elevation={3} style={{ padding: 20, margin: 20 }}>
                <div>
                    <h1>遊び方説明</h1>

                    <h2>闇鍋クイズの食べ方</h2>
                    <p>
                        クイズの問題文が複数ごちゃまぜになって１つの問題文になっているよ<br />
                        元の問題文を推理して、それぞれのクイズの回答を入力してね
                    </p>

                    <h2>材料を入れる</h2>
                    <p>
                        みんなも鍋の材料(クイズ)を投稿することができるよ<br />
                        投稿した問題文はランダムに選ばれて出題されるよ<br />
                        問題文を投稿する際は公序良俗に反する内容を含まないように気を付けてね
                    </p>
                </div>
            </Paper>
        </Box>
    );
};

export default Tutorial;
import React, { useEffect, useState } from 'react';
import { Typography, Button, List, ListItem, ListItemText, Box, Grid, Paper, Card } from '@mui/material';
import AnswerBox from "./AnswerBox";

const Quiz = () => {
    const [question, setQuestion] = useState({ question: "鍋を煮込んでいます…", ingredients: [] });
    const [userAnswer, setUserAnswer] = useState([]);
    const [isCorrect, setIsCorrect] = useState([]);
    const [isAnswered, setIsAnswered] = useState(false);
    const [result, setResult] = useState(0);
    const [resetCount, setResetCount] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const url = 'https://yami-nabe-quiz.com/api';


    const setQuestionData = (res) => {
        setQuestion(res);
        setUserAnswer(Array(res.ingredients.length).fill(""));
        setIsCorrect(Array(res.ingredients.length).fill(null));
    };

    const nowLoading = () => {
        setQuestion({ question: "鍋を煮込んでいます…", ingredients: [] });
        setUserAnswer([]);
        setIsCorrect([]);
    }

    const restart = () => {
        setIsAnswered(false);
        nowLoading();
        setResetCount(resetCount + 1);
        setUserAnswer(Array(question.ingredients.length).fill(""));
        setIsCorrect(Array(question.ingredients.length).fill(null));
        setIsLoaded(false);
    }

    useEffect(() => {
        const size = 4;
        // 外部APIからデータを取得
        fetch(`${url}?size=${size}`, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(resultData => {
                setQuestionData(resultData)
                setIsLoaded(true);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [resetCount]); // 空の依存配列を渡すことで、コンポーネントがマウントされたときにのみ実行される


    const handleTextInputChange = (index, value) => {
        setUserAnswer((prevInputs) => {
            const newInputs = [...prevInputs];
            newInputs[index] = value;
            return newInputs;
        });
    };

    const handleButtonClick = () => {
        // Check answers
        const correctAnswers = new Set(question.ingredients.map((ingredient) => ingredient.answer));
        const userAnswers = new Set(userAnswer);
        const intersection = new Set([...correctAnswers].filter(x => userAnswers.has(x)));
        const result = [...intersection].length;
        setIsAnswered(true);
        setResult(result);

        //set isCorrect
        userAnswer.forEach((answer, index) => {
            if (correctAnswers.has(answer)) {
                setIsCorrect((prevInputs) => {
                    const newInputs = [...prevInputs];
                    newInputs[index] = true;
                    return newInputs;
                });
            } else {
                setIsCorrect((prevInputs) => {
                    const newInputs = [...prevInputs];
                    newInputs[index] = false;
                    return newInputs;
                });
            }
        });
    };

    return (
        <Paper elevation={3} style={{ padding: '20px', maxWidth: '800px', margin: '20px auto' }}>
            <Typography variant="h5" gutterBottom>
                {question.question}
            </Typography>

            <Grid container spacing={2}>
                {userAnswer.map((value, index) => (
                    <Grid item key={index}>
                        <AnswerBox
                            index={index}
                            value={value}
                            isCorrect={isCorrect[index]}
                            onChange={handleTextInputChange}
                        />
                    </Grid>
                ))}
            </Grid>

            {!isAnswered && isLoaded && (
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleButtonClick}
                    style={{ marginTop: '20px' }}
                >
                    回答
                </Button>
            )}

            {isAnswered && (
                <div>
                    <Typography variant="body1" gutterBottom>
                        正解数: {result}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        正解は
                    </Typography>
                    <List>
                        {question.ingredients.map(({ answer, question }, index) => (
                            <Card key={index} style={{ margin: '10px', padding: '10px', borderRadius: '10px' }}>
                                <ListItemText primary={`${answer}\n ⇒ ${question}`} />
                            </Card>
                        ))}
                    </List>

                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={restart}
                        style={{ marginTop: '20px' }}
                    >
                        おかわり
                    </Button>
                </div>
            )}
        </Paper>
    );
};

export default Quiz;

import React, { useState } from 'react';
import { Typography, Button, List, ListItem, ListItemText, Box, Grid } from '@mui/material';
import questions from "../data/questions";
import AnswerBox from "./AnswerBox";

const Quiz = () => {
    const [question, setQuestion] = useState(questions[0]);
    const [userAnswer, setUserAnswer] = useState(Array(question.ingredients.length).fill(""));
    const [isCorrect, setIsCorrect] = useState(Array(question.ingredients.length).fill(null));
    const [isAnswered, setIsAnswered] = useState(false);
    const [result, setResult] = useState(0);

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
        <Box>
            <Typography variant="h5" style={{ width: "70%", border: "solid 1px", padding: "10px", margin: "10px" }}>
                {question.question}
            </Typography>

            <Grid container spacing={1} style={{ padding: "10px" }}>
                {userAnswer.map((value, index) => (
                    <Grid item>
                        <AnswerBox
                            key={index}
                            index={index}
                            value={value}
                            isCorrect={isCorrect[index]}
                            onChange={handleTextInputChange}
                        />
                    </Grid>
                ))}
            </Grid>

            {!isAnswered && (
                <Button size='large' variant="contained" onClick={handleButtonClick} style={{ marginTop: "10px" }}>
                    回答
                </Button>
            )}

            {isAnswered && (
                <div>
                    <Typography variant="body1">正解数: {result}</Typography>
                    <Typography variant="body1">正解は</Typography>
                    <List>
                        {question.ingredients.map(({ answer }, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={answer} />
                            </ListItem>
                        ))}
                    </List>
                    <Typography variant="body1">元の問題文</Typography>
                    <List>
                        {question.ingredients.map(({ question }, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={question} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            )}
        </Box>
    );
};

export default Quiz;

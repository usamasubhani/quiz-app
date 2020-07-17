import React from 'react'
import { Paper, Button, Typography, List, ListItem, ListItemText } from '@material-ui/core'

import { Answer } from '../App'

type data = {
    question: string;
    answers: string[];
    questionNo: number;
    callBack: any;
    userAnswer: Answer | null;
}

const Question: React.FC<data> = ({ question, answers, questionNo, callBack, userAnswer }) => {
    return (
        <Paper className="questionContainer">
            <Typography variant="h4">{questionNo}. { question }</Typography>
            <List>
            
            { answers.map(answer => (
                <ListItem key={answer}>
                <Button disabled={userAnswer ? true:false} value={answer} onClick={callBack}>{answer}</Button>
                {/* <ListItemText key={answer} primary={answer} /> */}
                </ListItem>
            )) }
                
            
            </List>
            {/* { answers.map(answer => (
                <div key={answer}> 
                <Button variant="contained" value={answer} onClick={callBack} disabled={userAnswer ? true:false}>
                    { answer }
                </Button>
                </div>
            )) } */}
        </Paper>
    )
}

export default Question

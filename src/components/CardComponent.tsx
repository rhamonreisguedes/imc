import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ICard{
    color: string;
    title: string;
    text: string;
}


export default function CardComponent({color, title, text}: ICard) {
  return (
    <Card style={{backgroundColor: `${color}`}}>
      <CardContent>
        <Typography>
            {title}
        </Typography>
        <Typography>
            {text}
        </Typography>
        <Button>
            Clicar
        </Button>
      </CardContent>
     
    </Card>
  );
}
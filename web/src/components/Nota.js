import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Nota(props) {
  return (
    <Card sx={{ minWidth: 275, margin: '10px' }} alt='nota'>
      <CardContent>
        <Typography sx={{ fontSize: 14 }}
        color="text.secondary"
        gutterBottom
        data-testid="titulo">
          {props.nota.titulo}
        </Typography>
        <Typography variant="body2" data-testid="descripcion">
          {props.nota.descripcion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Editar</Button>
      </CardActions>
    </Card>
  );
}

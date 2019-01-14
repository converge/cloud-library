import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const BookList = ({ book, classes }) => {
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {book.author}
        </Typography>
        <Typography variant="h5" component="h2">
          {book.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {book.cathegory}
        </Typography>

      </CardContent>
      <CardActions>
        <Button size="small">Reserve this book !</Button>
      </CardActions>
    </Card>
  )
}

export default BookList
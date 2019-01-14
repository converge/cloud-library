import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import { compose } from 'redux';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import BookList from './bookList'
import Search from '../Search'

const styles = {
  card: {
    // minWidth: 275,
    width: 475,
    marginTop: 75,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class Books extends Component {
  render() {
    const { classes } = this.props
    const { books } = this.props
    console.log(books)

    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Search />
        {books && books.map(book => {
          return (
            <BookList book={book} key={book.id} classes={classes} />
          )
        })}
      </Grid>
    )
  }
}

Books.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    books: state.firestore.ordered.books
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'books' }
  ])
)(Books)
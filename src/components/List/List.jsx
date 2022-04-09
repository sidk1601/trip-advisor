import React, { useState, useEffect, createRef } from 'react';
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
} from '@material-ui/core';

import { useLoading } from '../../Contexts/LoadingContext';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles';

const List = ({ places, childClicked, type, rating, setType, setRating }) => {
  const [elRefs, setElRefs] = useState([]);

  const isLoading = useLoading();
  const classes = useStyles();

  useEffect(() => {
    const refs = Array(places.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());
    setElRefs(refs);
  }, [places]);

  return (
    <div className={classes.container}>
      <Typography variant="h4">Restaurants, Hotels and Attractions</Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places.map((place, index) => (
              <Grid ref={elRefs[index]} item xs={12} key={index}>
                <PlaceDetails
                  place={place}
                  selected={Number(childClicked) === index}
                  refProp={elRefs[index]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;

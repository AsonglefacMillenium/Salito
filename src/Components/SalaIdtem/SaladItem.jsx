import React, { useContext, useReducer } from "react";
import "./SaladItem.css";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import userContext from "../user/User";
import { SaladContext } from "../SaladMaker/SaladMaker";

const useStyles = createUseStyles({
  add: {
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  favorite: {
    fontSize: 20,
    position: "absolute",
    top: 10,
    right: 10,
  },
  image: {
    fontSize: 80,
  },
  wrapper: {
    border: "lightgrey solid 1px",
    margin: 20,
    padding: 25,
    position: "relative",
    textAlign: "center",
    textTransform: "capitalize",
    width: 200,
  },
});


const reducer = key => key + 1
const SaladItem = ({ image, name }) => {
    const classes = useStyles()
//setting context across components
const {setSalad} = useContext(SaladContext);
    const user = useContext(userContext)
  const favorite = user.favorites.includes(name);

  //updating id
  const [id, updateId] = useReducer(reducer, 0)

  //update function

  const update =() =>{
    setSalad({
      name,
      id: `${name} = ${id}`
    })

    updateId();
  };
  return (
    <div className={classes.wrapper}>
      <h3>{name}</h3>

      <span
        className={classes.favorite}
        aria-label={favorite ? "Favorite" : " Not Favorite"}
      >
        {favorite ? "😋" : ""}
      </span>

      <button className={classes.add} onClick={update}>
        <span className={classes.image} aria-label={name} role="img">
          {image}
        </span>
      </button>
    </div>
  );
};

SaladItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SaladItem;

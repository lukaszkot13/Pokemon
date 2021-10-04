import React from 'react'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
wrapper:{
    'display': 'flex',
    'flex-direction': 'column',
    'width': '100%',
}
})

const PokemonThumb = ({id, image, name, type, _callback }) => {
    const classes = useStyles()
    const style = type + " thumb-container";
    return (
        <div className={style}>
            <div className="number"><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div className={classes.wrapper}>
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    )
}

export default PokemonThumb
import React from 'react'
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
wrapper:{
    'display': 'flex',
    'flex-direction': 'column',
    'width': '100%',
},
umiejetnosci:{
    'display': 'flex',
    'justifyContent':' space-around'
},
height: {
'display': 'flex',
'flexDirection': 'column',

},
image:{
    'width': '120px',
  'height':' 120px'
},
container: {
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'justify-content': 'center',
    'padding': '1.5rem 0' ,
    'margin': '0.3rem',
    'border': '1px solid #efefef',
    'border-radius': '1.2rem',
    'min-width': '304px',
    'text-align': 'center',
    'box-shadow':' 0 3px 15px rgba(0, 0, 0, 0.089)',
    'background-color': 'mintcream'
  }

})

const PokemonThumb = ({id, image, name, type, height, weight, ability,baseExperience }) => {
    const classes = useStyles()
    const style = type + " thumb-container";
    return (
        <div className= {style}>
        <div className={classes.container}>
            
            <div className="number"><small>#0{id}</small></div>
            <img  className={classes.image}src={image} alt={name} />
            <div className={classes.wrapper}>
                <h3>{name}</h3>
                <div className={classes.umiejetnosci}> 
                <div className={classes.ustawienie}>
                <h5>{height}</h5>
                <h4>Height</h4>
                </div>
                <div className={classes.ustawienie}>
                <h5>{baseExperience}</h5>
                <h4>Base Experience</h4>
                </div>
                </div>
                <div className={classes.umiejetnosci}> 
                <div className={classes.ustawienie}>
                <h5>{ability}</h5>
                <h4>Ability</h4>
                </div>
                <div className={classes.ustawienie}>
                    <h5>{weight}</h5>
                <h4>Weight</h4>
                </div>
                </div>
                <small>Type: {type}</small>
            </div>
            </div>
        </div>
    )
}

export default PokemonThumb
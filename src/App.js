import React from 'react';
import propTypes from 'prop-types';

function Food({name, picture, rating}){
  return(
    <div>
      <h1>I like {name}</h1>
      <h3>{rating} / 5.0</h3>
      <img src={picture} alt={name}/>
    </div>
    
  )
}

Food.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
}
const data = [{
  id:1,
  name: "Bibimbap",
  image: "https://www.thespruceeats.com/thmb/4Qckb9A9KGyG-q_czTZieMWCGgk=/2048x1367/filters:fill(auto,1)/classic-korean-bibimbap-recipe-2118765_20_preview-5b1ee284ba61770037c8ad38.jpeg",
  rating: 4 
},
{
  id:2,
  name: "Kimbap",
image: "https://www.thespruceeats.com/thmb/bXEyHCT-3algVEAy6GNDXnuCg3Y=/4288x2412/smart/filters:no_upscale()/kimbap-korean-sushi-rolls-2118795-Hero-5b7dbdd346e0fb00250718b8.jpg",
rating: 4.3 
},
{
  id:3,
  name: "chapchae",
  image: "https://i2.wp.com/hipfoodiemom.com/wp-content/uploads/2012/09/img_2169-1.jpg",
  rating: 5 
}
]

function App() {
  return (
    <div className="App">
      {data.map(dish=>(<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>)
        
      )}
    </div>
  );
}

export default App;

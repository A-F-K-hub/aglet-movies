import "./FavouriteMovie.css";

function FavouriteMovie({ id, name }) {
  return (
    <div className="FavouriteMovie">
      <img src={id} alt={name}></img>
    </div>
  );
}

export default FavouriteMovie;

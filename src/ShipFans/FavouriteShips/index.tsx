
export default function FavouriteShips(props: any) {

  return (
    <div className="favourites">
      <h1>My Favourite ships</h1>

      <div className="favouriteShips">
        {props.favouriteShips.map((ship) => (
          <div className="favouriteShip" key={ship.id}>
            <img src={ship.image} alt={ship.name} width={75} height={75} />
            <h3>{ship.name}</h3>
            <span className="role">{ship.roles}</span>
            <p>Year Built: {ship.year_built}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

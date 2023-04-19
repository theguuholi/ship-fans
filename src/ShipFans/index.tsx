import { Suspense, useEffect } from "react";
import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { ShipFansQuery } from "./__generated__/ShipFansQuery.graphql";

/**
 * This is the Graph QL Query you're making.
 */
export const ShipFansQueryString = graphql`
  query ShipFansQuery($limit: Int) {
    ships(limit: $limit) {
      id
      image
      name
      roles
      type
      home_port
      year_built
    }
  }
`;

/**
 *
 * This is a shell component that handles making the query for you, and suspending
 * everything inside the suspense boundary, whenever the query is made.
 */
export const ShipFans = () => {
  const [shipFansQueryRef, loadShipFansQuery] =
    useQueryLoader<ShipFansQuery>(ShipFansQueryString);
  const getShips = (limit: number) => {
    loadShipFansQuery({ limit }, { fetchPolicy: "network-only" });
  };

  useEffect(() => {
    loadShipFansQuery({ limit: 5 }, { fetchPolicy: "network-only" });
  }, [loadShipFansQuery]);
  return (
    <Suspense fallback="">
      {!!shipFansQueryRef && (
        <ShipFansInternal queryRef={shipFansQueryRef} getShips={getShips} />
      )}
    </Suspense>
  );
};

/**
 *
 * This is within the query. It is within the suspense boundary, and will suspend any
 * time the query is in flight. You will only be able to access the result of the query
 * in this component and below.
 *
 * You are provided with a function, getShips, which will fire off a new query with the
 * passed number as the count of ships it will pull
 */
const ShipFansInternal = (props: {
  queryRef: PreloadedQuery<ShipFansQuery>;
  getShips: (limit: number) => void;
}) => {
  const data = usePreloadedQuery(ShipFansQueryString, props.queryRef);
  console.log(data);
  return <>SHIP FANS!</>;
};

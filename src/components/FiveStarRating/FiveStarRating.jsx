import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";
export function FiveStarRating({ rating }) {
  // declare start icon array
  const starList = [];

  // store number of filled array
  const starFillCount = Math.floor(rating);

  // store if yes or no there is half star
  const hasHalfStar = rating - parseInt(rating) >= 0.5;

  // store number of empty stars
  const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0);

  // push the filled stars
  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }

  // push the hald stars if necessary
  if (hasHalfStar) {
    starList.push(<StarHalf key={"star-half"} />);
  }

  // push the empty stars icons
  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<StarEmpty key={"star-empty" + i} />);
  }

  // render the star icon array
  return <div>{starList}</div>;
}

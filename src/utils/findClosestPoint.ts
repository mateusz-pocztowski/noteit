interface point {
  x: number;
  y: number;
}

function getOffset(pt1: point, pt2: point) {
  const diffX = Math.abs(pt1.x - pt2.x);
  const diffY = Math.abs(pt1.y - pt2.y);

  return diffX + diffY;
}

const findClosestPoint = (origin: point, points: point[]) => {
  const distances = points.map(point => getOffset(origin, point));

  const closest = Math.min.apply(Math, distances);
  const closestPointIndex = distances.findIndex(el => el === closest);

  return closestPointIndex;
};

export default findClosestPoint;

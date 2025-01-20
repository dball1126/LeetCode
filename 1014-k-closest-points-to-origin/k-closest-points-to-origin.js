var kClosest = function(points, k) {
    return quickSelect(0, points.length-1, points.length - k, points)
}

const quickSelect = (left, right, k, points) => {
    
    let partition = getPartition(left,right,points);

    while (partition !== k) {
        partition = getPartition(left,right,points)
        if (partition > k) {
            right = partition -1;
        } else {
            left = partition + 1;
        }
    }
    return points.slice(k);
}
const getDist = (arr) => {
    let [x, y] = arr;
    return (x-0)**2  + (y-0)**2
}
const getPartition = (left,right,points) => {
    let pivot = getDist(points[right]), i = left, j = right-1;
    
    while (i <= j) {
        while (points[i] !== undefined && getDist(points[i]) > pivot) i++;
        while (points[j] !== undefined && getDist(points[j]) < pivot) j--;

        if (i <= j) {
            [points[i], points[j]] = [points[j], points[i]];
            i++; j--;
        }
    }
    [points[i], points[right]] = [points[right], points[i]];
    return i;
}
var intervalIntersection = function(firstList, secondList) {
    let intersections = [], i = 0, j = 0;
    while (i < firstList.length && j < secondList.length) {
        let [minV1, maxV1] = firstList[i];
        let [minV2, maxV2] = secondList[j];
        if (minV1 >= minV2 && minV1 <= maxV2 || maxV1 >= minV2 && maxV1 <= maxV2 || minV2 >= minV1 && minV2 <= maxV1 || maxV2 >= minV1 && maxV2 <= maxV1) {
            intersections.push([Math.max(minV1, minV2), Math.min(maxV1, maxV2)]);
        }
        if (maxV1 >= maxV2) {
            j++;
        } else {
            i++;
        }
    }
    return intersections;
};
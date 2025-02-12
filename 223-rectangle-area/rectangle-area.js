var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    
    let area1 = (ax2 - ax1) * (ay2 - ay1);
    let area2 = (bx2 - bx1) * (by2 - by1);

    let xMax = Math.min(ax2, bx2),
        xMin = Math.max(ax1, bx1);
    
    let yMax = Math.min(ay2, by2),
        yMin = Math.max(ay1, by1);

    let diffX = xMax - xMin,
        diffY = yMax - yMin

        if (diffX > 0 && diffY > 0) {
            return area1 + area2 - (diffX * diffY);
        }
        return area1 + area2

};
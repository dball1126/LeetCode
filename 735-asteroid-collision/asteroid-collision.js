/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [];

    for (let asteroid of asteroids) {
        const val = Math.abs(asteroid);

        if (asteroid > 0) {
            stack.push(asteroid);
        } else {
            if (stack.length) {
                while(stack.length) {
                    let topValue = stack[stack.length-1];
                    let absValue = Math.abs(topValue);
                    if (topValue > 0) {
                        if (absValue === val) {
                            stack.pop();
                            break;
                        } else if (absValue < val) {
                            stack.pop();
                            if (!stack.length) {
                                stack.push(asteroid);
                                break;
                            }
                        } else {
                            break;
                        }
                    } else {
                        stack.push(asteroid);
                        break;
                    }
                }
            } else {
                stack.push(asteroid);
            }
        }
    }
    return stack;
};
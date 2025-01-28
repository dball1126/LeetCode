/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 * 
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void} 
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {Robot} robot
 * @return {void}
 */
// Backtracking
// Time: O(4^n)...n being the # of cells
// Space: O(n)
var cleanRoom = function(robot) {
    const dirs = [[-1,0],[0,1], [1,0], [0, -1]];
    const visited = new Set();
    const goBack = () => {
        robot.turnRight();
        robot.turnRight();
        robot.move();
        robot.turnRight();
        robot.turnRight();
    }

    const backtrack = (r, c , dir) => {
        let key = r + ":" + c;
        visited.add(key);
        robot.clean();
        for (let i = 0; i < dirs.length; i++) {
            let newDir = (i + dir) % 4;
            let [x, y] = dirs[newDir];
            let dx = r + x, dy = c + y;
            let newKey = (dx) + ":" + (dy);
            if (!visited.has(newKey) && robot.move()) {
                backtrack(dx, dy, newDir);
                goBack();
            }
            robot.turnRight();
        }
    }
    backtrack(0,0,0);
}
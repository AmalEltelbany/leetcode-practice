/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    timePoints.sort();

    function conversion(time){
        let temp = timePoints[time].split(':');
        let h = Number(temp[0]);
        let m = Number(temp[1]);
        return 60*h + m;
    }
    let res = 24*60 - conversion(timePoints.length-1) + conversion(0);
    for(let i = 0; i < timePoints.length - 1; i++){
        let diff = conversion(i+1) - conversion(i);
        res = Math.min(res,diff);
        if(res == 0){
            return res;
        }
    }
    return res;
};
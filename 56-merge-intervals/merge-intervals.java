import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.LinkedList;

class Solution {
    public int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, (a,b) -> Integer.compare(a[0], b[0]));
        LinkedList<int[]> links = new LinkedList<>();

        for (int[] interval: intervals) {
            int x1 = interval[0];
            int y2 = interval[1];
            if (links.isEmpty()) {
                links.add(interval);
            } else {
                int[] prev = links.getLast();
                int x = prev[0];
                int y = prev[1];
                if (x1 > y) {
                    links.add(interval);
                } else {
                    links.getLast()[1] = Math.max(y2, y);
                }
            }
        }
        return links.toArray(new int[links.size()][]);
    }
}
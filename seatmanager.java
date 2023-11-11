import java.util.ArrayList;
import java.util.Collections;

class SeatManager {
    
    private ArrayList<Integer> unreservedArrayList;
    private int seatAvailable;

    public SeatManager(int n) {
        unreservedArrayList = new ArrayList<Integer>();
        seatAvailable = 1;
    }
    
    public int reserve() {
        // find the first available seat
        // check if any prior reserved seats got unreserved
        if (unreservedArrayList.size() > 0) {
            // remove and return front value
            return unreservedArrayList.remove(0);
        }
        else {
            // increase next seat
            seatAvailable++;
            // return previous seat
            return seatAvailable - 1;
        }
    }
    
    public void unreserve(int seatNumber) {
        // unreserve by adding to unreservedArrayList
        unreservedArrayList.add(seatNumber);
        // sort the thing
        Collections.sort(unreservedArrayList);
    }
}
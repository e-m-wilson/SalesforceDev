public with sharing class EnumExample {
    public EnumExample() {

    }

    public enum Direction {NORTH, SOUTH, EAST, WEST}
   
    
   public static void returnDirections() {
       

       Direction firstStep = Direction.NORTH;
       Direction secondStep = Direction.EAST;
       Direction lastStep = Direction.NORTH;
       
       // get all options
       List<Direction> directions = Direction.values();
       System.debug(directions);
       
       // enum as a string
       String northStr = Direction.North.name();
       System.debug(northStr);
       
       // string to enum
       // 
       // Will not work because it doesn't exist:
       // Direction northEastEnum = Direction.valueOf('NorthEast');
       // System.debug(northEastEnum);
       
       // this one will work:
       Direction northEnum = Direction.valueOf('North');
       System.debug(northEnum);
       
       // ordinal
       Integer northIndex = Direction.North.ordinal();
       system.debug('north: ' + northIndex);
       
       // check value
       System.debug('Is northEnum equal to North? ' + Direction.North.equals(northEnum));
       
       // use an enum as a class
       System.debug(EnumClassExample.NorthEast);
   }
}
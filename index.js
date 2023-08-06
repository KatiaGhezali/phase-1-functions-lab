// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    const num = 42 - someValue ;
    if( num < 0){
      return num * (-1)
    } else {
      return num
    }
  }





function distanceFromHqInFeet(someValue) {
  const val = distanceFromHqInBlocks(someValue);
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet

  return val * 264
}




  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    const num = destination - start ;
     if( num < 0){
      return num * (-264)
    } else {
      return num * 264
    }

    
  }



  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer

    const distance = distanceTravelledInFeet(start, destination);

    if(distance <= 400){
        return 0
    } else if(distance > 400 && distance <= 2000) {
        return (distance - 400) * 2 /100
    } else if(distance > 2000 && distance <= 2500) {
        return 25
    } else if(distance > 2500) {
        return 'cannot travel that far'
    }
  }


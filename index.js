// Code your solution in this file!
function distanceFromHqInBlocks(numBlocks){
    return Math.abs(numBlocks - 42)
}

function distanceFromHqInFeet(numFeet){    
  return (distanceFromHqInBlocks(numFeet) * 264)
}

function distanceTravelledInFeet(locA,locB){
  return  (Math.abs(locA - locB) * 264)
}

function calculatesFarePrice(start, des){
    const fare = (Math.abs(start - des) * 264)
    if (fare < 400){
       return  0
   }else if (fare >= 400 && fare < 2000){
       return (fare - 400) * .02
    }else if (fare >= 2000 && fare < 2500){
        return 25
    }else if (fare > 2500){
        return 'cannot travel that far'
    }
}
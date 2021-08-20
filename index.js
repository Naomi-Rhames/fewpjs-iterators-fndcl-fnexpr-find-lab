function superbowlWin(array){
    // console.log(array)
  return array.find(function(e){ return e.result === 'W'})
}
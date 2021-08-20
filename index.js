function superbowlWin(array){
    // console.log(array)
  const winningObj = array.find(function(e){ return e.result === 'W'})
    if (winningObj){
        return winningObj.year
    }
        else {
            return undefined

        }
}
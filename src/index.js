module.exports = function towelSort (matrix) {
  let result=[];
  if (matrix!=undefined){
  for (let i=0; i<matrix.length; i++){
    if (i%2==0){
      result.push(...matrix[i]);
    }else{
      result.push(...matrix[i].reverse());
    }
  }
}
  return result;
}

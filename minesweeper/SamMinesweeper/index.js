let input=[
    [0,1,0,0],
    [0,0,1,0],
    [0,1,0,1],
    [1,1,0,0],
    ]
    
    function mine(output){
    let newoutput=[];
    for(let i=0;i<output.length;i++){
    newoutput[i]=[];
    for(let j=0; j<output[0].length;j++){
    if (output[i][j]===1){
    newoutput[i][j]=9;
    }
    let count=0;
    let coordinates=[
    [i,j+1],
    [i+1,j+1],
    [i+1,j],
    [i-1,j],
    [i-1,j-1],
    [i,j-1],
    [i+1,j-1],
    [i-1,j+1]
    ]
    
    for(loci of coordinates){
    const[x,y]=loci
    if(!crossedBorders(output,x,y) & output[x][y]===1 count++
    }
    newoutput[i][j]= count;
    }
    }
    return newoutput;
    }
    
    function crossedBorders (output,i,j){
    return i<0 || i> =output.length || j<0 || j>= output.length
    }
    console.log(input(mine));
    

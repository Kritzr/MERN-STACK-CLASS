let a=(v1)=>{
    let newvalue="this is from a"
    v1(newvalue)
    //console.log(v1)
  }
  let b=(v2)=>{
  console.log(v2)
  }
  //a("hi")
  //a("hello")
  a(b) //am passing the function itself, so we wont put ()after b. if i do so, it will call the b function.
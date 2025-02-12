let user ={name:"Alice",role:"admin",active:true}
if(user.role=="admin"){
  if(user.active){
    console.log("Admin Access Granted!")
  }else{
    console.log("Admin Access Revoked")
  }
}else if(user.role=="user"){
  if(user.active){
    console.log("User Access Granted!")
  }else{
    console.log("User Access Revoked")
  }
}else{
  console.log("Access Denied")
}

const sessionIdUserMap=new Map();


function setUser(id,user){
return sessionIdUserMap.set(id,user)
}

function getUser(id){
return sessionIdUserMap.get(id)
}
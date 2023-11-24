const sections=["User","Product","Orders"]
const accessTypes=["Edit","View","Delete","Create"];
const permissionItems=[]

for(s of sections)
    for(a of accessTypes)
        permissionItems.push(`${a}${s}`);

permissionItems.push('General');
module.exports={
    permissionItems
};
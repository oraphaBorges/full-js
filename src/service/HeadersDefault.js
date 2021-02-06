const headerDefault = (tokenSection)=>{
    let headerApp = {
        headers:{
            'Conntent-Type':'application/json',
            'Authorization':tokenSection
        }
    }
    return headerApp
}

export default headerDefault;
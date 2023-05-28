function solution(wallpaper) {
    let obj = {}
    for(let i=0; i<wallpaper.length; i++){
        for(let j=0; j<wallpaper[0].length; j++){
            if(wallpaper[i][j] === '#'){
                obj["iMax"] = obj["iMax"] !== undefined ? Math.max(i, obj["iMax"]) : i
                obj["iMin"] = obj["iMin"] !== undefined ? Math.min(i, obj["iMin"]) : i  
                obj["jMax"] = obj["jMax"] !== undefined ? Math.max(j, obj["jMax"]) : j
                obj["jMin"] = obj["jMin"] !== undefined ? Math.min(j, obj["jMin"]) : j         
            }
        }
    }
    return [obj["iMin"],obj["jMin"],obj["iMax"]+1,obj["jMax"]+1]
}
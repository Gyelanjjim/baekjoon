function solution(cacheSize, cities) {
    const map = new Map();
  
    const cacheHit = (city, map) => {
        map.delete(city);
        map.set(city, city);
        return 1;
    };
  
    const cacheMiss = (city, map, size) => {
        if(size === 0) return 5;
        (map.size === size) && map.delete(map.keys().next().value);
        map.set(city, city); 
        return 5;
    };
  
    const getTimeCache = (city, map, size) => 
    	(map.has(city) ? cacheHit : cacheMiss)
    	(city, map, size);
    
  	return cities.map(city => 
             	getTimeCache(city.toLocaleLowerCase(), map, cacheSize)
                     ).reduce( (a, c) => a + c, 0);
}
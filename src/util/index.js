
/**
 * 
 * @param {*} filter 
 * @param {*} list 
 * @returns 
 */
const filterProperties = (filter,list) => {
    return list.map( obj => {
        const newObj = {};
        for(const prop of filter) {
            newObj[prop] = obj[prop];
        }
        return newObj;
    });
};


/**
 * 
 * @param {*} filter 
 * @param {*} list 
 * @returns 
 */
 const filterObject = (filter, obj) => {
    const newObj = {};
    
    for(const prop of filter) {
        newObj[prop] = obj[prop];
    }
    
    return newObj;
};

module.exports = {
    filterObject
};
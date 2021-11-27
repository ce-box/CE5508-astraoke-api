
const filter = (filter,list) => {
    return list.map( obj => {
        const newObj = {};
        for(const prop of filter) {
            newObj[prop] = obj[prop];
        }
        return newObj;
    });
};

const filterObject = (filter, obj) => {
    const newObj = {};
    
    for(const prop of filter) {
        newObj[prop] = obj[prop];
    }
    
    return newObj;
};

module.exports = {
    filterObject,
    filter
};

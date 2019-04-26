export function groupByDate(list = []) {
    return list.reduce((acc, { dt_txt, ...rest  }) => {
        const date = new Date(dt_txt)
        
        return { 
            ...acc,
            [`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`]: rest
        }
    }, {})
}
export function groupByDate(list) {
    return list.reduce((acc, { dt_txt, ...rest  }) => {
        const { getFullYear: year, getMonth: month, getDate: date } = new Date(dt_txt)
        
        return { 
            ...acc,
            [`${year()}-${month() + 1}-${date()}`]: rest
        }
    }, {})
}
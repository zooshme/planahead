export function groupByDate(list = []) {
    return list.reduce((acc, { dt_txt, ...rest  }) => {
        const date = new Date(dt_txt)
        const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        const value = acc[formattedDate] ? [...acc[formattedDate], rest] : [rest]
        
        return { 
            ...acc,
            [formattedDate]: value
        }
    }, {})
}
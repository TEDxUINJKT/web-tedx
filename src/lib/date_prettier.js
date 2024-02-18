
export default function datePrettier(value="2000-10-10"){
    const split = value.split('-')

    const year = split[0]
    const month = split[1]
    const day = split[2]

    const month_list = ["January","February","March","April","May","June","July",
                "August","September","October","November","December"];

    return `${month_list[month-1]}, ${day} ${year}`
}
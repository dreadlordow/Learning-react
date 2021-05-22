export function paginate(items, pageNumber, pageSize){
    const startIndex = (pageNumber - 1) * pageSize;
    items = items.slice(startIndex, startIndex + pageSize)
    return items
}
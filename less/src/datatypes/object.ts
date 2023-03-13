
interface Book {
    authors: Author[],
    book_cover ?: string,
    categories : categories,

}

interface Author {
    id: number,
    name: string,
    slug: string
}
interface categories {
    id: number,
    name: string,
    is_leaf ?: string

}

// type book = {
//     authors : Author [],
//     book_cover?: string,


// }


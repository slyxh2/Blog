export type Category = {
    name: string,
    id: string
}
export type Categories = Category[]

export type Post = {
    category: string
    date: string
    header: string
    id: string
}
export type user = {
    id: number
    name: string
}

export type itemData = {
    avatar: string
    id: number
    name: string
    details: {
        city: string
        company: string
        position: string
    }
}
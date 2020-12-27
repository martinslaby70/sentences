export interface sentence {
    id: string,
    created: string,
    sentence: {
        who: string,
        what: string,
        when: string,
        where: string
    },
    avatar: {
        background: string,
        foreground: string
    }
}
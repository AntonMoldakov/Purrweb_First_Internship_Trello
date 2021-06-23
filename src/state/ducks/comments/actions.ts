import type from "./types";

interface IComment {
    id: number,
    cardId: number,
    message: string,
    author: string
}


const addComment = (comment: IComment) => ({
    type: type.ADD,
    comment
})

const deleteComment = (id: number) => ({
    type: type.DELETE,
    id
})

const changeComment = (comment: IComment) => ({
    type: type.CHANGE,
    comment
})


// @ts-ignore
export default {addComment, deleteComment, changeComment};

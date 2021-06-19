import React from "react";
import {Comments} from "../../../ui/index";
import CardComment from "./CardComment/CardComment";

interface IProps {
    comments: {
        comments: { id: number, cardId: number, message: string, author: string }[]
        addComment: (id: number, message: string) => void,
        changeComment: (id: number, message: string) => void,
        deleteComment: (id: number) => void,
    }
    id: number
}

function CardComments({comments, id}: IProps) {
    return (
        <Comments>
            {
                comments.comments.map(comment => {
                    if (comment.cardId === id) {
                        return <CardComment key={comment.id} commentProps={{
                            comment,
                            changeComment: comments.changeComment,
                            deleteComment: comments.deleteComment
                        }}/>
                    }
                })
            }
        </Comments>
    )
}

export default CardComments
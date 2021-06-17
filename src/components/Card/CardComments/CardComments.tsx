import React from "react";
import Comments from "../../../style/Comments";
import CardComment from "./CardComment/CardComment";

interface StandardComponentProps {
    changeComment: any
    deleteComment: any
    comments: { cardId: number, id: number, author: string, message: string }[]
    id: number
}

function CardComments({changeComment, deleteComment, comments, id}: StandardComponentProps) {
    return (
        <Comments>
            {
                comments.map(comment => {
                    if(comment.cardId === id) {
                        return <CardComment key={comment.id} changeComment={changeComment}
                                     deleteComment={deleteComment} comment={comment}/>
                    }
                })
            }
        </Comments>
    )
}

export default CardComments
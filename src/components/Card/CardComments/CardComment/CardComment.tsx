import React from "react";
import Flex from "../../../../style/Flex";
import Button from "../../../../style/Button";
import Block from "../../../../style/Block";
import TitleH4 from "../../../../style/TitleH4";
import CommentMessage from "./CommentMessage";

interface StandardComponentProps {
    changeComment: any
    deleteComment: any
    comment: { cardId: number, id: number, author: string, message: string }
}

function CardComment({changeComment, deleteComment, comment}: StandardComponentProps) {
    const id = comment.id
    const message = comment.message
    return (
        <Block>
            <Flex justifyContent={'space-between'}>
                <TitleH4>{comment.author}</TitleH4>
                <Button onClick={deleteComment.bind(null, id)} cross>X</Button>
            </Flex>
            <CommentMessage changeComment={changeComment} id={id} message={message}/>
        </Block>
    )
}

export default CardComment
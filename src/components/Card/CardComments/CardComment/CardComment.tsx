import React from "react";
import {Flex, Button, Block, TitleH4} from "../../../../ui/index";
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
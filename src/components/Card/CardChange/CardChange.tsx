import React from "react";
import {Form} from "react-final-form";
import {Button, TitleH2, Flex, Position, Modals, ModalBody, CreateField} from "../../../ui/index";
import CardComments from "../CardComments/CardComments";

interface IProps {
    onSubmit: (values: { title: string, text:string }) => void
    SendComment: (values: { comment: string }) => void
    setIsOpen: (value: boolean) => void
    title?: string
    btnText: string
    fieldProps: { type: string, value: string, name: string }[]
    id: number
    comments: {
        comments: { id: number, cardId: number, message: string, author: string }[]
        addComment: (id: number, message: string) => void,
        changeComment: (id: number, message: string) => void,
        deleteComment: (id: number) => void,
    }
}

function Modal({onSubmit, setIsOpen, fieldProps, id, comments, SendComment}: IProps) {
    return (
        <Modals>
            <ModalBody>
                <Flex justifyContent={'flex-end'} padding={'.5rem'}>
                    <Button cross onClick={() => setIsOpen(false)}>X
                    </Button>
                </Flex>
                <Position padding={'.5rem 1.5rem'}>
                    <Form
                        onSubmit={onSubmit}
                        render={({handleSubmit}) => (
                            <form onSubmit={handleSubmit}>
                                {
                                    fieldProps.map(field => CreateField(field))
                                }
                                <Button sub type="submit">Save</Button>
                            </form>
                        )}
                    />
                    <hr/>
                    <Form
                        onSubmit={SendComment}
                        render={({handleSubmit}) => (
                            <form onSubmit={handleSubmit}>
                                <TitleH2>Comments</TitleH2>
                                <Flex justifyContent={'space-between'} alignItems={'flex-end'}>
                                    {
                                        CreateField({type: 'textarea', name: 'comment'})
                                    }
                                    <Button sub type="submit">Send</Button>
                                </Flex>
                            </form>
                        )}
                    />

                    <div>
                        <CardComments comments={comments} id={id}/>
                    </div>
                </Position>
            </ModalBody>
        </Modals>
    )
}

export default Modal
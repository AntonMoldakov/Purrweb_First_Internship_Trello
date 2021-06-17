import React from "react";
import {Form} from "react-final-form";
import {Button, TitleH2, Flex, Position, Modals, ModalBody, CreateField} from "../../../ui/index";
import CardComments from "../CardComments/CardComments";

interface StandardComponentProps {
    onSubmit: (values: { [key: string]: string }) => void
    SendMessage: (values: { [key: string]: string }) => void
    setIsOpen: (value: boolean) => void
    title?: string
    btnText: string
    fieldProps: {
        [key: string]: string
    }[]
    id: number
    comments: {
        comments: {
            cardId: number, id: number,
            author: string, message: string,
        }[]
        addComments: (id: number, message: string) => void
        changeComment: any
        deleteComment: any
    }
}

function Modal({onSubmit, setIsOpen, fieldProps, id, comments, SendMessage}: StandardComponentProps) {
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
                        onSubmit={SendMessage}
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
                        <CardComments {...comments} id={id}/>
                    </div>
                </Position>
            </ModalBody>
        </Modals>
    )
}

export default Modal
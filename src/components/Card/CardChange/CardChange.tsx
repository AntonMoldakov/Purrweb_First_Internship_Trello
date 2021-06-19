import React from "react";
import {Field, Form} from "react-final-form";
import {Button, TitleH2, Flex} from "../../../ui/index";
import CardComments from "../CardComments/CardComments";

const required = (v: string) => {
    if (!v || v.trim() === '') {
        return 'This field is required'
    }
    return undefined
}


interface IProps {
    onSubmit: (values: { title: string, text: string }) => void,
    SendComment: (values: { comment: string }) => void,
    id: number,
    cardTitle: string,
    cardContent: string,
    comments: {
        comments: { id: number, cardId: number, message: string, author: string }[],
        addComment: (id: number, message: string) => void,
        changeComment: (id: number, message: string) => void,
        deleteComment: (id: number) => void,
    }
}

function Modal({onSubmit, id, comments, SendComment, cardTitle, cardContent}: IProps) {
    return (
        <div>
            <Form
                onSubmit={onSubmit}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <Flex justifyContent={'space-between'} margin={'0 0 .5rem'}>
                            <Field className={'form__field'} name={'title'}
                                   component={'input'} placeholder={'title'}
                                   defaultValue={cardTitle} validate={required}/>
                        </Flex>
                        <Flex justifyContent={'space-between'} margin={'0 0 0.5rem'}>
                            <Field className={'form__field textarea'} name={'text'} component={'textarea'}
                                   placeholder={'text'} defaultValue={cardContent}/>
                        </Flex>
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
                            <Flex justifyContent={'space-between'} margin={'0 0 0.5rem'}>
                                <Field className={'form__field textarea'} name={'comment'}
                                       component={'textarea'} placeholder={'comment'}/>
                            </Flex>
                            <Button sub type="submit">Send</Button>
                        </Flex>
                    </form>
                )}
            />

            <div>
                <CardComments comments={comments} id={id}/>
            </div>
        </div>
    )
}

export default Modal
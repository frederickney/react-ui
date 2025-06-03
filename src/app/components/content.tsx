import React, {useEffect, useState} from "react";

import {API} from "@/app/client";
import {ContentResponse} from "@/app/client/models/ContentResponse"
import {AssociatedContentResponse} from "@/app/client/models/AssociatedContentResponse"

export function Link(props: { content: ContentResponse }) {
    return (
        <div className="col-md-4 text-center">
            <h4><a href={props.content.url}>{props.content.title}</a></h4>
        </div>
    )
}

export function SubContent(props: { content: ContentResponse }) {
    const [subContent, setSubContent] = useState(new AssociatedContentResponse())

    useEffect(() => {
        async function fetchSubContent(id: number) {
            try {
                let response = await API.apiContentLinkedApiContentLinkedGet(id)
                setSubContent(subContent => response)
            } catch (error) {
                setSubContent(subContent => new AssociatedContentResponse())
            }
        }

        fetchSubContent(props.content.id);
    }, []);

    if (props.content.activated) {
        if (subContent.childs != null) {
            return (
                <div className="container">
                    <h2>
                        <a href={props.content.url}>{props.content.title}</a>
                    </h2>
                    <div dangerouslySetInnerHTML={{__html: `${props.content.content}`}}/>
                    <div className="row">
                        {subContent.childs.map((child: ContentResponse) => (<Link content={child}/>))}
                    </div>
                </div>
            )
        }
        return <div className="container">
            <h2>
                <a href={props.content.url}>{props.content.title}</a>
            </h2>
            <div dangerouslySetInnerHTML={{__html: `${props.content.content}`}}>
            </div>
        </div>
    } else {
        if (subContent.childs != null) {
            return (
                <div className="container">
                    <h2>
                        {props.content.title}
                    </h2>
                    <div dangerouslySetInnerHTML={{__html: `${props.content.content}`}}/>
                    <div className="row">
                        {subContent.childs.map((child: ContentResponse) => (<Link content={child}/>))}
                    </div>
                </div>
            )
        }
        return (
            <div className="container">
                <h2>
                    {props.content.title}
                </h2>
                <div dangerouslySetInnerHTML={{__html: `${props.content.content}`}}/>
            </div>
        )
    }
}

export function Content(props: { subcontent: AssociatedContentResponse; content: ContentResponse; pathname: string }) {
    if (props.subcontent.childs == null) {
        props.subcontent.childs = [];
    }
    return (
        <div
            className="grid grid-rows-[20px_1fr_10px] items-center justify-items-center min-h-screen p-4 pb-10 gap-8 sm:p-10 font-[family-name:var(--font-geist-sans)]">
            <main className="block gap-4 row-start-2 items-center sm:items-start fadein">
                <h1>{props.content.title}</h1>
                <div className="container" dangerouslySetInnerHTML={{__html: `${props.content.content}`}}/>
                {props.subcontent.childs.map((child: ContentResponse) => (<SubContent content={child}/>))}
            </main>
        </div>
    )
    // ...
}
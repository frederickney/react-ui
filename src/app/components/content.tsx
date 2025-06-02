import React, {useEffect, useState} from "react";
import { ContentResponse } from "@/app/client/models/ContentResponse"
import { AssociatedContentResponse } from "@/app/client/models/AssociatedContentResponse"
import {API} from "@/app/client";

export function Link(props: {content:ContentResponse}) {
    return <div className="col-md-4 text-center">
        <h4><a href={props.content.url}>{props.content.title}</a></h4>
    </div>
}

export function SubContent(props: {content:ContentResponse}) {
    console.log(props.content.title);
    console.log(props.content.activated);
    const [subContent, setSubContent] = useState(new AssociatedContentResponse())
    useEffect(() => {
        async function fetchSubContent(id:number) {
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
            return <div className="container">
                <h4>
                    <a href={props.content.url}>{props.content.title}</a>
                </h4>
                <div dangerouslySetInnerHTML={{__html: `${props.content.content}`}}/>
                <div className="row">
                    {subContent.childs.map((child: ContentResponse) => (<Link content={child} />))}
                </div>
            </div>
        }
        return <div className="container">
        <h4>
            <a href={props.content.url}>{props.content.title}</a>
        </h4>
        <div dangerouslySetInnerHTML={{__html: `${props.content.content}`}}>
        </div>
    </div>
    }
    else {
        if (subContent.childs != null) {
            return <div className="container">
                <h4>
                    {props.content.title}
                </h4>
                <div dangerouslySetInnerHTML={{__html: `${props.content.content}`}}/>
                <div className="row">
                    {subContent.childs.map((child: ContentResponse) => (<Link content={child} />))}
                </div>
            </div>
        }
        return <div className="container">
            <h4>
                {props.content.title}
            </h4>
                <div dangerouslySetInnerHTML={{__html: `${props.content.content}`}}/>
        </div>
    }
}

export function Content(props: {subcontent: AssociatedContentResponse; content: ContentResponse; pathname: string}){
  if (props.subcontent.childs == null){
      props.subcontent.childs = [];
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="block gap-8 row-start-2 items-center sm:items-start fadein">
            <h1>{props.content.title}</h1>
                <div dangerouslySetInnerHTML={{__html: `${props.content.content}`}}/>
            {props.subcontent.childs.map((child: ContentResponse) => (<SubContent content={child} />))}
        </main>
    </div>
  )
  // ...
}
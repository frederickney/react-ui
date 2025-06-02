"use client";
import Image from "next/image";
import {usePathname} from 'next/navigation'
import {API} from "./client"
import {useEffect, useState} from "react";
import {Content} from "./components/content";
import { ContentResponse } from "@/app/client/models/ContentResponse"
import { AssociatedContentResponse } from "@/app/client/models/AssociatedContentResponse"

let initialContent = new ContentResponse();
initialContent.content = '<Image class="load" src="/icons.svg" alt="neyconsulting" width=320 height=320 priority />'
initialContent.title = ''
initialContent.id = 0
initialContent.activated = false
initialContent.type = 'page'
initialContent.url = '';
initialContent.createdOn = new Date()
initialContent.updatedOn = new Date()

export default function Home() {
  const [content, setContent] = useState(initialContent);
  const [subContent, setSubContent] = useState(new AssociatedContentResponse());
  let pathname = usePathname();
  if (!pathname.endsWith('/'))
    pathname = pathname + '/';

  useEffect(() => {

      const fetchSubPages = async (pageId: number) => {
        try {
          const response = await API.apiContentLinkedApiContentLinkedGet(pageId);
          console.log(response);
          setSubContent(subContent => response);
        } catch (error) {
          console.log(error);
          setSubContent(subContent => new AssociatedContentResponse());
        }
      };

      const fetchPage = async () => {

        const response = await API.apiContentGetApiContentGetGet(pathname);
        console.log(response)
        setContent(content => response)
        fetchSubPages(response.id);
      };
      fetchPage();
  }, []);

  return <Content content={content} pathname={pathname} subcontent={subContent}/>
}

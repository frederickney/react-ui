"use client";
import {usePathname} from 'next/navigation'
import {API} from "@/app/client";
import {useEffect, useState} from "react";
import { ContentResponse } from "@/app/client/models/ContentResponse"
import { AssociatedContentResponse } from "@/app/client/models/AssociatedContentResponse"
import {Content } from "@/app/components/content";
import Image from "next/image";


let initialContent = new ContentResponse();
initialContent.content = '<Image class="load" src="/icons.svg" alt="neyconsulting" width=320 height=320 priority />'
initialContent.title = ''
initialContent.id = 0
initialContent.activated = false
initialContent.type = 'page'
initialContent.url = '';
initialContent.createdOn = new Date()
initialContent.updatedOn = new Date()

let notFoundContent = new ContentResponse();
notFoundContent.id = 0;
notFoundContent.activated = false;
notFoundContent.url = '';
notFoundContent.updatedOn = new Date();
notFoundContent.createdOn = new Date();
notFoundContent.type = 'page';


function custom404() {
  const [content, setContent] = useState(initialContent);
  const [subContent, setSubContent] = useState(new AssociatedContentResponse());
  let pathname = usePathname();
  if (!pathname.endsWith('/'))
    pathname = pathname + '/';

  useEffect(() => {

    const fetchSubPages = async (pageId: number) => {
      try {
        const response = await API.apiContentLinkedApiContentLinkedGet(pageId);
        setSubContent(subContent => response);
      } catch (error) {
        setSubContent(subContent => new AssociatedContentResponse());
      }
    };

    const fetchPage = async () => {
      try {
        const response = await API.apiContentGetApiContentGetGet(pathname);
        setContent(content => response)
        fetchSubPages(response.id)
      } catch (error) {
        notFoundContent.url = pathname
        notFoundContent.content = `${'\
          <h1 class="next-error-h1 text-center">404 - ' + pathname + '</h1>\
          <div><h2>This page could not be found.</h2></div>'
        }`
        setContent(content => notFoundContent)
      }
    };

    fetchPage();
  }, []);

  return <Content content={content} pathname={pathname} subcontent={subContent}/>
}

const notFound = custom404;

export default notFound;
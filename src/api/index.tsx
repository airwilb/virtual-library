import { useState, useEffect } from "react";

interface Response {
  url: string;
  pathname: string;
}

export interface Book {
  url: string;
  author: string;
  title: string;
}

const handleResponse = (response: Response[]) =>
  response.map(({ url, pathname }) => {
    const [author, title] = pathname.split("__");

    return {
      url,
      author,
      title: title.replace(/.pdf/g, " "),
    };
  });

export const useBookList = () => {
  const [bookList, setBookList] = useState<Book[]>([]);

  useEffect(() => {
    (async () => {
      const request = await fetch(
        "https://airwilb-virtual-library-file-uploader.vercel.app/api/list"
      );

      const reponse = await request.json();
      setBookList(handleResponse(reponse.blobs));
    })();
  }, []);

  return bookList;
};

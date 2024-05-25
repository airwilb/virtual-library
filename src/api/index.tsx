import { useState, useEffect } from "react";
import { Book } from "../types";

interface Response {
  url: string;
  pathname: string;
}

function chunkArray(array: Book[], chunkSize: number) {
  const result: Book[][] = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }

  return result;
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
  const chunkSize = 4;

  const [isLoading, setIsLoading] = useState(true);
  const [bookList, setBookList] = useState<Book[][]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const request = await fetch(
        "https://airwilb-virtual-library-file-uploader.vercel.app/api/list"
      );

      const reponse = await request.json();
      const booksList = reponse.blobs;
      const paginatedBooks: Book[][] = chunkArray(
        handleResponse(booksList),
        chunkSize
      );

      setBookList(paginatedBooks);
      setTotalPages(paginatedBooks.length);
      setIsLoading(false);
    })();
  }, []);

  return { bookList, totalPages, isLoading };
};

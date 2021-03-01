import { useEffect } from 'react';

export default function useDocumentTitle(title) {
  useEffect(() => { // this gets called everytime when a compoenent renders.
    document.title = title;

    return () => { // this is where you ComponentUnMount!!!
      console.log("clean up");
    };
  });
}
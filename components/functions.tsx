import React, { useEffect, useRef, useState } from "react";
import { windowSize } from "./data";


export const useOutsideClick = (callback: any) => {
	const ref = useRef<HTMLDivElement>(null);
  
	React.useEffect(() => {
	  const handleClick = (event: any) => {
		if (ref.current && !ref.current.contains(event.target)) {
		  callback();
		}
	  };
  
	  document.addEventListener('click', handleClick, true);
  
	  return () => {
		document.removeEventListener('click', handleClick, true);
	  };
	}, [ref]);
  
	return ref;
  };

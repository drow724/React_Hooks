import { useEffect, useRef } from "react";

/**
 @param {function} doEvery
 @param {function} arrowUp
 @param {function} arrowDown
 @param {function} arrowLeft
 @param {function} arrowRight
 @param {function} enter
 @param {function} escape
 @returns element, onChange
*/
export const useCommand = (doEvery,arrowUp,arrowDown,arrowLeft,arrowRight,enter,escape) => {
  
  //command입력을 위한 Input ref
  const element = useRef();

  //초기 command Input ref focus
  useEffect(() => {
    element.current.focus();
  }, []);

  //command에 따른 action
  const onChange = event => {
    if(event.key === "Escape"){
      event.preventDefault();
      if(doEvery){
        //모든 유효한 command에서 실행  
        doEvery();
      }
      if(escape){
        //Escape Command 에서 실행
        escape();
      }
    } else if(event.key === "ArrowUp"){
      event.preventDefault();
      if(doEvery){
        //모든 유효한 command에서 실행  
        doEvery();
      }
      if(arrowUp){
        //ArrowUp Command에서 실행
        arrowUp();
      }
    } else if(event.key === "ArrowDown") {
      event.preventDefault();
      if(doEvery){
        //모든 유효한 command에서 실행  
        doEvery();
      }
      if(arrowDown){
        //ArrowDown Command에서 실행
        arrowDown();
      }
    } else if(event.key === "ArrowLeft"){
      event.preventDefault();
      if(doEvery){
        //모든 유효한 command에서 실행  
        doEvery();
      }
      if(arrowLeft){
        //ArrowLeft Command에서 실행
        arrowLeft();
      }
    } else if(event.key === "ArrowRight") {
      event.preventDefault();
      if(doEvery){
        //모든 유효한 command에서 실행  
        doEvery();
      }
      if(arrowRight){
        //ArrowRight Command에서 실행
        arrowRight();
      }
    } else if(event.key === "Enter") {
      event.preventDefault();
      if(doEvery){
        //모든 유효한 command에서 실행  
        doEvery();
      }
      if(enter){
        //Enter Command에서 실행
        enter();
      }
    }
    return event.key
  }

  const focusOut = () => {
    element.current.focus();
  }

  return {element, onChange, focusOut}
}
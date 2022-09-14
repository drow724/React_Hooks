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
    event.preventDefault();
    if(event.key === "Escape"){
      if(doEvery){
        //모든 유효한 command에서 실행  
        doEvery();
      }
      if(escape){
        //Escape Command 에서 실행
        escape();
      }
    } else if(event.key === "ArrowUp"){
      if(doEvery){
        //모든 유효한 command에서 실행  
        doEvery();
      }
      if(arrowUp){
        //ArrowUp Command에서 실행
        arrowUp();
      }
    } else if(event.key === "ArrowDown") {
      if(doEvery){
        //모든 유효한 command에서 실행  
        doEvery();
      }
      if(arrowDown){
        //ArrowDown Command에서 실행
        arrowDown();
      }
    } else if(event.key === "ArrowLeft"){
      if(doEvery){
        //모든 유효한 command에서 실행  
        doEvery();
      }
      if(arrowLeft){
        //ArrowLeft Command에서 실행
        arrowLeft();
      }
    } else if(event.key === "ArrowRight") {
      if(doEvery){
        //모든 유효한 command에서 실행  
        doEvery();
      }
      if(arrowRight){
        //ArrowRight Command에서 실행
        arrowRight();
      }
    } else if(event.key === "Enter") {
      if(doEvery){
        //모든 유효한 command에서 실행  
        doEvery();
      }
      if(enter){
        //Enter Command에서 실행
        enter();
      }
    }
  }

  return {element, onChange}
}
/**
 * FYI: This is a demo for class components
 * To use simple-keyboard with React Hooks / Function components, check out:
 * https://simple-keyboard.com/react/demo/hooks
 */
 import React, { Component, useState, useRef, useCallback } from "react";
 import { render } from "react-dom";
 
import { useSelector, useDispatch } from 'react-redux';
 import Keyboard from "react-simple-keyboard";
 import "react-simple-keyboard/build/css/index.css";
 import Wrapper from './styles'
 
 const KeyBoard =() =>{

   const { openKeyBoard } = useSelector((state) => state.keyboard)
   const keyboard = useRef(null);
   const [layout, setLayoutName] = useState("default")
   const [input, setInput] = useState('')

    //키보드 값 변경
   const onChange = e => {
    setInput(e)
    };
    //키보드 누를때
   const onKeyPress = button => {
     console.log("Button pressed", button);
     if (button === "{shift}" || button === "{lock}") handleShift();
   };
   //shift키
   const handleShift = () => {
     const layoutName = {layout};
     setLayoutName(layoutName === "default" ? "shift" : "default")
   };
 
   const onChangeInput = event => {
     const input = event.target.value;
     setInput(input)
     keyboard.setInput(input);
   };
 
   
     return (
        <Wrapper>
        {/* <input
          value={input}
          placeholder={"Tap on the virtual keyboard to start"}
          onChange={onChangeInput}
        /> */}
         <Keyboard
           keyboardRef={r=>keyboard.r}
           layoutName={layout}
           onChange={onChange}
           onKeyPress={onKeyPress}
         />
      </Wrapper>
     );
   
 }
 
export default KeyBoard;
 
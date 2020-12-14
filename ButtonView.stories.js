import React from 'react';
import Button1 from './Button1'

export default {
    title:'AddButton',
    component:Button1
}
export const btn = () => <Button1 type = "submit" text='ADD'/>
export const btn1 = () => <Button1 type = "submit" text='Submit'/>
export const btn2 = () => <Button1 type = "submit" text='AddToDo'/>
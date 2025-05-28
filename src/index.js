import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BasicForm } from './components/formik_forms/BasicReactForm';
import { YupForm } from './components/formik_forms/YupDemo';
import { Components } from './components/formik_forms/formikComponents';
import { StateDemo } from './components/formik_forms/formikStates';
import { HookFormDemo } from './components/Hook_forms/DemoHook';
import { AccessComp } from './components/basic_components/AccessComp';
import { AccessGrid } from './components/basic_components/GridAccess';
import { SessionDemo } from './components/StateMgmt/SessionStorage';
import {CookiesProvider} from 'react-cookie'
import { Cookies } from './components/StateMgmt/CookiesDemo';
import { FormTask } from './components/Tasks/FormTask';
import { UseHooks } from './components/Tasks/HooksTaskUse';
import { ContextDemo } from './components/hooks/ContextHook';
import { Amazon, AmazonSearch } from './components/hooks/AmazonUsingContex';
import { ReducerDemo } from './components/UseReducerDemo/ReducerDemo';
import { RountingDemo } from './components/RoutingServerSide/TableFromDbJson';
import { StartUp } from './components/RoutingClientSide/Startup';
import { Index } from './TodoApp/ToDoIndex';
import { Home } from './Class-Components/Home';
import { FakeStore } from './Class-Components/HooksFakstore';
import { Form } from 'formik';
import { FormDemo } from './Class-Components/FormValidation';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <Index/>
 
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

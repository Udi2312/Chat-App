import React from 'react'
import {useState} from 'react'
import { MessageSquare } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore'


const SignupPage = () => {
    const [shownPassword, setShowPassword] = useState(false)
    const [fromData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    })

    const {signup , isSigningUp} = useAuthStore();
    const validateForm = () => {}
    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div className='min-h-screen grid lg:grid-cols-2'>
       { /* Left Side */}
       <div className='flex flex-col justify-content items-center p-6 sm:p-12'>
        <div className="w-full max-w-md space-y-8">
            {/* Logo */}
            <div className="text-center mb-8">
                <div className="flex flex-col items-center gap-2 group">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover: bg-primary/20 transition-colors">
                    </div>
                </div>
            </div>
        <MessageSquare />

        {/* {/* {/* <form onSubmit={handleSubmit} className='space-y-6'>
        < div classname= "form—control"> 
        <label className='label'
            <span className=" label—text font—medium">Full Name</span>
            </label>
            <div className="relative">
                <div className="absolute insert-y"></div> */}
            </div> 
       </div> 
    </div>
  )}


export default SignupPage
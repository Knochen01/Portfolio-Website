import React from "react";

const Contact = () => {
    return (
        <div name="contact" className="w-ful h-screen bg-[#0a192f] flex justify-center items-center p-4">
            <form method="POST" action="https://getform.io/f/9104010e-38be-49fc-a2be-d6227c74a593" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Contact</p>
                    <p className="text-gray-300 py-4">// Submit the form below or send me an email - knochen2@gmail.com</p>
                </div>  
                <input type="text" placeholder="name" name="name" className="bg-[#ccd6f6]"/>
                <input type="email" placeholder="Email" name="email" className="my-4 p-2 bg-[#ccd6f6]"/>
                <textarea className='bg-[#ccd6f6]' name="message" rows="10" placeholder="Message"></textarea>
                <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
            </form>
            
        </div>
    )
}
export default Contact;
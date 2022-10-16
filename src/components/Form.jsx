import emailjs from "@emailjs/browser"
import { useRef } from "react";
import { toast } from "react-hot-toast";

export default function Form({setIsOpen, closeModal}){
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_iuxe5g9', 'template_j61e4zm', form.current, 'QrsPbUCc-pkDIITlb')
          .then((result) => {
            toast.success('Message envoyé à Erwan')
          }, (error) => {
            toast.error('Erreur lors de l\'envoi du message')
            throw error
          });
          e.target.reset()
      };
    return(
        <>
            <button onClick={(e) => closeModal(e)}>Fermer</button>
            <form ref={form} onSubmit={sendEmail} className="bg-white pt-6 mb-4 md:min-w-[500px]">
                <div className="mb-4">
                    <label className="block text-secondaryText text-sm font-bold mb-2" htmlFor="user_name">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-secondaryText leading-tight focus:outline-none focus:shadow-outline" id="user_name" name="user_name" type="text" placeholder="Username"/>
                </div>

                <div className="mb-6">
                    <label className="block text-secondaryText text-sm font-bold mb-2" htmlFor="subject">
                        Subject
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-secondaryText mb-3 leading-tight focus:outline-none focus:shadow-outline" id="subject" type="text" name="subject" placeholder="Subject"/>
                </div>

                <div className="mb-6">
                    <label className="block text-secondaryText text-sm font-bold mb-2" htmlFor="user_email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-secondaryText mb-3 leading-tight focus:outline-none focus:shadow-outline" id="user_email" type="email" name="user_email" placeholder="Email"/>
                </div>
                
                <div className="mb-6">
                    <label className="block text-secondaryText text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-secondaryText mb-3 leading-tight focus:outline-none focus:shadow-outline" id="message" name="message" placeholder="Message"/>
                </div>

                <div className="flex items-center justify-center">
                    <button className="bg-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Send
                    </button>
                </div>
            </form>
        </>
    )
}
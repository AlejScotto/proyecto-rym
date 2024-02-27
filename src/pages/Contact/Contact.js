import NavBarComponent from "../../components/Nav";
import './contact.css'

export default function Contact(){
    return(
        <>
            <NavBarComponent />
            <div className="d-flex justify-content-center" >
                <div className="container-contact d-flex flex-column justify-content-center aling-items-center">
                    <div>
                        <h2 className="text-1 text-center">Contact</h2>
                        <h3 className="text-2 text-center">Leave us your information so we can contact you</h3>
                    </div>
                    <form className="container-form justify-content-md-center p-4">
                        <div className="div-1 d-flex flex-column"
                        ><label className="label-form" htmlFor="name">Name</label>
                        <input className="input-text rounded-2 p-2 border border-0" type="text" name="userName" id="name" required=""/>
                        </div>
                        <div className="div-2 d-flex flex-column">
                            <label className="label-form" htmlFor="email">Email</label>
                            <input className="input-text rounded-2 p-2 border border-0" type="email" name="userEmail" id="email" required=""/>
                            </div>
                            <div className="div-3 d-flex flex-column">
                                <label className="label-form" htmlFor="messege">Messege</label>
                                <textarea className="textarea rounded-2 border border-0 p-4" name="userMessege" id="messege" cols="30" rows="10" required=""></textarea>
                        </div>
                        <div className="div-4">
                            <input className="btn-form rounded-2 border border-0" type="submit" value="Send"/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
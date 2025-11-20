import { useState } from "react";
import Age from "./Age";
import Formlist from "./Formlist";
import FormCheck from "./FormCheck";
import FormTextarea from "./FormTextarea";
import Button from "../Button";
import close from "../../../assets/images/closebutton.svg";
import modalImg from "../../../assets/images/modalImg.jpg";

export default function ModalWindow({setIsOpen}){
    const [form, setForm] = useState({
        source:"",
        age:"",
        category:[],
        comment:"",
    })

    const handleSubmit = () => {
        console.log(`age: ${form.age}`);
        console.log(`source: ${form.source}`);
        console.log(`category: ${form.category.join(",")}`);
        console.log(`comment: ${form.comment}`);
    }
    const closeModal = () => {
        setIsOpen(false);
    }
    return(
        <>
            <div className="modalOverlay" onClick={closeModal}>
                <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                    <div className="modalImg">
                            <img src={modalImg} alt="" />
                    </div>    
                        <div className="modalBox">
                            <h2>FEEDBACK</h2>
                            <p>
                            Thank you for visiting BAMOS DESIGN.Please take a moment to
                            complete our survey to help us improve our services.
                            </p>
                    <form action="#" method="post" className="form">
                        <Age form={form} setForm={setForm} />
                        <Formlist form={form} setForm={setForm} />
                        <FormCheck form={form} setForm={setForm} />
                        <FormTextarea form={form} setForm={setForm} />
                        {/* 送信ボタン */}
                        <Button onClick={handleSubmit} label="SUBMIT" />
                        {/* 閉じるボタン */}
                    </form>
                        <button className="closebutton" onClick={closeModal}>
                            <img src={close} alt="閉じる" />
                        </button>
                        </div>
                
                </div>
            </div>
        </>
    )
}
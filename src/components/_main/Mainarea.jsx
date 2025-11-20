import ModalButton from "./ModalButton";
import Posts from "./Posts";
import SecWrap from "./SecWrap";

export default function Mainarea(){
    return(
        <main>
            <SecWrap title="Latest Blog Posts">
                <Posts />
            </SecWrap>
            <SecWrap title="We Value Your Feedback">
                <p className="plzFB">
                    We’re gathering feedback from our customers at BAMOS DESIGN. <br />
                    Please take a moment to share your thoughts — your input helps us make
                    BAMOS DESIGN even better.
                </p>
                <ModalButton />
            </SecWrap>
        </main>
    )
}
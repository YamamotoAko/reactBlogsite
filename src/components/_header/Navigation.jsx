import { useState } from "react";
import DrawerButton from "./DrawerButton";
import DrawerMenu from "./DrawerMenu";

export default function Navigation(){
    const [open, isOpen] = useState(false);
    return(
        <>
        <div className="navigation_container">
            <div className="navigation_box">
                <h1><a href="#">BAMOS DESIGN</a></h1>
                <DrawerButton open={open} isOpen={isOpen} />
            </div>
            <DrawerMenu open={open} />
        </div>
        </>
    )
}
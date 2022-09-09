import CustomBtn from "./CustomBtn"

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-content">
                    <CustomBtn txt='Contact' click={() => hello()}/>
                    <CustomBtn txt='Instagram'/>
                </div>
            </div>
        </>
    )
}

function hello(){
    alert("hello")
}
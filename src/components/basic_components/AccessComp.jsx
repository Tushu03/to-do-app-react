import { ComponentDemo } from "../Controlled_Components/CtrlComponent"
export function AccessComp()
{
    return(
        <header>
            <ComponentDemo Brand='Shopsy' theme='bg-dark text-white' MenuItems={['Home','Contact','About']} showSignin='d-block' btnTheme='btn btn-success'/>
            <ComponentDemo Brand='Amazon' theme='bg-white text-dark' MenuItems={['Home & Appliances','Electronics','Kitchen','Sports']} showSignin='d-block' btnTheme='btn btn-warning'/>


        </header>
    )
}
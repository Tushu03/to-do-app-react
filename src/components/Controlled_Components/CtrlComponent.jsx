export function ComponentDemo(props)
{
    return(
        <nav className={`d-flex my-2 justify-content-between border border-2 p-2 ${props.theme}`}>
            <div>
                <span className="fs-4 fw-bold">{props.Brand}</span>
            </div>
            <div>
                {
                    props.MenuItems.map(
                        item=><span key={item} className="mx-3">{item}</span>
                    )
                }
            </div>
            <div className={`${props.showSignin}`}>
                <button className={`${props.btnTheme}`}>Sign In</button>
            </div>

        </nav>
    )


}
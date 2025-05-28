export function Search()
{
    return(
        <form action={'/results'}>

        <div className="dropdown input-group" id="menu">

            <button className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" data-bs-target="menu">
                <span className="btn btn-warning bi bi-justify"> All</span>
            </button>

            <ul className="dropdown-menu">
                {
                    categories && categories.map((category, index) =>

                        <li key={index} className="dropdown-item"><Link className="nav-link text-dark" to={`products/:${category}`}>{category.toUpperCase()}</Link> </li>)
                }

            </ul>
           
                <input type="text" className="form-control" name="query" placeholder="Search for products..." />
                <button type="submit" className="btn btn-warning bi bi-search"></button>

        

        </div>
    </form>
    )
}
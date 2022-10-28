import { useEffect, useState } from "react";

const Home = () => {
    const [users, setUsers] = useState ([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch(`https://randomuser.me/api?results=10&page=${page}`).then((response) => {
            return response.json()
        }).then(result => {
            setUsers(result.results)
        })
    }, [page]
    );

 
    function nextPage() {
        setPage(prevPage => prevPage + 1);
      }

    function previousPage( ){
        
        if(page > 1) {
        setPage(prevPage => prevPage - 1)
        }
        else {
            return <h1>ERROR 404</h1>;
        }
    }


    return (<><div><ul>{users.map(user => <li key={user.email}>{user.name.title} {user.name.first} {user.name.last}</li>)}</ul>
     <button onClick={previousPage}>Previous</button>
     <button onClick={nextPage}>Next Page</button>
    </div></>)
}



export default Home;
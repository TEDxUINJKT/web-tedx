import { Link } from 'react-router-dom'

export default function Page404() {
    return (
        <section style={layout}>
            <h1 style={{ fontFamily: 'Mikela', fontSize: '6em' }}>404 Page</h1>
            <Link to="/">
                <button>Go Back Home</button>
            </Link>
        </section>
    )
}

const layout = {
    minWidth: '100%',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '20px'
}
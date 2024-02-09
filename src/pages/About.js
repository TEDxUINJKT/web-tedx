import Theme from '../components/Theme'

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ThemeContent } from '../state/content/middleware'

export default function About() {
    const dispatch = useDispatch()
    const { content } = useSelector(states => states)

    useEffect(() => {
        dispatch(ThemeContent())
    }, [dispatch])

    return (
        <section className="page-container">
            <div style={{ textAlign: 'center' }}>
                <h1 className="glitch">
                    <span aria-hidden="true">ABOUT</span>
                    ABOUT
                    <span aria-hidden="true">ABOUT</span>
                </h1>
            </div>
            <Theme data={content?.theme} />
        </section>
    )
}
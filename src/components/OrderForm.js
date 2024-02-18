import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import api from '../lib/api'
import { ShowError } from '../state/error/middleware'

import { Link } from 'react-router-dom'

export default function OrderForm({ data, setData }) {
    const navigate = useNavigate()
    const [snap, setSnap] = useState(null)
    const [acceptedTNC, setAcceptedTNC] = useState(false)
    const [snapShow, setSnapShow] = useState(false)

    async function doPayment(e) {
        e.preventDefault();
        try{
            if (acceptedTNC) {
                const response = await api.createOrder(data)
    
                setSnapShow(true)
                if (response.data.status === 200) {
                    snapEmbed(response.data.snap_token, 'snap-container')
                }else{
                    console.log(ShowError)
                    ShowError('Out Of Quota')
                }
            } else {
                console.log('Accept TNC First')
            }
        }catch(err){
            console.log(ShowError)
            ShowError('Out Of Quota')
        }
        
    }

    function snapEmbed(snap_token, embedId) {
        if (snap) {
            snap.embed(snap_token, {
                embedId
            })
        }
    }

    useEffect(() => {
        const myMidtransClientKey = process.env.REACT_APP_MIDTRANS_CLIENT_KEY
        const midtransScriptUrl = process.env.REACT_APP_MIDTRANS_SCRIPT_URL

        const scriptTag = document.createElement('script')
        scriptTag.src = midtransScriptUrl;
        scriptTag.setAttribute('data-client-key', myMidtransClientKey)
        scriptTag.onload = function () {
            setSnap(window.snap)
        }

        document.body.appendChild(scriptTag)

        return () => {
            document.body.removeChild(scriptTag);
        }
    }, [])

    return (
        <section style={{ minWidth: '55vw' }}>
            {!snapShow && (
                <form style={layout} onSubmit={(e) => doPayment(e)}>
                    <h5># Information Detail</h5>
                    <div style={form} >
                        <input required type="text" onChange={(e) => setData({ ...data, first_name: e.target.value })} value={data.first_name} placeholder="First Name" />
                        <input required type="text" onChange={(e) => setData({ ...data, last_name: e.target.value })} value={data.last_name} placeholder="Last Name" />
                        <input required type="text" onChange={(e) => setData({ ...data, university: e.target.value })} value={data.university} placeholder="University" />
                        <input required type="email" onChange={(e) => setData({ ...data, email: e.target.value })} value={data.email} placeholder="Email" />
                        <input required type="text" onChange={(e) => setData({ ...data, phone_number: e.target.value })} value={data.phone_number} placeholder="Phone Number" />
                    </div>
                    <div style={tnc}>
                        <input type="checkbox" onChange={() => setAcceptedTNC(!acceptedTNC)} />
                        <span>Make sure you are already read the <Link to="/terms-and-conditions" style={tnc_link}>terms and conditions</Link></span>
                    </div>
                    <div style={tnc}>
                        <span>Have any problem? Please <a href="https://wa.me/6281210696745" style={tnc_link}>contact us</a></span>
                    </div>
                    <div>
                        <button type="submit" className={acceptedTNC ? 'btn_secondary' : 'btn_disable'}>PAY NOW</button>
                    </div>
                </form>
            )}
            <div style={snap_layout} id="snap-container"></div>
        </section>
    )
}

const layout = {
    minWidth: '100%',
    padding: '30px',
    borderRadius: '10px',
    backgroundColor: '#eb0028',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
}

const form = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '10px',
}

const tnc = {
    fontSize: '1.1em',
    display: 'flex',
    gap: '10px',
}

const tnc_link = {
    fontSize: '1em',
    display: 'inline',
    color: 'white',
    textDecoration: 'underline',
}

const snap_layout = {
    width: '100%',
}

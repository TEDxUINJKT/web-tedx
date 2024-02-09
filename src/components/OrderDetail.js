import { MdLocationOn } from "react-icons/md";

export default function OrderDetail({ data, setData, plain }) {
    function setRefferal(e) {
        if (e.target.value === '') {
            setData({ ...data, is_refferal: false, refferal: null })
        } else {
            setData({ ...data, is_refferal: true, refferal: e.target.value })
        }
    }

    return (
        <section style={layout}>
            <h5># Order Details</h5>
            <img src={plain.event.thumbnail.url} alt="thumb" width="100%" style={{ borderRadius: '10px' }} />
            <span style={{ fontSize: '1.2em', fontWeight: '600' }}>({plain.ticket.type_ticket}) {plain.event.event} Ticket</span>
            <div style={tag_layout}>
                <span style={tag_type}>{plain.event.type}</span>
                <span style={tag}>
                    <MdLocationOn />
                    {plain.event.place}
                </span>
            </div>
            <div style={detail_layout}>
                <div style={detail_content}>
                    <span>Amount</span>
                    <span>IDR {plain.ticket.price}</span>
                </div>
                <div style={detail_content}>
                    <span>Refferal Code</span>
                    <input onChange={(e) => setRefferal(e)} value={data.refferal} style={refereal_input} placeholder="(Optional)" />
                </div>
            </div>
            <div style={{ ...detail_content, margin: '10px 0' }}>
                <span>Subtotal</span>
                <span>IDR {plain.ticket.price}</span>
            </div>
        </section>
    )
}

const layout = {
    maxWidth: '33%',
    padding: '30px',
    borderRadius: '10px',
    backgroundColor: '#eb0028',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
}

const detail_layout = {
    borderTop: '2px solid white',
    borderBottom: '2px solid white',
    display: 'flex',
    gap: '10px',
    flexDirection: 'column',
    padding: '15px 0'
}

const detail_content = {
    fontSize: '1.1em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}

const tag_layout = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}

const tag_type = {
    backgroundColor: 'white',
    color: '#eb0028',
    padding: '5px 10px',
    borderRadius: '50px'
}

const tag = {
    display: 'flex',
    gap: '5px',
    justifyContent: 'center'
}

const refereal_input = {
    textAlign: 'right',
}
export default function OrderDetail() {
    return (
        <section style={layout}>
            <h5>Order Details</h5>
            <img src="https://res.cloudinary.com/delq31bnx/image/upload/v1703572567/event_fmfu3t.jpg" alt="thumb" width="100%" style={{ borderRadius: '10px' }} />
            <span style={{ fontSize: '1.2em', fontWeight: '600' }}>TEDxUINJakarta 2.0</span>
            <div style={detail_layout}>
                <div style={detail_content}>
                    <span>Amount</span>
                    <span>IDR 40,000</span>
                </div>
                <div style={detail_content}>
                    <span>Quantity</span>
                    <span>
                        <div style={detail_content_cta}>
                            <button style={detail_content_button}>-</button>
                            <span>X 1</span>
                            <button style={detail_content_button}>+</button>
                        </div>
                    </span>
                </div>
            </div>
            <div style={{ ...detail_content, margin: '10px 0' }}>
                <span>Subtotal</span>
                <span>IDR 40,000</span>
            </div>
            <button className="btn_secondary">PAY NOW</button>
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

const detail_content_cta = {
    alignItems: 'center',
    gap: '5px',
    display: 'flex',
}

const detail_content_button = {
    width: '25px',
    height: '25px',
    padding: '0px',
    color: '#eb0028',
    backgroundColor: 'white',
    border: '1px solid white'
}
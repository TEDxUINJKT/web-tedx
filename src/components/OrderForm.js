export default function OrderForm() {
    return (
        <section style={layout}>
            <h5>Payment Method</h5>
            <div style={payment_list}>
                <div style={payment_item}>
                    <img src="https://res.cloudinary.com/delq31bnx/image/upload/v1703572593/payment/gopay_gne8ki.png" alt="gopay" width="130px" />
                </div>
                <div style={payment_item}>
                    <img src="https://res.cloudinary.com/delq31bnx/image/upload/v1703572593/payment/dana_hbtkpn.png" alt="dana" width="130px" />
                </div>
                <div style={payment_item}>
                    <img src="https://res.cloudinary.com/delq31bnx/image/upload/v1703572594/payment/ovo_udlfwf.png" alt="ovo" width="130px" />
                </div>
                <div style={payment_item}>
                    <img src="https://res.cloudinary.com/delq31bnx/image/upload/v1703572594/payment/shopeepay_ae9hgo.png" alt="shopeepay" width="130px" />
                </div>
                <div style={payment_item}>
                    <img src="https://res.cloudinary.com/delq31bnx/image/upload/v1703572593/payment/bt_s5v5ss.png" alt="bt" width="130px" />
                </div>
                <div style={payment_item}>
                    <img src="https://res.cloudinary.com/delq31bnx/image/upload/v1703572595/payment/va_nrbbkr.png" alt="va" width="130px" />
                </div>
            </div>
            <>
                <h5>Information Detail #1</h5>
                <div style={form}>
                    <input placeholder="Full Name" />
                    <input placeholder="University" />
                    <input placeholder="Email" />
                    <input placeholder="Phone Number" />
                </div>
            </>
        </section>
    )
}

const layout = {
    maxWidth: '63%',
    padding: '30px',
    borderRadius: '10px',
    backgroundColor: '#eb0028',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
}

const payment_list = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '15px'
}

const payment_item = {
    backgroundColor: 'white',
    color: '#181818',
    borderRadius: '10px',
    overflow: 'hidden',
    display: 'flex'
}

const form = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '10px',
}
import OrderDetail from "../components/OrderDetail"
import OrderForm from "../components/OrderForm"


export default function Order() {
    return (
        <section style={{ padding: '100px 0 0 0' }}>
            <div style={{ textAlign: 'center' }}>
                <h1 className="glitch">
                    <span aria-hidden="true">ORDER</span>
                    ORDER
                    <span aria-hidden="true">ORDER</span>
                </h1>
            </div>
            <div style={layout}>
                <OrderForm />
                <OrderDetail />
            </div>
        </section>
    )
}

const layout = {
    margin: '150px 0',
    width: '90vw',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
}
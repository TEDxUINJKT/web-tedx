import { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import {decrypt} from '../lib/crypto'

export default function OrderDetail({ data, setData, plain }) {    
    const [dynamicPrice, setDynamicPrice] = useState(plain?.ticket?.price)

    function setRefferal(input_refferal) {
        const refferal_list = JSON.parse(decrypt(plain.ticket.refferal)) || []
        
        let is_available = {
            name: 'NONE',
            value: 0
        }

        refferal_list.forEach(each => {
            if (each.name === input_refferal) {
                is_available = each
            }
        })

        if (input_refferal === '') {
            setData({ ...data, is_refferal: false, refferal: null, total_price: dynamicPrice })
        } else {
            if (is_available.value !== 0) {
                let new_price = dynamicPrice - is_available.value
                setDynamicPrice(new_price)
                if (new_price < 0) {
                    new_price = 0
                }

                setData({ ...data, is_refferal: true, refferal: input_refferal, total_price: new_price })
            } else {
                setData({ ...data, is_refferal: false, refferal: null, total_price: dynamicPrice })
            }
        }
    }

    function removeQuantity(){
        if(data.quantity > 1){
            const new_price = dynamicPrice - plain?.ticket?.price

            setDynamicPrice(new_price)
            setData({ ...data, quantity:data.quantity-1, total_price:new_price})
        }
    }

    function addQuantity(){
        const new_price = dynamicPrice + plain?.ticket?.price
        setDynamicPrice(new_price)
        setData({ ...data, quantity:data.quantity+1, total_price:new_price })
    }

    return (
        <section style={layout}>
            <h5># Order Details</h5>
            <img src={plain?.event?.thumbnail.url} alt="thumb" width="100%" style={{ borderRadius: '10px' }} />
            <span style={{ fontSize: '1.2em', fontWeight: '600' }}>({plain?.ticket?.type_ticket}) {plain?.event?.event} Ticket</span>
            <div style={tag_layout}>
                <span style={tag_type}>{plain?.event?.type}</span>
                <span style={tag}>
                    <MdLocationOn />
                    {plain?.event?.place}
                </span>
            </div>
            <div style={detail_layout}>
                <div style={detail_content}>
                    <span>Amount</span>
                    <span>IDR {plain?.ticket?.price}</span>
                </div>
                <div style={detail_content}>
                    <span>Quantity</span>
                    <div style={quantity_layout}>
                        <span style={quantity_button} onClick={()=>removeQuantity()}>-</span>
                        <span>{data?.quantity}</span>
                        <span style={quantity_button} onClick={()=>addQuantity()}>+</span>
                    </div>
                </div>
                <div style={detail_content}>
                    <span>Refferal Code</span>
                    <input onChange={(e) => setRefferal(e.target.value)} value={data?.refferal} style={refereal_input} placeholder="(Optional)" />
                </div>
            </div>
            <div style={{ ...detail_content, margin: '10px 0', fontSize: '1.2em', fontWeight: '600' }}>
                <span>Subtotal</span>
                <span>IDR {data?.total_price}</span>
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

const quantity_layout ={
    display:'flex',
    gap:'15px',
    alignItems:'baseline',
}

const quantity_button = {
    backgroundColor:'white',
    padding:'5px 12px',
    display:'block',
    color:'#eb0028',
    borderRadius:'100px',
    fontWeight:'bold',
    cursor:'pointer',
}
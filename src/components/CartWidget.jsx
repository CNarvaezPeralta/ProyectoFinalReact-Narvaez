
export default function CartWidget({ cantidad}) {
    return (
        <div className="cart-widget">
            🛒 <span>{cantidad}</span>
        </div>
    );
}
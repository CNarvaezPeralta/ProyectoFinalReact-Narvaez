import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Item from "./Item";
import "../styles/ItemList.css";

gsap.registerPlugin(ScrollTrigger);

const ItemList = ({ productos }) => {
    const containerRef = useRef(null);

    // Revela las tarjetas con un fade + subida al entrar en el viewport
    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            gsap.utils.toArray('.item-card').forEach((card, i) => {
                gsap.fromTo(
                    card,
                    { y: 28, autoAlpha: 0 },
                    {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.6,
                        ease: 'power2.out',
                        delay: (i % 4) * 0.06,
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 90%',
                            once: true,
                        },
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, [productos]);

    return (
        <div className="item-list-container" ref={containerRef}>
            {productos.map((prod) => (
                <Item key={prod.id} {...prod} />
            ))}
        </div>
    );
};

export default ItemList;

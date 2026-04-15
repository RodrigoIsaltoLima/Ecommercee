import './Produtos.css';
import bombom from '../../assets/bombomUva.png';
import brigadeiros from '../../assets/brigadeiros.png';
import brownie from '../../assets/brownie.png';
import cookie from '../../assets/cookie.png';
import pudim from '../../assets/pudim.png';
import torta from '../../assets/torta.png';

export default function Produtos() {
    return (
        <section className='produtos'>
            <div className='titulos'>
                <h2>Produtos</h2>
                <p>
                    Nossos produtos são feitos com ingredientes de alta qualidade e muito amor. Temos uma variedade de opções para todos os gostos, desde bolos e tortas até brigadeiros e cookies. Venha experimentar nossos deliciosos doces e se encantar com o sabor único que oferecemos!
                </p>

                <div className='produtos_grid'>
                    <div className='card'>
                        <img src={bombom} alt='Bombom de Uva' />
                        <span className='badge-venda'>Queridinho dos clientes!</span>
                    </div>
                    <div className='card-info'>
                        <h3>Bombom de Uva</h3>
                        <p className='preco'>R$ 99,90</p>
                        <button className='btn'>Colocar no carrinho</button>
                    </div>

                    <div className='card'>
                        <img src={brigadeiros} alt='Brigadeiros' />
                    </div>
                    <div className='card-info'>
                        <h3>Caixa de Brigadeiros</h3>
                        <p className='preco'>R$ 55,20</p>
                        <button className='btn'>Colocar no carrinho</button>
                    </div>

                    <div className='card'>
                        <img src={brownie} alt='Brownie' />
                        <span className='badge-venda'>Novidade da loja!</span>
                    </div>
                    <div className='card-info'>
                        <h3>Brownie da Manu</h3>
                        <p className='preco'>R$ 2,40</p>
                        <button className='btn'>Colocar no carrinho</button>
                    </div>

                    <div className='card'>
                        <img src={cookie} alt='Cookie' />
                    </div>
                    <div className='card-info'>
                        <h3>Cookies</h3>
                        <p className='preco'>R$ 15,90</p>
                        <button className='btn'>Colocar no carrinho</button>
                    </div>

                    <div className='card'>
                        <img src={pudim} alt='Pudim' />
                        <span className='badge-venda'>Poucas unidades!</span>
                    </div>
                    <div className='card-info'>
                        <h3>Pudim de Leite Condensado</h3>
                        <p className='preco'>R$ 12,99</p>
                        <button className='btn'>Colocar no carrinho</button>
                    </div>

                    <div className='card'>
                        <img src={torta} alt='Torta' />
                        <span className='badge-venda'>Mais buscados!</span>
                    </div>
                    <div className='card-info'>
                        <h3>Torta de Doce de Leite</h3>
                        <p className='preco'>R$ 184,90</p>
                        <button className='btn'>Colocar no carrinho</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
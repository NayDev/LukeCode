import React from 'react';
import './styles.css';

import Animation from '../../components/Animation';
import yoda from '../../assets/images/characters/yoda.png';
import separator from '../../assets/images/separator.svg';


const Home = () => {
    return(
        <>
        <Animation />
            <div className="section-1">
                <div className="container">
                    <header className="header">
                        <h2>Luck Code</h2>
                        <nav>
                            <button>FAZER LOGIN</button>
                            <button>INSCREVA-SE</button>
                        </nav>
                    </header>
                    <main>
                        <section>
                            <h1>Se torne um mestre <br />da programação!</h1>
                            <img src={separator} />
                            <p>De o próximo passo para seu futuro, <br />
                            que a força esteja com você.</p>
                        </section>
                        <section>
                            <img src={yoda} alt="Yoda - Star Wars"/>
                        </section>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Home;
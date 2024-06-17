import AOS from 'aos';
import 'aos/dist/aos.css';
import style from "./Sobremim.module.css"
import responsive from "./SobreMimResponse.module.css"
import imagemHome from "./image.png"
import instaImg from "../icon/instagram.svg"
import gitHubImg from "../icon/github.svg"
import linkdinImg from "../icon/linkedin.svg"



AOS.init({
    offset: 120,
    delay: 0,
    duration: 400,
    easing: 'ease',
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
  });

export function SobreMim() {
    return (
        <section  className={`${style.about} ${responsive.about}`}>
        <div className={`${style.containerAbout} ${responsive.containerAbouts}`}>
            <div className={`${style.headline} ${responsive.headline}`} data-aos="fade-up">
                <strong><span className={`${style.destaque} ${responsive.destaque}`}>Conheça um pouco</span></strong>
                <h1>SOBRE MIM</h1>
            </div>
            <div className={`${style.contentAbout} ${responsive.contentAbout}`}>
                <div className={`${style.contentAboutleft} ${responsive.contentAboutleft}`} data-aos="faderight">
                    <h1>Olá, me chamo Valerio</h1>
                    <p>sou um entusiasta de tecnologia apaixonado por inovação e descobertas no campo da 
                        Engenharia. Atualmente, estou avançando em minha jornada acadêmica em Engenharia Elétrica, nessa 
                        área fascinante,
                         buscando combinar teoria e prática para criar soluções inovadoras.

                    </p>
                    
                    
                    <p>💬 Comunicativo por natureza, valorizo a troca de ideias e a colaboração em equipe. Acredito 
                        que uma comunicação clara e eficaz é a chave para o sucesso em qualquer empreendimento.</p>
               
                    <p>⚡ Além do mundo acadêmico, encontro equilíbrio nas atividades esportivas, que me ensinaram 
                        valores como determinação, disciplina e trabalho em equipe. Essas lições são tão aplicáveis 
                        na vida profissional quanto nos campos esportivos.</p>

                    <div className={`${style.ctaAbout} ${responsive.ctaAbout}`}>
                        <div className={`${style.btnAbout} ${responsive.btnAbout}`} data-aos="fade-up">
                            <a href="#" target="_blank"><button className={`${style.btn} ${responsive.btn}`}>Visualizar DashBoard
                                    </button></a>
                            <a href="#"
                                download="https://www.mediafire.com/file/x14s2z79aplr1lu/curriculo_valerio.pdf/file"><button className={`${style.btn} ${responsive.btn}`}>Download curriculo</button></a>
                        </div>

                        <div className={`${style.aboutSocial} ${responsive.aboutSocial}`} data-aos="fade-up">
                            <a href="https://github.com/ValerioF16?tab=packages" target="_blank"><img src={gitHubImg} alt="" /><i className={`${style.aboutSocial} ${responsive.aboutSocial}`}></i></a>
                            <a href="https://www.linkedin.com/in/val%C3%A9rio-ferreira-silva-892745229/" target="_blank"><img src={linkdinImg} alt="" /><i className={`${style.aboutSocial} ${responsive.aboutSocial}`}></i></a>
                            <a href="https://www.instagram.com/oivalerio_?igsh=MTN0d3djcTM5ODdibQ%3D%3D&utm_source=qr" target="_blank"><img src={instaImg} alt="" /><i className={`${style.aboutSocial} ${responsive.aboutSocial}`}></i></a>
                            
                        </div>
                    </div>
                </div>
                <div className={`${style.contentAboutRight} ${responsive.contentAboutRight}`} data-aos="fade-left">
                    <div className= {`${style.imgAbout} ${responsive.imgAbout}`}>
                        <img src={imagemHome} alt="Imagem"/>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <br />
        <br />
    </section>
    )
  }
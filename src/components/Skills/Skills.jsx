import style from "./Skills.module.css"
import response from "./SkilsResponse.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import autocadImg from "../icon/autocad.svg"
import sapImg from "../icon/sap.svg"
import powerBImg from "../icon/powerbi.svg"
import pyBImg from "../icon/python.svg"
import mysqlBImg from "../icon/mysql.svg"
import analiseBImg from "../icon/google-analytic.svg"
import vscodeImg from "../icon/vscode.svg"
import postgreImg from "../icon/postgresql.svg"
import jsImg from "../icon/js.svg"
import excellImg from "../icon/excell.svg"
import pandaImg from "../icon/panda.svg"
import gitImg from "../icon/git.svg"





export function Skills(){
    return(
        <section className={`${style.skills} ${response.skills}`}>
        <div className={`${style.containerSkills} ${response.containerSkills}`}>
            <div className={`${style.skillsHeadline} ${response.skillsHeadline}`}>
                <strong><span className={`${style.destaque} ${response.destaque}`}>Conheça um pouco minhas</span></strong>
                <h1>Experiência</h1>
                <strong><p>Ambev SA</p><br /> Estagiário SET 2022 - DEZ 2023 (confiabilidade)</strong>

                <p>Criação de Dashboards: Desenvolvi dashboards interativos e visualmente
informativos utilizando ferramentas como Power BI . Esses dashboards eram
essenciais para monitorar a performance de equipamentos e processos,
fornecendo insights valiosos para a tomada de decisões estratégicas.
</p>
                <p>Criação de Planos de Manutenção: Participei da elaboração de planos de
manutenção preventiva e preditiva, baseando-me em dados históricos e análise
de falhas. Esses planos ajudaram a aumentar a disponibilidade e a
confiabilidade dos equipamentos, reduzindo tempos de inatividade e custos de
manutenção.
</p>
                <div className={`${style.listAbout} ${response.listAbout}`}>
                    <strong><span className={`${style.destaque} ${response.destaque}`}>Soft skills</span></strong>
                    <div className={`${style.containerList} ${response.containerList}`} data-aos="fade-up" data-aos-once = {false}>
                        <ul>
                            <li><i> <FontAwesomeIcon icon="angles-right" style={{ color: '#74C0FC' }} /></i>{" "} comunicação</li>
                            <li><i> <FontAwesomeIcon icon="angles-right" style={{ color: '#74C0FC' }} /></i>{" "} Colaboração</li>
                            <li><i> <FontAwesomeIcon icon="angles-right" style={{ color: '#74C0FC' }} /></i>{" "} Resolução</li>
                            <li><i> <FontAwesomeIcon icon="angles-right" style={{ color: '#74C0FC' }} /></i>{" "} Adaptabilidade</li>
                            <li><i> <FontAwesomeIcon icon="angles-right" style={{ color: '#74C0FC' }} /></i>{" "} Pontualidade</li>
                        </ul>
                        <ul>
                            
                            <li><i> <FontAwesomeIcon icon="angles-right" style={{ color: '#74C0FC' }} /></i>{" "} Detalhismo </li>
                            <li><i> <FontAwesomeIcon icon="angles-right" style={{ color: '#74C0FC' }} /></i>{" "} Crítica</li>
                            <li><i> <FontAwesomeIcon icon="angles-right" style={{ color: '#74C0FC' }} /></i>{" "} Criatividade</li>
                            <li><i> <FontAwesomeIcon icon="angles-right" style={{ color: '#74C0FC' }} /></i>{" "} Autodidatismo</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`${style.skillsInfo} ${response.skillsInfo}`}>
                <div className={`${style.cardTech} ${response.cardTech}`}>
                    <img src={powerBImg} alt=""/>
                    <p>PowerBI</p>
                </div>
                <div className={`${style.cardTech} ${response.cardTech}`} data-aos="fade-up" data-aos-delay="100" data-aos-once = {false}>
                    <img src={pyBImg} alt=""/>
                    <p>Python</p>
                </div>
                <div className={`${style.cardTech} ${response.cardTech}`} data-aos="fade-up" data-aos-delay="200" data-aos-once = {false}>
                    <img src={analiseBImg} alt=""/>
                    <p>Analytic</p>
                </div>
                <div className={`${style.cardTech} ${response.cardTech}`} data-aos="fade-up" data-aos-delay="300" data-aos-once = {false}>
                    <img src={mysqlBImg} alt=""/>
                    <p>MySQL</p>
                </div>
                <div className={`${style.cardTech} ${response.cardTech}`} data-aos="fade-up" data-aos-delay="400" data-aos-once = {false}>
                    <img src={postgreImg} alt=""/>
                    <p>Postgre</p>
                </div>
                <div className={`${style.cardTech} ${response.cardTech}`} data-aos="fade-up" data-aos-delay="500" data-aos-once = {false}>
                    <img src={sapImg} alt=""/>
                    <p>SAP</p>
                </div>
                <div className={`${style.cardTech} ${response.cardTech}`} data-aos="fade-up" data-aos-delay="600" data-aos-once = {false}>
                    <img src={vscodeImg}alt=""/>
                    <p>VScode</p>
                </div>
                <div className={`${style.cardTech} ${response.cardTech}`} data-aos="fade-up" data-aos-delay="700" data-aos-once = {false}>
                    <img src={autocadImg} alt=""/>
                    <p>AutoCad</p>
                </div>
                <div className={`${style.cardTech} ${response.cardTech}`} data-aos="fade-up" data-aos-delay="800" data-aos-once = {false}>
                    <img src={jsImg}alt=""/>
                    <p>Javascript</p>
                </div>
                <div className={`${style.cardTech} ${response.cardTech}`} data-aos="fade-up" data-aos-delay="900" data-aos-once = {false}>
                    <img src={excellImg} alt=""/>
                    <p>Excell</p>
                </div>
                <div className={`${style.cardTech} ${response.cardTech}`} data-aos="fade-up" data-aos-delay="1000" data-aos-once = {false}>
                    <img src={pandaImg} alt=""/>
                    <p>Pandas</p>
                </div>
                <div className={`${style.cardTech} ${response.cardTech}`} data-aos="fade-up" data-aos-delay="1100" data-aos-once = {false}>
                    <img src={gitImg} alt=""/>
                    <p>Git</p>
                </div>
            </div>
        </div>
        </section>
    )
}
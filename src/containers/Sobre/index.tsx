/* eslint-disable prettier/prettier */
import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>

    <Paragrafo tipo="secundario">
      dver hrnbtukio.l,xmoiejj ckmpcme pojfmc pmriogk,vérkkgv,lmbojtpbomt pojmpojhp mkbm tjm pmbpmtrpmb ptkkl,vbmtpmpvm,ovvmkmo irtjhnvjnh tuihonovn oejf nmdvmr iovcjrejvmke mojovije vpoepmvcp mrmpomv cmnbiuhn ovnfvntuhnf nbitnirnpajr oqjjorn vhr toivobtn iuhnboi nob kfnoihjiot.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats-sigma-five.vercel.app/api?username=vivianefmartins&show_icons=true&theme=dracula" alt="GitHub stats"/>
      <img src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=vivianefmartins&layout=compact&theme=dracula" alt="Top languages"/>
    </GithubSecao>
  </section>
)

export default Sobre

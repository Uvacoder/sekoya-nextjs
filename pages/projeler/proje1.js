import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faLinkedinIn,faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faBars,faStream } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="utf-8"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>Sekoya | Proje 1</title>
        <link rel="icon" href="/favicon64.png"/>
      </Head>
      <main>
        <div className="col-md-sidebar col-sm-12 col-xs-12 sidebar">
          <div className="sidebar-logo">
            <Link href="/"><a>
             <img className="sidebar-logo-img" src="../sekoya-logo.png" alt="sekoya-logo"/>
            </a></Link>
          </div>
          <div className="sidebar-items">
            <ul>
              <li className="sidebar-item">
                <Link href="/hakkimizda">Hakkımızda</Link>
              </li>
              <li className="sidebar-item">
                <Link href="/ekip">Ekibimiz</Link>
              </li>
              <li className="sidebar-item">
                <Link href="/nasil-calisiyoruz">Nasıl Çalışıyoruz</Link>
              </li>
              <li className="sidebar-item">
                <Link href="/hizmetlerimiz">Hizmetlerimiz</Link>
              </li>
              <li className="sidebar-item">
                <Link href="/projelerimiz">Projelerimiz</Link>
              </li>
              <li className="sidebar-item">
                <Link href="/iletisim">İletişim</Link>
              </li>
            </ul> 
          </div>
          <div className="sidebar-social">
            <div className="sidebar-social-item"><a href="#"><FontAwesomeIcon className="social-item" icon={faInstagram}/></a></div>
            <div className="sidebar-social-item"><a href="#"><FontAwesomeIcon className="social-item" icon={faLinkedinIn}/></a></div>
            <div className="sidebar-social-item"><a href="#"><FontAwesomeIcon className="social-item" icon={faWhatsapp}/></a></div>
          </div>
        </div>
        <div className="col-md-main col-sm-12 col-xs-12 proje">
          <div className="container">
            <div className="row">
              <div className="col-md-left col-sm-12 col-xs-12">
                <h1>Beyaz Işık Diş Polikliniği</h1>
                <div className="proje-list">
                  <a href="/../proje1_BeyazIsikDisKlinigi/BYZ_01_web.jpg" target="_blank"><img className="proje-img" src="../proje1_BeyazIsikDisKlinigi/BYZ_01_web.jpg" alt="Beyaz Işık Diş Kliniği"/></a>
                  <a href="/../proje1_BeyazIsikDisKlinigi/BYZ_02_web.jpg" target="_blank"><img className="proje-img" src="../proje1_BeyazIsikDisKlinigi/BYZ_02_web.jpg" alt="Beyaz Işık Diş Kliniği"/></a>
                  <a href="/../proje1_BeyazIsikDisKlinigi/BYZ_03_web.jpg" target="_blank"><img className="proje-img" src="../proje1_BeyazIsikDisKlinigi/BYZ_03_web.jpg" alt="Beyaz Işık Diş Kliniği"/></a>
                  <a href="/../proje1_BeyazIsikDisKlinigi/BYZ_04_web.jpg" target="_blank"><img className="proje-img" src="../proje1_BeyazIsikDisKlinigi/BYZ_04_web.jpg" alt="Beyaz Işık Diş Kliniği"/></a>
                  <a href="/../proje1_BeyazIsikDisKlinigi/BYZ_05_web.jpg" target="_blank"><img className="proje-img" src="../proje1_BeyazIsikDisKlinigi/BYZ_05_web.jpg" alt="Beyaz Işık Diş Kliniği"/></a>
                  <a href="/../proje1_BeyazIsikDisKlinigi/BYZ_06_web.jpg" target="_blank"><img className="proje-img" src="../proje1_BeyazIsikDisKlinigi/BYZ_06_web.jpg" alt="Beyaz Işık Diş Kliniği"/></a>
                  <a href="/../proje1_BeyazIsikDisKlinigi/BYZ_07_web.jpg" target="_blank"><img className="proje-img" src="../proje1_BeyazIsikDisKlinigi/BYZ_07_web.jpg" alt="Beyaz Işık Diş Kliniği"/></a>
                  <a href="/../proje1_BeyazIsikDisKlinigi/BYZ_08_web.jpg" target="_blank"><img className="proje-img" src="../proje1_BeyazIsikDisKlinigi/BYZ_08_web.jpg" alt="Beyaz Işık Diş Kliniği"/></a>
                  <a href="/../proje1_BeyazIsikDisKlinigi/BYZ_09_web.jpg" target="_blank"><img className="proje-img" src="../proje1_BeyazIsikDisKlinigi/BYZ_09_web.jpg" alt="Beyaz Işık Diş Kliniği"/></a>
                  <a href="/../proje1_BeyazIsikDisKlinigi/BYZ_10_web.jpg" target="_blank"><img className="proje-img" src="../proje1_BeyazIsikDisKlinigi/BYZ_10_web.jpg" alt="Beyaz Işık Diş Kliniği"/></a>
                  <a href="/../proje1_BeyazIsikDisKlinigi/BYZ_11_web.jpg" target="_blank"><img className="proje-img" src="../proje1_BeyazIsikDisKlinigi/BYZ_11_web.jpg" alt="Beyaz Işık Diş Kliniği"/></a>
                  <a href="/../proje1_BeyazIsikDisKlinigi/BYZ_12_web.jpg" target="_blank"><img className="proje-img" src="../proje1_BeyazIsikDisKlinigi/BYZ_12_web.jpg" alt="Beyaz Işık Diş Kliniği"/></a>
                  <a href="/../proje1_BeyazIsikDisKlinigi/BYZ_13_web.jpg" target="_blank"><img className="proje-img" src="../proje1_BeyazIsikDisKlinigi/BYZ_13_web.jpg" alt="Beyaz Işık Diş Kliniği"/></a>
                  <a href="/../proje1_BeyazIsikDisKlinigi/BYZ_14_web.jpg" target="_blank"><img className="proje-img" src="../proje1_BeyazIsikDisKlinigi/BYZ_14_web.jpg" alt="Beyaz Işık Diş Kliniği"/></a>
                  <a href="/../proje1_BeyazIsikDisKlinigi/BYZ_15_web.jpg" target="_blank"><img className="proje-img" src="../proje1_BeyazIsikDisKlinigi/BYZ_15_web.jpg" alt="Beyaz Işık Diş Kliniği"/></a>
                  <a href="/../proje1_BeyazIsikDisKlinigi/BYZ_16_web.jpg" target="_blank"><img className="proje-img" src="../proje1_BeyazIsikDisKlinigi/BYZ_16_web.jpg" alt="Beyaz Işık Diş Kliniği"/></a>
                  <a href="/../proje1_BeyazIsikDisKlinigi/BYZ_17_web.jpg" target="_blank"><img className="proje-img" src="../proje1_BeyazIsikDisKlinigi/BYZ_17_web.jpg" alt="Beyaz Işık Diş Kliniği"/></a>
                </div>
              </div>
              <div className="col-md-right col-sm-12 col-xs-12 proje-right">
                <div className="proje-text">
                  <p><strong>AÇIKLAMA,Künye</strong></p>
                  <p>Mecidiyeköy’de 2 kat ve 7 muayene odasından oluşan diş polikliniğindeki bekleme alanlarındaki duvar panelleri, banko ve banko arkası ahşap paneller, kafe bölümündeki dolap, bar masası ve niş içlerindeki ahşap rafların üretimi tamamlanmıştır. Ayrıca klinik odalarındaki tezgah altı dolapları, aynalar ve hekim masaları, klima arkasındaki lambiri panellerin üretimi yapılmıştır. Lobide bulunan dekoratif ahşap dikmeler duvarda, tavanda ve tavandaki lineer aydınlatmanın iç kısmında uygulanmıştır.</p>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </main>
    </div>
  )  
}


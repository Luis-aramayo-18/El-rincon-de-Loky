import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home flex flex-col items-center">
        <div className="max-w-lg flex justify-center items-center flex-col">
          <img src="../../public/Img/logo-home.png" alt="" />
        </div>

        <div>
          <h1 className="font-extrabold text-2xl text-white">
            Always be kind to the person holding the scissors next to your head.
          </h1>
        </div>

        <div>
          <div className="btn-appointment mt-8">AGENDAR TURNO</div>
        </div>

        <div className="container-socials flex justify-center gap-5 mt-6">
          <div className="icon-instagram flex justify-center items-center">
            <a className="flex" href="">
              <i class="bx bxl-instagram "></i>
            </a>
          </div>
          <div className="icon-facebook flex justify-center items-center">
            <a className="flex" href="">
              <i class="bx bxl-facebook "></i>
            </a>
          </div>
          <div className="icon-gmail flex justify-center items-center">
            <a className="flex" href="">
              <i class="bx bxl-gmail "></i>
            </a>
          </div>
        </div>
      </section>

      <section className="section-about">
        <div className="flex flex-col items-end justify-center gap-5 h-5/6">
          <div className="header-about-section w-2/4">
            <h3 className="text-3xl font-black">
              LUCE TU BARBA TANTO COMO TU SONRISA
            </h3>
            <h5 className="mt-4 text-lg font-bold">QUIENES SOMOS?</h5>
          </div>

          <div className="w-2/4">
            <p className="text-gray-950">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              adipisci vitae consequatur distinctio inventore consectetur
              asperiores, quos suscipit corporis voluptate, repellendus animi.
              Repellendus voluptate quam pariatur! Nihil labore illum facere.
            </p>
          </div>

          <div className="list-about w-2/4">
            <ul>
              <li className="flex mt-1">
                <span className="text-xl">
                  <i class="bx bx-check-circle"></i>
                </span>
                <span className="ml-2">
                  Somos profesionales y certificados barberos.
                </span>
              </li>
              <li className="flex mt-1">
                <span className="text-xl">
                  <i class="bx bx-check-circle"></i>
                </span>
                <span className="ml-2">
                  Usamos las mejores marcas, porque te mereces los mejores
                  resultados.
                </span>
              </li>
              <li className="flex mt-1">
                <span className="text-xl">
                  <i class="bx bx-check-circle"></i>
                </span>
                <span className="ml-2">
                  Nos preocupamos por la satisfacción de nuestros clientes.
                </span>
              </li>
            </ul>
          </div>

          <div className="w-2/4 mt-4">
            <div className="btn-seemore-about inline-block">
              <Link to="/about">VER MAS</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-3 flex flex-col justify-center">
        <div className="flex justify-center">
          <h3 className="text-shadow text-5xl text-white mb-16 font-custom font-medium">
            Porque nos eligen?
          </h3>
        </div>

        <div className="flex mt-4">
          <div className="flex flex-col items-center gap-5">
            <article className="flex items-center justify-center w-2/3 h-1/3 gap-4">
              <div className="w-2/6 flex justify-center items-center rounded-full border-4 border-orange-200">
                <img className="p-6" src="../../public/Img/local.png" alt="" />
              </div>
              <div className="w-4/6 text-center">
                <h5 className="text-white text-lg font-medium">
                  La mejor barbería
                </h5>
                <p className="text-white my-3 font-light">
                  El masaje con aceites calientes complementa al <br />
                  tratamiento con toalla caliente hombre.
                </p>
              </div>
            </article>
            <article className="flex items-center justify-center w-2/3 h-1/3 gap-4">
              <div className="w-4/6 text-center">
                <h5 className="text-white text-lg font-medium">
                  El mejor equipo
                </h5>
                <p className="text-white my-3 font-light">
                  Sólo las barberías de alto nivel pueden ofrece cortes en
                  capas.
                </p>
              </div>
              <div className="w-2/6 flex justify-center items-center rounded-full border-4 border-orange-200">
                <img
                  className="p-6"
                  src="../../public/Img/barbero.png"
                  alt=""
                />
              </div>
            </article>
            <article className="flex items-center justify-center w-2/3 h-1/3 gap-4">
              <div className="w-2/6 flex justify-center items-center rounded-full border-4 border-orange-200">
                <img
                  className="p-8"
                  src="../../public/Img/maquina.png"
                  alt=""
                />
              </div>
              <div className="w-4/6 text-center">
                <h5 className="text-white text-lg font-medium">
                  Los mejores equipamientos
                </h5>
                <p className="text-white my-3 font-light">
                  Los peinados largos siempre están de moda y son populares.
                </p>
              </div>
            </article>
          </div>

          <div className="flex flex-col items-center gap-4">
            <article className="flex items-center justify-center w-2/3 h-1/3 gap-4">
              <div className="w-2/6 flex justify-center items-center rounded-full border-4 border-orange-200">
                <img
                  className="p-4"
                  src="../../public/Img/cliente.png"
                  alt=""
                />
              </div>
              <div className="w-4/6 text-center">
                <h5 className="text-white text-lg font-medium">
                  Servicio Completo
                </h5>
                <p className="text-white my-3 font-light">
                  Este servicio incluye corte de cabello, champú y
                  acondicionador.
                </p>
              </div>
            </article>
            <article className="flex items-center justify-center w-2/3 h-1/3 gap-4">
              <div className="w-4/6 text-center">
                <h5 className="text-white text-lg font-medium">
                  Estilos Modernos
                </h5>
                <p className="text-white my-3 font-light">
                  Nuestros barberos le darán a tu barba ese estilo vanguardista.
                </p>
              </div>
              <div className="w-2/6 flex justify-center items-center rounded-full border-4 border-orange-200">
                <img className="p-4" src="../../public/Img/navaja.png" alt="" />
              </div>
            </article>
            <article className="flex items-center justify-center w-2/3 h-1/3 gap-4">
              <div className="w-2/6 flex justify-center items-center rounded-full border-4 border-orange-200">
                <img
                  className="p-4"
                  src="../../public/Img/barberia.png"
                  alt=""
                />
              </div>
              <div className="w-4/6 text-center">
                <h5 className="text-white text-lg font-medium">
                  El mejor lugar
                </h5>
                <p className="text-white my-3 font-light">
                  Hot oils massage complements to hot towel treatment man.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white p-4 relative flex flex-col items-center">
        <article className="flex gap-4 mt-10">
          <div className="w-2/6 flex flex-col justify-center ml-10">
            <h3 className="text-lg font-bold">Que te ofrecemos ?</h3>
            <span className="text-4xl font-black">Nuestros servicios</span>
          </div>

          <div className="w-4/6">
            <p className="text-md">
              Somos una barbería de servicio completo aquí en Loky Cuts, y eso
              significa que hacemos mucho más que ofrecer un excelente corte de
              pelo. Creemos que un corte de pelo debería ser un ritual, una
              experiencia nostálgica que nos transporta a días más sencillos.
              Desde las auténticas sillas de barbero hasta nuestros afeitados
              con espuma caliente y navaja de filo recto al estilo antiguo...
              Loky Cuts establece un nuevo estándar para las barberías.
            </p>
          </div>
        </article>

        <div className="h-3/4 mt-6 flex justify-center items-center">
          <div className="w-2/4 mr-8 flex flex-col gap-y-10 justify-center mt-20">
            <article className="card-degraded relative p-4 h-80 flex justify-center">
              <div className="hover-content relative w-2/4 text-white opacity-0">
                <h3>Degradados</h3>
                <p>
                  El término "fade" se ha convertido en el término popular para
                  cono agresivamente apretado. El pelo de los lados y de la
                  espalda se corta lo más al ras posible con cortapelos y “se
                  desvanece” o se estrecha en casi cualquier longitud en la
                  parte superior.
                </p>
                <a href="">
                  <div>Ver Mas</div>
                </a>
              </div>
              <img
                className="h-96 absolute bottom-0 block transform transition-transform hover-img"
                src="../../public/Img/tipos-de-cortes-de-cabello-para-hombres-4_preview_rev_1.png"
                alt=""
              />
            </article>
            <article className="card-cuts relative p-4 h-80 flex justify-center mt-14">
              <img
                className="h-96 absolute bottom-0 block transform transition-transform hover-img"
                src="../../public/Img/corte-de-pelo-taper-7_preview_rev_1.png"
                alt=""
              />
              <div className="hover-content relative w-2/4 text-white opacity-0">
                <h3>Cortes y lavados</h3>
                <p>
                  Ven a sentarte y relajarte con nuestro servicio exclusivo; Un
                  corte de pelo a tu medida, un línea de navajas de afeitar,
                  champú y un tratamiento con toalla caliente mientras disfrutas
                  de un acondicionamiento masaje de cabeza.
                </p>
                <a href="">
                  <div>Ver Mas</div>
                </a>
              </div>
            </article>
          </div>

          <div className="w-2/4 ml-8 flex flex-col gap-y-10 justify-center mt-20">
            <article className="card-gentlemens relative p-4 h-80 flex justify-center">
              <div className="hover-content relative w-2/4 text-white opacity-0">
                <h3>Cortes para Caballeros</h3>
                <p>
                  Nuestros cortes de cabello para hombres galardonados son la
                  manera perfecta de lograr el estilo que deseas. Nuestro Los
                  cortes de cabello incluyen una consulta gratuita, champú,
                  corte de precisión y peinado.
                </p>
                <a href="">
                  <div>Ver Mas</div>
                </a>
              </div>
              <img
                className="h-96 absolute bottom-0 block transform transition-transform hover-img"
                src="../../public/Img/tipos-de-cortes-de-cabello-para-hombres-10_preview_rev_1.png"
                alt=""
              />
            </article>
            <article className="card-kids relative p-4 h-80 flex justify-center mt-14 group">
              <div className="hover-content relative w-2/4 bg-transparent text-white opacity-0">
                <h3>Cortes para Niños</h3>
                <p>
                  Como experto, cuando se trata de cortes de pelo para niños,
                  puede confiar en que le brindaremos servicios elegantes.
                  peinados. Sabemos que la apariencia es un factor esencial, y
                  ten por seguro que lo haremos supere sus expectativas.
                </p>
                <a href="">
                  <div>Ver Mas</div>
                </a>
              </div>
              <img
                className="h-96 absolute bottom-0 block transform transition-transform hover-img"
                src="../../public/Img/tipos-de-cortes-de-cabello-para-hombres-1_preview_rev_1.png"
                alt=""
              />
            </article>
          </div>
        </div>

        <article className="flex justify-center my-20 mt-28">
          <div className="flex gap-20 bg-transparent absolute z-50">
            <div className="flex items-center gap-5 bg-white px-4 py-8 shadow-2xl shadow-black -skew-x-6">
              <img src="../../public/Img/barba.png" alt="" />
              <div className="text-center">
                <h3 className="text-3xl font-semibold italic">+100</h3>
                <span className="text-sm font-medium tracking-widest italic">
                  ESTILOS DE <br /> CABELLOS
                </span>
              </div>
            </div>
            <div className="flex items-center  gap-5 bg-white px-4 py-8 shadow-2xl shadow-black -skew-x-6">
              <img src="../../public/Img/barba.png" alt="" />
              <div className="text-center">
                <h3 className="text-3xl font-semibold italic">+100</h3>
                <span className="text-sm font-medium tracking-widest italic">
                  ESTILOS DE <br /> CABELLOS
                </span>
              </div>
            </div>
            <div className="flex items-center  gap-5 bg-white px-4 py-8 shadow-2xl shadow-black -skew-x-6">
              <img src="../../public/Img/barba.png" alt="" />
              <div className="text-center">
                <h3 className="text-3xl font-semibold italic">+100</h3>
                <span className="text-sm font-medium tracking-widest italic">
                  ESTILOS DE <br /> CABELLOS
                </span>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="section-footer h-3/5 relative">
        <div className="h-full flex items-center">
          <article className="w-2/6 text-center ml-28 mb-40">
            <h5 className="text-orange-200 italic text-2xl font-black tracking-widest">
              NO BUSQUES MAS...
            </h5>
          </article>
          <article className="w-4/6 flex justify-end mr-10 mt-80">
            <h3 className="text-white text-3xl font-black tracking-wide	italic">
              SOMOS LA MEJOR OPCIÓN <br /> PARA CABALLEROS !
            </h3>
          </article>
        </div>
      </section>

      <section className="h-2/5 bg-white">
        <h2 className="text-center pt-14">CONTACTO</h2>

        <article className="flex justify-center gap-8 mt-14">
          <a className="relative bg-black border border-black w-24 h-24 rotate-45 skew-x-6" href="">
            <div>
              <span className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center text-4xl"></span>
              <span className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center text-4xl"></span>
              <span className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center text-4xl"></span>
              <span className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center text-4xl"></span>
              <span className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center text-4xl">
                <i className="text-white bx bxl-instagram "></i>
              </span>
            </div>
          </a>
          <a className="relative bg-black border border-black w-24 h-24" href="">
            <div>
              <span className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center text-4xl"></span>
              <span className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center text-4xl"></span>
              <span className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center text-4xl"></span>
              <span className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center text-4xl"></span>
              <span className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center text-4xl">
                <i className="text-white bx bxl-facebook "></i>
              </span>
            </div>
          </a>
          <a className="relative bg-black border border-black w-24 h-24" href="">
            <div>
              <span className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center text-4xl"></span>
              <span className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center text-4xl"></span>
              <span className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center text-4xl"></span>
              <span className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center text-4xl"></span>
              <span className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center text-4xl">
                <i className="text-white bx bxl-gmail "></i>
              </span>
            </div>
          </a>
          <a className="relative bg-black border border-black w-24 h-24" href="">
            <div>
              <span className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center text-4xl"></span>
              <span className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center text-4xl"></span>
              <span className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center text-4xl"></span>
              <span className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center text-4xl"></span>
              <span className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center text-4xl">
                <i className="text-white bx bxl-tiktok"></i>
              </span>
            </div>
          </a>
        </article>
      </section>
    </>
  );
};

export default Home;

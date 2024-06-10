import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./colaborador.css";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
  function favorito() {
    aoFavoritar(colaborador.id);
  }

  const propsfavorito = {
    size: 25,
    onClick: favorito
  }

  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(colaborador.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favoritar">
          {colaborador.favoritar ? (
            <AiFillHeart {...propsfavorito} color="#ff0000"/>
          ) : (
            <AiOutlineHeart {...propsfavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;

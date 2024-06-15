import { 
  BsFillEmojiFrownFill , 
  BsEmojiNeutralFill , 
  BsFillEmojiSmileFill , 
  BsFillEmojiHeartEyesFill } from "react-icons/bs";

function Thanks({data}) {

  const emojiData = {
     unsatisfied : <BsFillEmojiFrownFill/> ,
     neutral: <BsEmojiNeutralFill/> ,
     satisfied : <BsFillEmojiSmileFill/> ,
     very_satisfied : <BsFillEmojiHeartEyesFill/>
  }

  return (
    <div className='thanks'>
      <section className='form-send'>
        <h3>Falta pouco ...</h3>
        <p>A sua opinião é muito importante , em breve você receberá 
          um cumpom de 10% de desconto para sua próxima compra.
        </p>
        <p>Para concluir sua avaliação clique no botão de Enviar abaixo</p>
      </section>

      <section className='rating'>
        <h3>Aqui esta o resumo de sua avaliação: {data.name}</h3>
        <p>Satisfação com o produto: {emojiData[data.review]}</p>
        <p>Comentário: {data.comment}</p>
      </section>
  
    </div>
  )
}

export default Thanks
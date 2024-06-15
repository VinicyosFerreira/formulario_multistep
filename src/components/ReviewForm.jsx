import { 
BsFillEmojiFrownFill 
, BsEmojiNeutralFill , 
  BsFillEmojiSmileFill , 
  BsFillEmojiHeartEyesFill } from "react-icons/bs";

function ReviewForm({data , updateFieldHandler}) {
  return (
    <div className='review-form'>
      <section className='options-review'>
        <label>
          <input 
          type='radio' 
          name='review' 
          value='unsatisfied' 
          checked = {data.review === "unsatisfied"}
          onChange={(e) => updateFieldHandler("review" , e.target.value) }/>
          <BsFillEmojiFrownFill size={25}/>
          <span>Insatisfeito</span>
        </label>
        <label>  
            <input type='radio' 
            name='review' 
            value='neutral'
            checked = {data.review === "neutral"}
            onChange={(e) => updateFieldHandler("review" , e.target.value)}/>
            <BsEmojiNeutralFill size={25}/>
            <span>Poderia ser melhor</span>
        </label>
        <label>
          <input type='radio'  
          name='review'  
          value='satisfied'
          checked = {data.review === "satisfied"}
          onChange={(e) => updateFieldHandler("review" , e.target.value)}/>
          <BsFillEmojiSmileFill size={25}/>
          <span>Satisfeito</span>
        </label>
        <label >
          <input type='radio'  
          name='review' 
          value='very_satisfied'
          checked = {data.review === "very_satisfied"}
          onChange={(e) => updateFieldHandler("review" , e.target.value)}/> 
          <BsFillEmojiHeartEyesFill size={25}/>
          <span>Muito satisfeito</span> 
        </label> 
      </section>

      <section className='comment'>
        <p>Comentário :</p>
        <textarea 
          placeholder='Conte como foi sua experiência com o produto' 
          value={data.comment || ""}
          name = 'comment'
          required
          onChange={(e) => updateFieldHandler("comment" , e.target.value)}
        />
      </section>
    </div>
  )
}

export default ReviewForm